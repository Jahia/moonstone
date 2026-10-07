## Example
```jsx
import {Field, FieldBoolean, FieldSelector, Fieldset, Input} from '@jahia/moonstone';

<Fieldset id="seo" label="SEO settings">
    <Field id="seo-title" label="Page title">
        <FieldSelector selector={<Input/>}/>
    </Field>
    <FieldBoolean id="seo-indexing" label="Allow indexing"/>
</Fieldset>
```

## Do
- Use it to group several related fields under one heading, such as the settings of one section of a form.

## Don't
- Don't use a Fieldset to label a single control. Use a **Field** instead.
- Don't put a control directly in a Fieldset. Wrap each control in a **Field**, or use a **FieldBoolean** for a single checkbox.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum), such as "SEO settings". Never write a full sentence.
- Write the `helper` text in sentence case.

## Accessibility
- Give each Fieldset a unique `id`.
- An icon-only **Button** in `buttons` must have an `aria-label` that describes the action.
- Each field inside still needs its own accessible name. Follow the accessibility rules of **Field** and **FieldBoolean**.
