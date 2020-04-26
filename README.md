# React hooks

1. [usePrevState](./src/usePrevState.ts) \
   description: refer to previous state \
   usage:

```ts
const prevState = usePrevState({ id, count });
const { id: prevId, count: prevCount } = prevState;

if (prevCount < 0) {
  console.error('inavalid state');
}
```
