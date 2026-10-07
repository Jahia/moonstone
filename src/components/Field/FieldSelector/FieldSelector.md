## Example
```jsx
import {Button, Field, FieldSelector, Input} from '@jahia/moonstone';
import {Close} from '@jahia/moonstone/icons';

// One FieldSelector per value of a multi-value field.
<Field id="keywords" label="Keywords">
    {keywords.map(keyword => (
        <FieldSelector
            key={keyword.id}
            selector={<Input aria-label="Keyword" size="big" value={keyword.value} onChange={event => updateKeyword(keyword.id, event.target.value)}/>}
            buttons={<Button icon={<Close/>} aria-label="Remove keyword" onClick={() => removeKeyword(keyword.id)}/>}
        />
    ))}
</Field>
```

## Do
- Use it to place each control of a **Field** on its own row.
- Use it for each value of a multi-value field, where every row carries its own actions, such as a remove action. `isDraggable` only shows a drag handle: you implement the drag and drop.

## Don't
- Don't use a FieldSelector on its own. Place it inside a **Field**, which provides the label and the error message.
- Don't use a FieldSelector for a single checkbox that holds a yes/no value. Use a **FieldBoolean** instead.
- Don't use a FieldSelector to group several fields under a heading. Use a **Fieldset** instead.

## Accessibility
- An icon-only **Button** in `buttons` must have an `aria-label` that describes the action.
