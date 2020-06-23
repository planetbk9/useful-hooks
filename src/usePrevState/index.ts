import { useRef, useEffect } from 'react';

function usePrevState<T>(newState: T): void {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current = newState;
  });

  return ref.current;
}

export default usePrevState;
