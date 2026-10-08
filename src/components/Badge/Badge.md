## Example
```jsx
import {Badge} from '@jahia/moonstone';

<Badge label="12"/>
```

## Do
- Use it to show a count of unread items, notifications, or pending actions, such as "3" or "99+".

## Don't
- Don't use Badge to label a category, a tag, or a user-selected attribute. Use [Chip](?path=/docs/components-chip--docs) instead.
- Don't use Badge to show a status label or supplementary tag inside a dropdown list item. Use [Pill](?path=/docs/components-pill--docs) instead.
- Don't use Badge to render text that forms part of the page's reading flow. Use [Typography](?path=/docs/components-typography--docs) instead.

## Appearance

### `color` for meaning

| Value | Use it for |
|---|---|
| `accent` | General counts and neutral notifications (the default). |
| `success` | Positive outcomes such as confirmed, published, or completed. |
| `danger` | Errors, failures, or counts that need immediate attention. |

## Accessibility
- `Badge` has no implicit ARIA role. When the badge count is meaningful to screen-reader users, annotate the surrounding element with a descriptive label, such as `aria-label="Inbox, 3 unread messages"` on the parent icon button.
