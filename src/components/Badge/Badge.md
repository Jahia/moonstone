## Do
- Showing a count of unread items, notifications, or pending actions (e.g. "3", "99+").
- Indicating a brief system-driven status on an element — such as a success confirmation or an error count alongside a nav item.
- Annotating an icon, a list item, or a navigation entry with a small numeric or short textual signal.

## Don't
- Labelling a category, a tag, or a user-selected attribute → use **Chip** instead.
- Showing a status label or supplementary tag inside a dropdown list item → use **Pill** instead.
- Rendering text that forms part of the page's reading flow → use **Typography** directly.
- Displaying an empty badge — `Badge` renders nothing when `label` is empty; guard the value before passing it in.

## Example
```jsx
import {Badge} from '@jahia/moonstone';

// Unread notification count
<Badge label="3" color="accent" />

// Success confirmation
<Badge label="✓" color="success" />

// Error / danger count
<Badge label="12" color="danger" />
```

## Appearance

### `color` for meaning

| Value | Use it for |
|---|---|
| `accent` | General counts and neutral notifications (the default). |
| `success` | Positive outcomes — confirmed, published, completed. |
| `danger` | Errors, failures, or counts that need immediate attention. |

## Accessibility
- `Badge` has no implicit ARIA role. When the badge count is meaningful to screen-reader users, annotate the surrounding element — e.g. `aria-label="Inbox, 3 unread messages"` on the parent icon button.

## Related
- **Chip** — interactive or removable tag/category label.
- **Pill** — short informational label used inside dropdown menus.
- **Typography** — the base text primitive for all text rendering
