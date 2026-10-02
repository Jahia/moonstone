## Example
```jsx
import {FieldBoolean} from '@jahia/moonstone';

<FieldBoolean
    id="auto-publish"
    label="Publish automatically"
    helper="Publishes the page as soon as it is saved."
    checkboxAttributes={{
        checked: isAutoPublished,
        onChange: (event, value, checked) => setIsAutoPublished(checked),
    }}
/>
```

## Controlled & uncontrolled
FieldBoolean renders a **Checkbox**, and both modes go through `checkboxAttributes`.

- Controlled: pass `checked` and `onChange` in `checkboxAttributes`. You own the state, and `onChange(event, value, checked)` gives you the new state as its third argument.

  ```jsx
  <FieldBoolean id="auto-publish" label="Publish automatically" checkboxAttributes={{checked: isAutoPublished, onChange: handleChange}}/>
  ```

- Uncontrolled: pass `defaultChecked` (optional) in `checkboxAttributes` and let the checkbox manage its own state.

  ```jsx
  <FieldBoolean id="auto-publish" label="Publish automatically" checkboxAttributes={{defaultChecked: true}}/>
  ```

- Use controlled when the value drives other UI or is validated before submit. Use uncontrolled when you only need the value on submit.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.

## Do
- Use it for a single yes/no option in a form, such as "Publish automatically", when it needs its own label, helper text, or error message.

## Don't
- Don't use a FieldBoolean for a set of related options under one label. Use a **Field** that wraps a **CheckboxGroup** instead.
- Don't use a FieldBoolean for any control other than a checkbox. Use a **Field** instead.
- Don't use a FieldBoolean for a setting that applies immediately, without a save step. Use a **Switch** instead.
- Don't use a FieldBoolean to group several fields under a heading. Use a **Fieldset** instead.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum), such as "Publish automatically". Never write a full sentence.
- Write the `helper` text and the chip labels in sentence case, such as a "Required" chip.
- Error message wording: _Pending design guidance_ <!-- designer: rules for `errorMessage` copy (tone, whether it says how to fix the problem, punctuation). Keep it aligned with Field. -->

## Accessibility
- An icon-only **Button** in `buttons` must have an `aria-label` that describes the action.
