## Example

```jsx
import {CardSelector} from '@jahia/moonstone';

<CardSelector id="hero-image" displayName="Hero image"/>
```

## Do
- Use it to display the currently selected item in a content-picker or reference field.
- Use it with an [EmptyCardSelector](?path=/docs/components-emptycardselector--docs) in the same field, which shows the field before the user has made a selection.

## Don't
- Don't use it as a purely decorative display with no clickable behavior. Use [Thumbnail](?path=/docs/components-thumbnail--docs) combined with [Typography](?path=/docs/components-typography--docs) instead.

## Appearance

CardSelector renders in a row layout: the thumbnail appears on the left, the body (display name, system name, chips, and information) sits in the center, and an optional action occupies the right edge.

### `thumbnailType` for image display

| Value | Use it for |
|---|---|
| `preview` | _Pending design guidance_ <!-- designer: which images fill the area, such as photos or page captures? --> The image fills the whole area and is cropped to fit. |
| `icon` | _Pending design guidance_ <!-- designer: which graphics are shown small and centered, such as file-type icons? --> The image is shown small and centered, without cropping. |

## Voice and tone
- Write `errorMessage` in sentence case, using a short phrase of 3 words or fewer.
- Name what is wrong, such as "Broken reference" or "Item not found".
- Avoid generic messages such as "Error". Be specific about what failed.

## Accessibility
- Provide `thumbnailAlt` whenever `thumbnail` is an image URL so assistive technologies can describe the image.
- If `cardAction` contains buttons, ensure each has an `aria-label` that describes its specific action.
- Use `isDisabled` rather than removing the component when an action is unavailable, so screen readers can still discover and announce the component.
