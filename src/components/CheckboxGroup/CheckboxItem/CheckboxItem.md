## Example
```jsx
import {CheckboxItem} from '@jahia/moonstone';

<CheckboxItem id="include-subpages" label="Include subpages"/>
```

## Controlled & uncontrolled

Use one mode or the other. Do not mix `checked` (controlled) with `defaultChecked` (uncontrolled).

- **Uncontrolled** (default): the component tracks its own checked state. Optionally set the
  starting state with `defaultChecked`. Use it when nothing else needs to read or drive the state.
  ```jsx
  <CheckboxItem id="include-subpages" label="Include subpages" value="subpages" defaultChecked/>
  ```
- **Controlled**: the parent owns the state through `checked`, updated in `onChange`. Use it when
  the state is read or driven elsewhere.
  ```jsx
  const [includeSubpages, setIncludeSubpages] = useState(false);

  <CheckboxItem
      id="include-subpages"
      label="Include subpages"
      value="subpages"
      checked={includeSubpages}
      onChange={(event, value, checked) => setIncludeSubpages(checked)}
  />
  ```

In both modes, `onChange(event, value, checked)` receives the `value` prop as its second argument
and the new checked state as its third. Inside a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), the group's `onChange` runs
as well.

## Do
- Use it for a single labelled option the user opts into, such as including subpages in a publication.
- Use it for each option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs).
- Use it when an option needs a short explanation under its label.

## Don't
- Don't use a CheckboxItem when the label is already shown elsewhere, such as in a table row. Use a [Checkbox](?path=/docs/components-checkbox--docs) instead.
- Don't use a CheckboxItem for a form field that needs a helper text or an error message. Use a [FieldBoolean](?path=/docs/components-fieldboolean--docs) instead.
- Don't use separate CheckboxItems for a set of related options. Wrap them in a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs).
- Don't use CheckboxItems when the user must choose exactly one option. Use a [RadioGroup](?path=/docs/components-radiogroup--docs) instead.
- Don't use a CheckboxItem for a setting that applies immediately. Use a [Switch](?path=/docs/components-switch--docs) instead.

## Voice and tone
- Write the label in sentence case, using a few words (3 maximum). Never write a full sentence.
- Name the option precisely, so the user knows what checking it does.
- Put any explanation the label can't hold in `description`, not in the label.

## Accessibility
- Give each CheckboxItem a unique `id`. It links the checkbox to its label and description.
