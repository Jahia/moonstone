## Example
```jsx
import {Tag} from '@jahia/moonstone';

// A removable tag. Clicking it calls onClick with its value.
<Tag label="Marketing" value="marketing" onClick={handleRemove}/>

// The onClick handler receives the click event and the tag's value.
const handleRemove = (event, value) => removeFilter(value);

// A smaller tag for denser contexts.
<Tag label="Draft" value="draft" size="small" onClick={handleRemove}/>
```

The whole Tag is a button. It always shows a close icon, and clicking anywhere on it calls `onClick(event, value)`, where `value` identifies which tag was activated.

## Do
- Use it to represent a single applied attribute that the user can remove, such as an active filter, a selected option, or an assigned keyword.
- Use it when each item carries a stable `value` you act on when it is dismissed, such as removing that filter or selection.
- Use it for a group of such removable items, rendering one Tag per value.

## Don't
- Don't use a Tag for a static label that the user cannot remove. Use a **Chip** instead.
- Don't use a Tag for a status label inside a dropdown list item. Use a **Pill** instead.
- Don't use a Tag for a count or short system signal, such as "3" or "99+". Use a **Badge** instead.
- Don't use a Tag to trigger an arbitrary action unrelated to dismissing the item. Use a **Button** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `medium` | _Pending design guidance_ <!-- designer: when to use medium (the default) vs small? --> |
| `small` | _Pending design guidance_ <!-- designer: which dense contexts call for small? --> |

## Accessibility
- The Tag is a real button, so it is focusable and can be activated with the keyboard.
- The close icon is decorative and hidden from assistive technology. The accessible name comes from the `label`, so write a `label` that identifies the item being removed.
- A disabled Tag is non-interactive and cannot be activated with the keyboard.
- The focus ring appears automatically on keyboard focus. Don't remove it.
