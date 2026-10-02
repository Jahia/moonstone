## Example
```jsx
import {ListSelector} from '@jahia/moonstone';

// The component is controlled: keep the selected values, in order, in your state
<ListSelector
    options={languages}
    values={selectedLanguages}
    label={{
        leftListTitle: 'Available languages',
        rightListTitle: 'Selected languages',
        addAllTitle: 'Add all',
        removeAllTitle: 'Remove all',
        selected: `${selectedLanguages.length} selected`
    }}
    onChange={setSelectedLanguages}
/>
```

## Do
- Use it when the user selects 10 values or more. The user can also set their order.

## Don't
- Don't use it to pick a single value. Use a **Dropdown** instead.
- Don't use it when the user selects fewer than 10 values. Use a **Dropdown** in multiple
  selection instead.

## Voice and tone
- Write both list titles in sentence case, using a few words that name what each list holds,
  such as "Available languages" and "Selected languages".
- Write `addAllTitle` and `removeAllTitle` verb-first, using a few words at most, such as
  "Add all" and "Remove all".
- Build the `selected` text from the number of values yourself. The component shows it as is.
- Always pass every key of `label`. With a partial object, missing list titles are not shown,
  `addAllTitle` and `removeAllTitle` fall back to "Add all" and "Remove all", and `selected`
  falls back to "0 item selected" whatever the number of values.

## Accessibility
- `addAllTitle` and `removeAllTitle` name the two icon-only buttons between the lists. Their
  defaults, "Add all" and "Remove all", are generic: replace them with names that say what moves,
  such as "Add all languages".
- The user adds an option with a click, Enter, or Space. Removing a single value and reordering
  values need a pointer. Keyboard users can only use the Remove all button for removal.
- The focus ring appears automatically on keyboard focus. Don't remove it.
