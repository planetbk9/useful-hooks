# React hooks

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

console.log('prevState: ', prevId, prevCount);
console.log('newState: ', newId, newCount);
```

2. useWindowSize(TBD)

3. useDnd(TBD)

...
