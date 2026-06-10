Wraps a form control to give it the standard form anatomy: a label, optional helper
text, an error state with message, and optional chips and action buttons. Use Field
around your inputs so labelling, error display, and validation are consistent.

## When to use
- Any form control that needs a visible label and/or validation feedback
  (**Input**, **Textarea**, **Dropdown**, selectors…).
- Showing a field-level error message.

## When NOT to use
- A bare control with no label/validation needs (rare) — you can use the control alone.
- Grouping several checkboxes/radios → use **CheckboxGroup** / **RadioGroup** (which
  handle their own group label).

## Usage
```jsx
import {Field, Input} from '@jahia/moonstone';

<Field
    label="Project name"
    id="project-name"
    helper="Shown in the project list"
    hasError={Boolean(error)}
    errorMessage={error}
>
    <Input id="project-name" value={name} onChange={onNameChange}/>
</Field>
```

- `hasError` + `errorMessage` render the error state and message.
- `helper` shows guidance text; `chips` and `buttons` add adornments/actions.
- `label` + `id` wire the label to the control for accessibility.

## Composition
- Put the form control (`Input`, `Textarea`, a selector…) as `children`.
- Validation is owned at the Field level — the control reports values; Field shows errors.

## Accessibility
- `label` and the control's `id` must match so the label is correctly associated.

## Related
- **Input**, **Textarea**, **Dropdown**, **Fieldset** (grouping multiple fields).
