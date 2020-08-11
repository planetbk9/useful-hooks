/**
 * Prerequites
 * The position of dom(not static)
 * The height of dom(not auto)
 * the overflow of dom should be hidden
 */

import { useEffect, useState, RefObject } from 'react';

export default function useDotDotDot(ref: RefObject<HTMLElement>) {
  const [isOverflow, setIsOverflow] = useState<boolean>(true);
  const [original, setOriginal] = useState<string>('');

  useEffect(() => {
    const dom = ref.current;
    if (dom) {
      const { scrollHeight, clientHeight, innerText } = dom as HTMLElement;
      setOriginal(innerText);

      // overflow occurs
      if (scrollHeight > clientHeight) {
        setIsOverflow(true);
      } else {
        setIsOverflow(false);
      }
    }
  }, []);

  const dom = ref.current;

  if (dom) {
    if (!isOverflow) {
      dom.innerText = original;
    } else {
      // texts reduced until the overflow does not occur
      let error = false;
      while (dom.scrollHeight > dom.clientHeight && !error) {
        const length = dom.innerText.length;
        if (length <= 1) {
          error = true;
          break;
        }
        dom.innerText = dom.innerText.substr(0, length - 1);
      }

      // add the dotdotdot & reduce until newline
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
