## Example

```jsx
import {EmptyCardSelector} from '@jahia/moonstone';
import {File} from '@jahia/moonstone/icons';

<EmptyCardSelector
    id="picker-empty"
    label="No item selected"
    iconStart={<File/>}
    onClick={handleOpenPicker}
/>
```

## Do
- Use it in the same picker field as **CardSelector**: show EmptyCardSelector when no selection has been made, then replace it with CardSelector once the user picks an item.
- Use it with `iconStart` to hint at the expected content type.

## Don't
- Don't use it as a generic call-to-action button. Use **Button** instead.
- Don't use it to illustrate an empty state that requires no user action. Use **EmptyData** instead.

## Voice and tone
- Write `label` in sentence case, using a short phrase.
- Start with a clear invitation or a description of the current state, such as "No item selected" or "Click to add a page".
- Avoid vague labels such as "Empty" or "None". Be specific about what the user is selecting.

## Accessibility
- An icon-only EmptyCardSelector (no `label`) must have an `aria-label` describing what the user is selecting.
- `id` is optional but recommended when the field has an associated label, so you can connect them with `aria-labelledby`.
- Use `isDisabled` rather than removing the component when the field is not currently editable, so assistive technologies can still discover and announce the field.
