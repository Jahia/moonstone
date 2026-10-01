## Example
```jsx
import {ImgWrapper} from '@jahia/moonstone';

// Renders the image at the same scale as a built-in icon.
<ImgWrapper alt="Partner logo" src="https://example.com/logo.svg"/>
```

## Do
- Use it to render an image URL at the same scale as Moonstone's built-in icon set, such as a user-provided or remote icon.
- Use it when a component's icon-like prop accepts a URL instead of one of the built-in icon components.

## Don't
- Don't use ImgWrapper for an icon that already exists in Moonstone's icon set. Import the generated icon component instead.
- Don't use ImgWrapper to display a photo, a preview, or any other content image. Use a **Thumbnail** instead.

## Appearance

Sizes match the scale used across Moonstone's icon set, so an ImgWrapper renders at the same visual size as an icon component placed next to it.

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when to size an ImgWrapper down from default --> |
| `default` | _Pending design guidance_ <!-- designer: the default usage context --> |
| `big` | _Pending design guidance_ <!-- designer: when to size an ImgWrapper up from default --> |

## Accessibility
- Always pass a descriptive `alt`. Use `alt=""` only when the image is purely decorative.
