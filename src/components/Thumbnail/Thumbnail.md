## Example
```jsx
import {Thumbnail} from '@jahia/moonstone';

<Thumbnail/>
```

## Do
- Use it to show a small visual preview of a resource, such as a page, a file, or a media item.
- Use it for a compact image slot in a list or table row. When the resource has no image, it shows a placeholder instead.
- Use it to represent a resource with an icon when the resource has no picture of its own, such as a file type.

## Don't
- Don't use a Thumbnail as a selectable or clickable item. Use a [CardSelector](?path=/docs/components-cardselector--docs) instead, which shows a thumbnail inside a selectable card.
- Don't use a Thumbnail to show an image at the size of an icon, next to text or inside a control. Use an [ImgWrapper](?path=/docs/utilities-imgwrapper--docs) instead.

## Appearance

### `variant` for display

| Value | Use it for |
|---|---|
| `preview` | _Pending design guidance_ <!-- designer: which images fill the area, such as photos or page captures? --> The image fills the whole area and is cropped to fit. |
| `icon` | _Pending design guidance_ <!-- designer: which graphics are shown small and centered, such as file-type icons? --> The image is shown small and centered, without cropping. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: standard list and table rows? --> |
| `small` | _Pending design guidance_ <!-- designer: compact or dense rows? --> |

## Accessibility
- When `src` is an image URL, pass an `alt` that describes the image. It is forwarded to the image. If the image only repeats text shown next to it, pass an empty `alt`.
- When `src` is an icon element and the icon conveys meaning, give the icon its own accessible name.
