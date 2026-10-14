## Example
```jsx
import {CheckboxItem} from '@jahia/moonstone';

<CheckboxItem id="include-subpages" label="Include subpages"/>
```

## Controlled
- Pass `checked` and `onChange`. You own the state, and `onChange(event, value, checked)` gives you the `value` prop as its second argument and the new checked state as its third.
- Use it when the state is read or driven elsewhere.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.
- Inside a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), the group's `onChange` runs as well.

```jsx
<CheckboxItem id="include-subpages" label="Include subpages" value="subpages" checked={includeSubpages} onChange={(event, value, checked) => setIncludeSubpages(checked)}/>
```

## Uncontrolled
- Pass `defaultChecked` (optional) and let the component manage its own state.
- Use it when nothing else needs it.

```jsx
<CheckboxItem id="include-subpages" label="Include subpages" value="subpages" defaultChecked/>
```

## Do
- Use it for a single labelled option the user opts into.
- Use it for each option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs).
- Use it when an option needs a short explanation under its label.
- Use it for a choice the user submits later with a form.

## Don't
- Don't use a CheckboxItem when the label is already shown elsewhere, such as in a table row. Use a [Checkbox](?path=/docs/components-checkbox--docs) instead.
- Don't use a CheckboxItem for a form field that needs a helper text or an error message. Use a [FieldBoolean](?path=/docs/components-fieldboolean--docs) instead.
- Don't use separate CheckboxItems for a set of related options. Wrap them in a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs).
- Don't use CheckboxItems when the user must choose exactly one option. Use a [RadioGroup](?path=/docs/components-radiogroup--docs) instead.
- Don't use a CheckboxItem for a setting that applies immediately, without a save step. Use a [Switch](?path=/docs/components-switch--docs) instead.

## Voice and tone
- Write the label in sentence case, using a few words (3 maximum). Never write a full sentence.
- Name the option precisely, so the user knows what checking it does.
- Put any explanation the label can't hold in `description`, not in the label.

## Accessibility
- Give each CheckboxItem a unique `id`. It links the checkbox to its label and description.
