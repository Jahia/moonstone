## Example
```jsx
import {Chip} from '@jahia/moonstone';

<Chip label="Published"/>
```

## Do
- Use it to show information about an item, such as being locked, modified, or in use elsewhere.
- Use it to show the content type of an item.
- Use it to show the status of an item, such as published or marked for deletion.
- Use it to show field information, such as required, read-only, or shared across all languages.
- Pair it with an icon to reinforce the meaning, only use icon only when there is not enough space.

## Don't
- Don't use a Chip for a count or short numeric system signal, such as "3" or "99+". Use a **Badge** instead.
- Don't use a Chip for an item the user can remove, such as an active filter or a selected option. Use a **Tag** instead.
- Don't use a Chip for a status label inside a dropdown list item. Use a **Pill** instead.
- Don't rely on a Chip for clickable behavior. Use a **Button** instead.

## Appearance

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | A temporary state, such as "Locked" or "Unpublished", or a neutral hierarchy, such as "Shared by all languages". |
| `accent` | Informative states, such as "Unsaved changes". |
| `success` | Positive outcomes, such as "Published". |
| `warning` | States that can impact the workflow, such as "Modified", "Work in progress", or a usages count. |
| `danger` | Destructive or critical states, such as "Marked for deletion". |
| `reassuring` | Meanings specific to jExperience. |
| `light` | _Pending design guidance_ <!-- designer: when to use light, versus default? --> |

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `bright` | Highlighting a status in Page Builder. |

## Accessibility
- An icon-only Chip (no `label`) has no accessible name for screen readers. Pass an `aria-label` describing the status.
