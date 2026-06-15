## Example
```jsx
import {Thumbnail} from '@jahia/moonstone';
import {Love} from '@jahia/moonstone/icons';

// Default (no src) — shows a placeholder icon
<Thumbnail />

// Image preview from a URL
<Thumbnail src="https://example.com/photo.jpg" alt="Product photo" />

// React element as the visual (icon or custom graphic)
<Thumbnail src={<Love size="big" color="gray" />} variant="icon" />

// Small size
<Thumbnail src="https://example.com/thumb.jpg" alt="Small preview" size="small" />
```

## Do
- Use it to show a small visual preview of a resource, such as a page, a file, or a media item.
- Use it when a list or table row needs a compact image slot that gracefully falls back to a placeholder when no image is available.
- Pair it with an icon element as `src` when the resource is represented by an icon rather than a raster image.

## Don't
- Don't use a Thumbnail to display a large or featured image. Use an `<img>` element or a dedicated media component instead.
- Don't use a Thumbnail as an interactive control. Wrap it in a **Button** if click interaction is required.

## Appearance

### `variant` for display

| Value | Use it for |
|---|---|
| `preview` | Raster images that should fill the thumbnail area with cover-crop behaviour. |
| `icon` | Icons or graphics that should be centered and not cropped. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: standard list/table rows --> |
| `small` | _Pending design guidance_ <!-- designer: compact/dense rows --> |

## Accessibility
- Always pass a descriptive `alt` prop when `src` is a URL string; it is forwarded to the underlying `<img>` element.
- When `src` is a React element (an icon), ensure the element itself carries appropriate accessibility attributes if it conveys meaning.
- When no `src` is provided the fallback placeholder is decorative; no additional label is needed.
