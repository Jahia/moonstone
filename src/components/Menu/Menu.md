A floating overlay that presents a list of choices or actions, positioned relative to
an anchor element or the viewport. Compose it from MenuItem children.

## When to use
- A list of *actions* triggered from a button or element (context menu, "more" menu).
- An anchored, dismissable list that floats above the content.

## When NOT to use
- Selecting a *value* for a form field → use **Dropdown** (which uses Menu internally).
- A persistent side navigation → use **PrimaryNav** / **SecondaryNav**.
- A blocking dialog → use **Modal**.

## Usage
```jsx
import {Menu, MenuItem} from '@jahia/moonstone';

const anchor = useRef(null);

<Button ref={anchor} icon={<More/>} aria-label="More actions" onClick={() => setOpen(true)}/>
<Menu isDisplayed={open} anchorEl={anchor} onClose={() => setOpen(false)}>
    <MenuItem label="Rename" onClick={onRename}/>
    <MenuItem label="Delete" onClick={onDelete}/>
</Menu>
```

- `isDisplayed` controls visibility; `onClose` fires on item click / outside click.
- Positioning: `anchorEl` (relative to that element) or `anchorPosition` (relative to
  viewport); `position` is `fixed` (default) or `absolute`; tune with
  `anchorElOrigin` / `transformElOrigin`.
- Search: `hasSearch` (auto past `autoAddSearchLimit`, default 7); `searchEmptyText` for no results.
- Size: `maxHeight` (scrolls past it), `maxWidth`, `minWidth`.

## Composition
- Fill with **MenuItem** children.

## Accessibility
- Keyboard: Enter validates a value; click an item or outside to dismiss.

## Related
- **MenuItem**, **Dropdown** (value selection built on Menu), **Modal**.
