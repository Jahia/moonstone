## Example
```jsx
import {RadioGroup, RadioItem} from '@jahia/moonstone';

<RadioGroup name="visibility" role="radiogroup" aria-label="Visibility">
    <RadioItem id="visibility-public" label="Public" value="public"/>
    <RadioItem id="visibility-private" label="Private" value="private"/>
</RadioGroup>
```

## Do
- Use it for each option of a [RadioGroup](?path=/docs/components-radiogroup--docs).
- Use it when an option needs a short explanation under its label.

## Don't
- Don't use a RadioItem outside a [RadioGroup](?path=/docs/components-radiogroup--docs). It throws an error. Place it inside a [RadioGroup](?path=/docs/components-radiogroup--docs).
- Don't use a RadioItem for a standalone option the user opts into. Use a [CheckboxItem](?path=/docs/components-checkboxitem--docs) instead.

## Voice and tone
- Write the label in sentence case, using a few words (3 maximum). Never write a full sentence.
- Name the option precisely, so the user can tell the options apart.
- Put any explanation the label can't hold in `description`, not in the label.

## Accessibility
- Give each RadioItem a unique `id`. It is set on the radio input and links it to its label and description.
