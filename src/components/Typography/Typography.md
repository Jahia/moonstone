Renders all text in the design system. It applies the correct size, weight, and HTML
element for a given level, so text hierarchy stays consistent everywhere. **All text
should go through Typography** rather than raw styled elements.

## When to use
- Any visible text: headings, body copy, captions, labels.
- Whenever you'd otherwise set `font-size` / `font-weight` by hand — use a variant instead.

## When NOT to use
- The text inside another Moonstone component that already renders Typography for you
  (e.g. `Button`'s `label`) — don't double-wrap.

## Usage
```jsx
import {Typography} from '@jahia/moonstone';

<Typography variant="title">Page title</Typography>
<Typography variant="body">Body copy goes here.</Typography>
<Typography variant="caption" weight="light">Secondary detail</Typography>

// Polymorphic: render as a different element
<Typography component="label" variant="body">Email</Typography>
```

- `variant`: `title` · `heading` · `subheading` · `body` · `caption` · `button`
  (variant drives both the style and the default HTML element).
- `weight`: `default` · `bold` · `semiBold` · `light`.
- Modifiers: `isItalic`, `isUpperCase`, `hasLineThrough`, `isNowrap`.
- `component` overrides the rendered element (polymorphic).

## Accessibility
- Choose the variant for *meaning/hierarchy*; use `component` to keep the correct
  heading level / element for semantics and screen readers.

## Related
- Pairs with `--moon-color-*` for text color. Used internally by most components.
