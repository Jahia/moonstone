## Example
```jsx
import {Separator} from '@jahia/moonstone';

<Separator/>
```

## Do
- Use it to divide sections of content, such as groups of rows in a list or sections of a page.
- Use it to separate items laid out in a row, such as groups of controls in a toolbar.
- Use it between repeated items, such as in a list built from a template. It can hide itself at the edges of the list, and when two Separators end up next to each other, the first one hides itself.

## Don't
- Don't use a Separator between the steps of a breadcrumb trail. Use a **Breadcrumb** instead, which renders its own dividers.
- Don't use a Separator to group the entries of the primary navigation. Use a **PrimaryNavItemsGroup** instead, which adds the divider for you.

## Appearance

### `variant` for orientation

| Value | Use it for |
|---|---|
| `horizontal` | Stacked content, such as rows in a vertical list. |
| `vertical` | Content laid out in a row, such as items in a toolbar. |

### `size` for span

| Value | Use it for |
|---|---|
| `medium` | _Pending design guidance_ <!-- designer: when should a separator stop well short of both edges of its container, vs `large`? --> |
| `large` | _Pending design guidance_ <!-- designer: when should a separator stop just short of both edges of its container, vs `medium`? --> |
| `full` | _Pending design guidance_ <!-- designer: is edge-to-edge the default choice for most separators? --> |

### `spacing` for gap

| Value | Use it for |
|---|---|
| `none` | _Pending design guidance_ <!-- designer: confirm: when the surrounding layout already provides the spacing? --> |
| `small` | _Pending design guidance_ <!-- designer: confirm: most lists and content stacks? --> |
| `medium` | _Pending design guidance_ <!-- designer: when does a separator need more room than `small`? --> |
| `big` | _Pending design guidance_ <!-- designer: when does a separator need the most room? --> |

### `invisible` for context

| Value | Use it for |
|---|---|
| `firstChild` | A separator rendered before each item, so none shows before the first one. It hides when it is the first child of its parent. |
| `lastChild` | A separator rendered after each item, so none shows after the last one. It hides when it is the last child of its parent. |
| `onlyChild` | A separator that may end up alone, with nothing to separate. It hides when it is the only child of its parent. |
| `firstOrLastChild` | A separator that may land at either edge, such as around a repeated item. It hides when it is the first or the last child of its parent. |

## Accessibility
- The component renders a native `<hr>`, which assistive technology already announces as a separator. No extra ARIA is needed for a horizontal one.
- For a vertical Separator, pass `aria-orientation="vertical"`. A separator is horizontal for assistive technology unless told otherwise.
- A hidden Separator is removed from the accessibility tree, not only hidden visually.
