## Example
```jsx
import {Badge} from '@jahia/moonstone';

// Unread notification count
<Badge label="3" color="accent" />

// Overflow count
<Badge label="99+" color="accent" />

// Error count
<Badge label="12" color="danger" />
```

## Do
- Use it to show a count of unread items, notifications, or pending actions, such as "3" or "99+".
- Use it to indicate a brief system-driven status, such as a success confirmation or an error count next to a nav item.
- Use it to annotate an icon, list item, or navigation entry with a small numeric or short textual signal.

## Don't
- Don't use Badge to label a category, a tag, or a user-selected attribute. Use **Chip** instead.
- Don't use Badge to show a status label or supplementary tag inside a dropdown list item. Use **Pill** instead.
- Don't use Badge to render text that forms part of the page's reading flow. Use **Typography** instead.
- Don't pass an empty string to `label`. `Badge` renders nothing when `label` is empty, so guard the value before passing it in.

## Appearance

### `color` for meaning

| Value | Use it for |
|---|---|
| `accent` | General counts and neutral notifications (the default). |
| `success` | Positive outcomes such as confirmed, published, or completed. |
| `danger` | Errors, failures, or counts that need immediate attention. |

## Accessibility
- `Badge` has no implicit ARIA role. When the badge count is meaningful to screen-reader users, annotate the surrounding element with a descriptive label, such as `aria-label="Inbox, 3 unread messages"` on the parent icon button.
