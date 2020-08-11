import { RefObject, Dispatch, SetStateAction } from 'react';

export function usePrevState<T>(newState: T): T;
export function useDotDotDot(
  ref: RefObject<HTMLElement>
): { isOverflow: boolean; setIsOverflow: Dispatch<SetStateAction<boolean>> };
