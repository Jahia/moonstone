## Example
```jsx
import {Tag} from '~/components';

<Tag label="Draft" value="draft" onClick={(event, value) => removeFilter(value)}/>
```

## Do
- Use it to represent a single applied attribute that the user can remove, such as an active filter, a selected option, or an assigned keyword.
- Use it when each item needs a stable identifier you can act on when it is removed, such as clearing that filter or deselecting that option.
- Use it for a group of such removable items, rendering one Tag per value.
- Use it to build [Dropdown](?path=/docs/components-dropdown--docs)'s multiple-selection trigger, which renders one Tag per selected value so the user can remove a selection directly from the trigger.

## Don't
- Don't use Tag directly in application code. Use [Dropdown](?path=/docs/components-dropdown--docs)'s multiple-selection mode instead.
- Don't use a Tag for a static label that the user cannot remove. Use a [Chip](?path=/docs/components-chip--docs) instead.
- Don't use a Tag for a status label inside a dropdown list item. Use a [Pill](?path=/docs/components-pill--docs) instead.
- Don't use a Tag for a count or short system signal, such as "3" or "99+". Use a [Badge](?path=/docs/components-badge--docs) instead.
- Don't use a Tag to trigger an arbitrary action unrelated to dismissing the item. Use a [Button](?path=/docs/components-button--docs) instead.

## Appearance

### `size` for prominence
Inside [Dropdown](?path=/docs/components-dropdown--docs), the Tag's `size` always matches the [Dropdown](?path=/docs/components-dropdown--docs)'s own `size`: it is not set independently.

| Value | Use it for |
|---|---|
| `medium` | The default size. |
| `small` | Denser contexts. |

## Accessibility
- Delete or Backspace removes the focused Tag (soon).
