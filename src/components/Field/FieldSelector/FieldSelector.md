## Example
```jsx
import {FieldSelector, Input} from '@jahia/moonstone';

<FieldSelector selector={<Input aria-label="Keyword"/>}/>
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
