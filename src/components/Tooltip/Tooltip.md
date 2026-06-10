A small floating label that appears when the user hovers or focuses an element. Use it
for brief, supplementary hints — never for essential information.

## When to use
- Clarifying an icon-only control or a truncated label.
- Short, supplementary hints the user can do without.

## When NOT to use
- Essential information the user must read → put it in the UI (e.g. helper text / **Field**).
- A list of actions → use **Menu**. A blocking message → use **Modal**. A persistent
  status → use **Banner**.
- Rich/interactive content — tooltips are for short text only.

## Usage
```jsx
import {Tooltip, Button} from '@jahia/moonstone';
import {Info} from '@jahia/moonstone/icons';

<Tooltip label="Add to favorites">
    <Button icon={<Info/>} aria-label="Add to favorites"/>
</Tooltip>
```

- `label` is the tooltip text.
- `children` is the single anchor element the tooltip describes.

## Accessibility
- The tooltip is supplementary; the anchor must still be understandable on its own
  (e.g. an icon-only button keeps its `aria-label`). Tooltips show on focus, not just hover.

## Related
- **Field** helper text (for essential guidance), **Banner**, **Menu**.
