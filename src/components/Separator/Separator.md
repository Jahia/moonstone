## Example
```jsx
import {Separator} from '@jahia/moonstone';

<Separator/>
```

## Do
- Use it to divide sections of content, such as rows in a list or sections of a page.
- Use `variant="vertical"` to separate content laid out in a row, such as items in a toolbar.
- Use `invisible` to automatically hide a separator at the edge of a list, such as before the first item or between repeated items.
- Place Separators next to each other without worry: when two end up adjacent, the first one hides itself automatically.

## Don't
- Don't use Separator as the divider between breadcrumb steps. **Breadcrumb** already renders its own.

## Appearance

### `variant` for orientation

| Value | Use it for |
|---|---|
| `horizontal` | The default. Separates stacked content, such as rows in a vertical list. |
| `vertical` | Separates content laid out in a row, such as items in a toolbar. |

### `size` for span

| Value | Use it for |
|---|---|
| `medium` | _Pending design guidance_ <!-- designer: when should a separator inset this much from both edges, vs `large`? --> |
| `large` | _Pending design guidance_ <!-- designer: when should a separator inset this little from both edges, vs `medium`? --> |
| `full` | The default. Spans the full width (or height, for `vertical`) of its container. |

### `spacing` for gap

| Value | Use it for |
|---|---|
| `none` | Use when the surrounding layout already provides the spacing around the separator. |
| `small` | The default, for most lists and content stacks. |
| `medium` | _Pending design guidance_ <!-- designer: when does a separator need more breathing room than `small`? --> |
| `big` | _Pending design guidance_ <!-- designer: when does a separator need the most breathing room? --> |

### `invisible` for context

| Value | Use it for |
|---|---|
| `firstChild` | Hide the separator when it is the first child of its parent, avoiding a redundant rule before the first item. |
| `lastChild` | Hide the separator when it is the last child of its parent, avoiding a redundant rule after the last item. |
| `onlyChild` | Hide the separator when it is the only child, since there is nothing to separate. |
| `firstOrLastChild` | Hide the separator at either edge, such as around a repeated item template in a list. |

## Accessibility
- Separator renders a native `<hr>`, which already exposes `role="separator"` to assistive technology; no extra ARIA is needed.
- A hidden separator (via `invisible`, or automatically when two Separators end up adjacent) is removed from the accessibility tree, not just visually hidden.
