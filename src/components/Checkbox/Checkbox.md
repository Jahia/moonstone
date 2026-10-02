## Example
```jsx
import {Checkbox} from '@jahia/moonstone';

// A row selector in a table. The row itself shows what is selected.
<Checkbox
    aria-label="Select row"
    checked={isSelected}
    value={row.id}
    onChange={(event, value, checked) => toggleRow(value, checked)}
/>
```

## Controlled & uncontrolled

Use one mode or the other. Do not mix `checked` (controlled) with `defaultChecked` (uncontrolled).

- **Uncontrolled** (default): the component tracks its own checked state. Optionally set the
  starting state with `defaultChecked`. Use it when nothing else needs to read or drive the state.
  ```jsx
  <Checkbox aria-label="Select row" defaultChecked/>
  ```
- **Controlled**: the parent owns the state through `checked`, updated in `onChange`. Use it when
  the state is read or driven elsewhere, such as a "select all" control.
  ```jsx
  <Checkbox
      aria-label="Select all"
      checked={allSelected}
      indeterminate={someSelected && !allSelected}
      onChange={(event, value, checked) => selectAll(checked)}
  />
  ```

In both modes, `onChange(event, value, checked)` receives the `value` prop as its second argument
and the new checked state as its third.

## Do
- Use it to select an item whose label is already shown next to it, such as a table row.
- Use it for a "select all" control that reflects a partial selection.

## Don't
- Don't use a bare Checkbox for an option that needs a visible label. Use a **CheckboxItem** instead.
- Don't use a Checkbox for a form field that needs a label, a helper text, or an error message. Use a **FieldBoolean** instead.
- Don't use separate Checkboxes for a set of related options. Use a **CheckboxGroup** instead.
- Don't use a Checkbox when the user must choose exactly one option. Use a **RadioGroup** instead.
- Don't use a Checkbox for an on/off setting that applies immediately. Use a **Switch** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: is `default` the size for every form, list, and table? --> |
| `big` | _Pending design guidance_ <!-- designer: which contexts call for the big checkbox? --> |

## Accessibility
- The Checkbox has no visible label. Give it an accessible name with `aria-label`, `aria-labelledby`, or a `<label>` whose `htmlFor` matches the Checkbox `id`.
