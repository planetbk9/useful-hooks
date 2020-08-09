# React hooks

## Explanation

There are many useful custom hook libraries.

## Support

All libraries are build based on es6 module so it should be tree-shaked if you import in es6 module import way.

Usage:

```ts
import { usePrevState, useWindowSize } from "useful-hooks";
```

## Libraries

1. usePrevState [./src/usePrevState/index.ts]
   description: refer to previous state
   usage:

```ts
interface State {
  id: number;
  count: number;
}

const prevState: State = usePrevState<State>({ id, count });
const [newState] = useState<State>({ id: 0, count: 0 });

const { id: prevId, count: prevCount } = prevState;
const { id: newId, count: newCount } = newState;

console.log("prevState: ", prevId, prevCount);
console.log("newState: ", newId, newCount);
```

2. useWindowSize(TBD)

3. useDnd(TBD)

4. useDotDotDot

...
