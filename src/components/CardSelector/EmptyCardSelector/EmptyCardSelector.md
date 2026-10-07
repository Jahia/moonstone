## Example

```jsx
import {EmptyCardSelector} from '@jahia/moonstone';

<EmptyCardSelector label="No item selected"/>
```

## Do
- Use it in a picker field before the user has selected an item. Once the user picks one, replace it with a **CardSelector** that shows the selection.
- Use it to let the user open a picker, such as a content or media picker, from an empty field.

## Don't
- Don't use an EmptyCardSelector as a generic call-to-action button. Use a **Button** instead.
- Don't use an EmptyCardSelector to show an empty state that requires no user action. Use **EmptyData** instead.

## Voice and tone
- Write the label in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Describe the current state or what the user can select, such as "No item selected" or "Add image".
- Be specific about what the user is selecting. Never write a vague label, such as "Empty" or "None".

## Accessibility
- An icon-only EmptyCardSelector (one with no `label`) must have an `aria-label` that describes what the user can select.
- In a form, make sure its accessible name includes the field label, such as by pointing `aria-labelledby` at that label.
