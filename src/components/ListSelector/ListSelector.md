## Example
```jsx
import {ListSelector} from '@jahia/moonstone';

<ListSelector options={languages} onChange={setSelectedLanguages}/>
```

## Do
- Use it when the user selects 10 values or more. The user can also set their order.

## Don't
- Don't use it to pick a single value. Use a [RadioGroup](?path=/docs/components-radiogroup--docs) for 3 options or fewer, or a [Dropdown](?path=/docs/components-dropdown--docs) for 4 or more.
- Don't use it when the user selects fewer than 10 values. Use a [Dropdown](?path=/docs/components-dropdown--docs) in multiple
  selection instead.

## Voice and tone
- Write both list titles in sentence case, using a few words that name what each list holds,
  such as "Available languages" and "Selected languages".
- Write `addAllTitle` and `removeAllTitle` verb-first, naming what moves, such as "Add all
  languages" and "Remove all languages". They name the two icon-only buttons between the lists,
  and the defaults, "Add all" and "Remove all", are too generic.
- Build the `selected` text from the number of values yourself. The component shows it as is.

## Accessibility
- Enter or Space adds the focused option of the left list.
- Enter or Space removes the focused option of the right list (soon).
- The Up and Down arrow keys move the focus between options (soon).
