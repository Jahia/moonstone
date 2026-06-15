## Example

```jsx
import {CardSelector, Chip, Button} from '@jahia/moonstone';
import {FileImage, Close} from '@jahia/moonstone/icons';

// Basic usage
<CardSelector
    id="card-1"
    displayName="Item name"
    systemName="item-system-name"
    onClick={handleClick}
/>

// With thumbnail, chips, and extra information
<CardSelector
    id="card-2"
    displayName="Hero image"
    systemName="hero-image"
    thumbnail={imageUrl}
    thumbnailAlt="Hero image preview"
    thumbnailType="preview"
    chips={[<Chip key="type" label="Image" icon={<FileImage/>} color="accent"/>]}
    information="Last modified 2 days ago"
    onClick={handleClick}
/>

// With a remove action
<CardSelector
    id="card-3"
    displayName="Document.pdf"
    cardAction={<Button variant="ghost" icon={<Close/>} aria-label="Remove"/>}
    onClick={handleClick}
/>

// Error state: the referenced item cannot be resolved.
<CardSelector
    id="card-4"
    hasError
    errorMessage="Broken reference"
    onClick={handleClick}
/>
```

## Do
- Use it to display the currently selected item in a content-picker or reference field.
- Pair it with **EmptyCardSelector** to handle the state before the user has made a selection.

## Don't
- Don't use it in a multi-select list. Use **ListSelector** instead.
- Don't use it as a purely decorative display with no clickable behavior. Use **Thumbnail** combined with **Typography** instead.

## Appearance

CardSelector renders in a row layout: the thumbnail appears on the left, the body (display name, system name, chips, and information) sits in the center, and an optional action occupies the right edge.

### `thumbnailType` for image display

| Value | Use it for |
|---|---|
| `preview` | Rectangular content previews, such as page screenshots or document images. |
| `icon` | Square icon-sized thumbnails, such as file-type icons or small logos. |

## Voice and tone
- Write `errorMessage` in sentence case, using a short phrase of 3 words or fewer.
- Name what is wrong, such as "Broken reference" or "Item not found".
- Avoid generic messages such as "Error". Be specific about what failed.

## Accessibility
- The root element receives `aria-label` from `displayName` automatically. No extra wiring is needed.
- Provide `thumbnailAlt` whenever `thumbnail` is an image URL so assistive technologies can describe the image.
- If `cardAction` contains buttons, ensure each has an `aria-label` that describes its specific action.
- Use `isDisabled` rather than removing the component when an action is unavailable, so screen readers can still discover and announce the component.
