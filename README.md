# Canvas Animation Frame

Standalone frame limiter. Set the frames per second (FPS) and let it run.

## Example

```js
const animation = new AnimationFrame(10, () => update());

function update() {
  // do something
}
```

See the [example folder](./example) for a fully working example.
