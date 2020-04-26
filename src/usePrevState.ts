import { useRef, useEffect } from 'react';

function usePrevState(newState: any) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = newState;
  });

  return ref.current;
}

export default usePrevState;
