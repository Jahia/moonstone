## Example
```jsx
import {Dropdown} from '@jahia/moonstone';

<Dropdown
    data={[
        {label: 'Draft', value: 'draft'},
        {label: 'Published', value: 'published'}
    ]}
    value={status}
    placeholder="Select a status"
/>
```

## Do
- Use it to let the user pick one value from a list of options, such as a status or a language.
- Use it to let the user pick several values from a list. Each selected value shows as a tag in
  the field, and the user can remove it from there.
- Use it to let the user pick an item in a hierarchy, such as a page in a site tree.
- Use it for 4 options or more. A search field appears automatically past 7 options.

## Don't
- Don't use it for a list of actions. Use a [Menu](?path=/docs/components-menu--docs) instead.
- Don't use it for 3 options or fewer. Use a [RadioGroup](?path=/docs/components-radiogroup--docs) (one value) or a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs)
  (several values) instead.
- Don't use it when the user selects 10 values or more. Use a [ListSelector](?path=/docs/components-listselector--docs) instead.
- Don't use it to open custom content, such as a small form or sorting controls. Use a
  [CustomDropdown](?path=/docs/components-customdropdown--docs) instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `ghost` | _Pending design guidance_ <!-- designer: default value. Where should a borderless Dropdown be used (toolbars, inline filters)? --> |
| `outlined` | _Pending design guidance_ <!-- designer: is outlined the form-field look, such as inside a Field? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: which contexts call for a small Dropdown? --> |
| `medium` | _Pending design guidance_ <!-- designer: default value. Confirm it is the standard size for forms. --> |

### `imageSize` for previews

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when options carry an image, when should the images be small? --> |
| `big` | _Pending design guidance_ <!-- designer: when should option images be big, such as a visual picker for templates? --> |

## Voice and tone
- Write option labels and the `placeholder` in sentence case, using a few words at most.
- Make the `placeholder` say what to pick, such as "Select a status". It shows only while nothing
  is selected.
- Write `searchEmptyText` as a short, plain statement, such as "No results found.".

## Accessibility
- Always pass a `placeholder`. While nothing is selected, it is the accessible name of the field.
  Once a value is selected, the label of that option is used instead.
- Enter opens the list. Space and the Down arrow key open it too (soon).
- The Up and Down arrow keys move the focus between options.
- Home and End move the focus to the first and last options (soon).
- Enter selects the focused option and closes the list. In multiple selection, Space toggles the
  focused option.
- Escape closes the list and returns the focus to the trigger (soon).
