/**
 * Prerequites
 * DOM의 position이 특정되어 있어야 함(not static)
 * DOM의 height가 특정되어 있어야 함(not auto)
 * DOM의 overflow가 hidden 이어야 함
 * DOM의 line-height가 글자 크기 이상이어야 함
 */

import { useEffect, useState } from 'react';

export default function useDotDotDot(getDom: () => HTMLElement | null) {
  const [isOverflow, setIsOverflow] = useState<boolean>(true);
  const [original, setOriginal] = useState<string>('');

  useEffect(() => {
    const dom = getDom();
    if (dom) {
      const { scrollHeight, clientHeight, innerText } = dom as HTMLElement;
      setOriginal(innerText);

      // overflow가 일어난 상황
      if (scrollHeight > clientHeight) {
        setIsOverflow(true);
      } else {
        setIsOverflow(false);
      }
    }
  }, []);

  const dom = getDom();

  if (dom) {
    if (!isOverflow) {
      dom.innerText = original;
    } else {
      // overflow 발생하지 않을 때까지 끝에서부터 하나씩 제거
      let error = false;
      while (dom.scrollHeight > dom.clientHeight && !error) {
        const length = dom.innerText.length;

        if (length >= 2) {
          dom.innerText = dom.innerText.substr(0, length - 1);
        } else {
          error = true;
        }
      }

      // dotdotdot을 붙이고 다시 overflow가 발생하지 않을 때까지 끝에서부터 하나씩 제거
      dom.innerText += '...';
      while (dom.scrollHeight > dom.clientHeight && !error) {
        const length = dom.innerText.length;
        dom.innerText = dom.innerText
          .substr(0, length - 4)
          .concat(dom.innerText.substr(length - 3));
      }
    }
  }

  return {
    isOverflow,
    setIsOverflow,
  };
}
