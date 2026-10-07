## Example
```jsx
import {CheckboxGroup, CheckboxItem} from '@jahia/moonstone';

<CheckboxGroup name="languages">
    <CheckboxItem id="language-en" label="English"/>
    <CheckboxItem id="language-fr" label="French"/>
</CheckboxGroup>
```

## Do
- Use it to let the user select any number of options out of 3 or fewer related choices.
- Use it when every option of the set needs a visible label, and some need a short explanation.

## Don't
- Don't use a CheckboxGroup when the user must choose exactly one option. Use a **RadioGroup** instead.
- Don't use a CheckboxGroup for a single option. Use a **CheckboxItem** on its own instead, or a **FieldBoolean** for a form field with a label, a helper text, or an error message.
- Don't use a CheckboxGroup for 4 options or more. Use a **Dropdown** with multiple selection instead.
- Don't use a CheckboxGroup for settings that apply immediately. Use a **Switch** for each setting instead.
- Don't fill a CheckboxGroup with bare Checkboxes. Use **CheckboxItem** children instead, so they receive the group's `name`, its `onChange`, and its disabled or read-only state.

## Accessibility
- Each CheckboxItem is labelled by its own `label`. Give every item a unique `id`.
