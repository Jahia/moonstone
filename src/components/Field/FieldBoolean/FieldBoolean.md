## Example
```jsx
import {FieldBoolean} from '@jahia/moonstone';

<FieldBoolean id="detect-coordinates" label="Detect latitude/longitude automatically on save"/>
```

## Controlled
- FieldBoolean renders a [Checkbox](?path=/docs/components-checkbox--docs), and both modes go through `checkboxAttributes`.
- Pass `checked` and `onChange` in `checkboxAttributes`. You own the state, and `onChange(event, value, checked)` gives you the new state as its third argument.
- Use it when the value drives other UI or is validated before submit.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.

```jsx
<FieldBoolean id="detect-coordinates" label="Detect latitude/longitude automatically on save" checkboxAttributes={{checked: isDetected, onChange: handleChange}}/>
```

## Uncontrolled
- Pass `defaultChecked` (optional) in `checkboxAttributes` and let the checkbox manage its own state.
- Use it when you only need the value on submit.

```jsx
<FieldBoolean id="detect-coordinates" label="Detect latitude/longitude automatically on save" checkboxAttributes={{defaultChecked: true}}/>
```

## Do
- Use it to show a boolean value in a form, with its own label, helper text, or error message.

## Don't
- Don't use a FieldBoolean for a set of related options under one label. Use a [Field](?path=/docs/components-field--docs) that wraps a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs) instead.
- Don't use a FieldBoolean for any control other than a checkbox. Use a [Field](?path=/docs/components-field--docs) instead.
- Don't use a FieldBoolean for a setting that applies immediately, without a save step. Use a [Switch](?path=/docs/components-switch--docs) instead.
- Don't use a FieldBoolean to group several fields under a heading. Use a [Fieldset](?path=/docs/components-fieldset--docs) instead.

## Voice and tone
- Write the `label` in sentence case.
- Write the `helper` text and the chip labels in sentence case, such as a "Required" chip.
- Error message wording: _Pending design guidance_ <!-- designer: rules for `errorMessage` copy (tone, whether it says how to fix the problem, punctuation). Keep it aligned with Field. -->

## Accessibility
- An icon-only [Button](?path=/docs/components-button--docs) in `buttons` must have an `aria-label` that describes the action.
