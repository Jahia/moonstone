## Example
```jsx
import {ResizableBox} from '~/components';

<ResizableBox aria-label="Properties panel">
    <YourContent/>
</ResizableBox>
```

## Controlled
- Pass `size` and update it in `onResizeStop`. You own the size: once `size` is set, the box keeps the size you pass.
- Use it when you need to restore a saved width, or to set the width from elsewhere in the UI.
- Don't mix the two modes. Passing both `size` and `defaultSize` is not supported: `defaultSize` is then ignored.
- `onResizeStart`, `onResizing`, and `onResizeStop` receive the event, the resized edge (`'right'`), and the resized element. `onResizing` and `onResizeStop` also receive the `delta`, the change of `width` and `height` since the resize began.

```jsx
<ResizableBox size={{width, height: 'auto'}} maxWidth={600} onResizeStop={(event, direction, element, delta) => setWidth(width + delta.width)}>…</ResizableBox>
```

## Uncontrolled
- Pass `defaultSize` (optional) and let the component manage its own size.
- Use it when nothing else needs to know or set the size.

```jsx
<ResizableBox defaultSize={{width: 300, height: 'auto'}} maxWidth={600}>…</ResizableBox>
```

## Do
- Use it to build the resizable panel of [SecondaryNav](?path=/docs/components-secondarynav--docs).
- Use it to build a Moonstone component whose side panel the user widens or narrows by dragging its right edge.

## Don't
- Don't use ResizableBox in application code. For the second-level navigation of a section, use a [SecondaryNav](?path=/docs/components-secondarynav--docs) instead, which is already resizable and can be hidden.

## Accessibility
- Pass an `aria-label` that names the panel, such as "Properties panel". The root element is a landmark region.
- From the focused handle, the Left and Right arrow keys narrow and widen the box (soon).
- Home and End shrink the box to its minimum width and grow it to its maximum width (soon).
