## Example
```jsx
import {Pill} from '@jahia/moonstone';

<Pill>FR</Pill>
```

## Do
- Use it to add a short piece of information to a dropdown list item, such as the language code in a language switcher.

## Don't
- Don't use a Pill for the status of an item outside a dropdown list, such as in a table or a header. Use a [Chip](?path=/docs/components-chip--docs) instead.
- Don't use a Pill for a count or a short numeric signal, such as "3" or "99+". Use a [Badge](?path=/docs/components-badge--docs) instead.
- Don't use a Pill for a value the user can remove. Use [Dropdown](?path=/docs/components-dropdown--docs)'s multiple-selection mode instead.

## Voice and tone
- Keep the content to a short code or a single word, such as the language code "FR".
- The Pill is read right after the item's label. Make sure the two read well together, such as "French FR".

## Accessibility
- An icon-only Pill gives screen readers no text. If the icon carries information, state it in the item's label or description too.
