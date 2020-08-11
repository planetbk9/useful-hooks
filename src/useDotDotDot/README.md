# useDotDotDot

Display overlowing texts as ...

`Caution`: The dom should have `position`, `height`, `overflow: hidden` of its own

```ts
// Displaying ... for overflow texts
const { isOverflow, setIsOverflow } = useDotDotDot(ref);
setIsOverflow(false); // Display full texts
```
