## Example
```jsx
import {ResizableBox} from '~/components';

<ResizableBox aria-label="Properties panel">
    <YourContent/>
</ResizableBox>
```

## Controlled & uncontrolled

**Uncontrolled** mode: the ResizableBox manages its own size. Set `defaultSize` for the size on first render. Use it when no other part of the UI needs to know or set the size.

```jsx
<ResizableBox defaultSize={{width: 300, height: 'auto'}} maxWidth={600}>…</ResizableBox>
```

**Controlled** mode: pass `size` and update it in `onResizeStop`. Your component owns the size. Use it when you need to restore a saved width, or to set the width from elsewhere in the UI.

```jsx
const [width, setWidth] = useState(300);

<ResizableBox
    size={{width, height: 'auto'}}
    maxWidth={600}
    onResizeStop={(event, direction, element, delta) => setWidth(width + delta.width)}
>
    …
</ResizableBox>
```

`onResizeStart`, `onResizing`, and `onResizeStop` receive the event, the resized edge (`'right'`), and the resized element. `onResizing` and `onResizeStop` also receive the `delta`, the change of `width` and `height` since the resize began.

Don't pass both `size` and `defaultSize`. Once `size` is set, `defaultSize` is ignored and the box keeps the size you pass, so update it in `onResizeStop`.

## Do
- Use it to build the resizable panel of [SecondaryNav](?path=/docs/components-secondarynav--docs).
- Use it to build a Moonstone component whose side panel the user widens or narrows by dragging its right edge.

## Don't
- Don't use ResizableBox in application code. For the second-level navigation of a section, use a [SecondaryNav](?path=/docs/components-secondarynav--docs) instead, which is already resizable and can be hidden.

## Accessibility
- Pass an `aria-label` that names the panel, such as "Properties panel". The root element is a landmark region.
- From the focused handle, the Left and Right arrow keys narrow and widen the box (soon).
- Home and End shrink the box to its minimum width and grow it to its maximum width (soon).
