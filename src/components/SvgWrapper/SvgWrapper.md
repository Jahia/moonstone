## Example
```jsx
import {SvgWrapper} from '@jahia/moonstone';

const logo = (
    <svg fill="none" viewBox="0 0 24 24">
        <path d="M12 2 2 7l10 5 10-5-10-5z" fill="currentColor"/>
    </svg>
);

<SvgWrapper svg={logo} role="img" aria-label="Company logo"/>
```

## Do
- Use it to render an inline SVG element at the same scale as Moonstone's built-in icon set.
- Use it when a component's icon-like prop accepts a custom SVG element instead of one of the built-in icon components, such as a mark that isn't part of Moonstone's icon set.

## Don't
- Don't use SvgWrapper for an icon that already exists in Moonstone's icon set. Import the generated icon component instead.
- Don't use SvgWrapper to display a photo, a preview, or any other content image. Use a **Thumbnail** instead.

## Appearance

Sizes match the scale used across Moonstone's icon set, so an SvgWrapper renders at the same visual size as an icon component placed next to it.

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when to size an SvgWrapper down from default --> |
| `default` | _Pending design guidance_ <!-- designer: the default usage context --> |
| `big` | _Pending design guidance_ <!-- designer: when to size an SvgWrapper up from default --> |

## Accessibility
- The rendered `<svg>` has no automatic label. Pass `aria-label` and `role="img"` when it conveys meaning, or `aria-hidden="true"` when it is purely decorative.
