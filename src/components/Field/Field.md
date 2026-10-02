## Example
```jsx
import {Field, FieldSelector, Input} from '@jahia/moonstone';

<Field
    id="page-title"
    label="Title"
    helper="Shown in search results."
    hasError={Boolean(titleError)}
    errorMessage={titleError}
>
    <FieldSelector selector={<Input aria-label="Title" size="big" value={title} onChange={handleTitleChange}/>}/>
</Field>
```

## Do
- Use it to give a form control a visible label, with optional helper text and a validation error message.
- Use it for a field that holds several values, with one **FieldSelector** per value.
- Use it to show the validation error of a single field. The validation logic stays in your code.

## Don't
- Don't use a Field for a single checkbox that holds a yes/no value. Use a **FieldBoolean** instead.
- Don't use a Field to group several fields under a heading. Use a **Fieldset** instead.
- Don't put a control directly in a Field. Wrap each control in a **FieldSelector**.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum), such as "Title". Never write a full sentence.
- Write the `helper` text and the chip labels in sentence case, such as a "Required" chip.
- Error message wording: _Pending design guidance_ <!-- designer: rules for `errorMessage` copy (tone, whether it says how to fix the problem, punctuation). -->

## Accessibility
- Give each Field a unique `id`.
- An icon-only **Button** in `buttons` must have an `aria-label` that describes the action.
