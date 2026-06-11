## Example
```jsx
import {Typography} from '@jahia/moonstone';

<Typography variant="title" component="h1">Page title</Typography>
<Typography variant="heading" component="h2">Section heading</Typography>
<Typography variant="body">Body copy goes here.</Typography>
<Typography variant="caption">Secondary detail</Typography>
```

## Do
- Use it for all visible text in your UI: headings, body copy, captions, and labels.
- Use the `component` prop to render the correct semantic HTML element for the text's role in the page, such as `h1`, `h2`, or `label`.
- Use `weight` to adjust emphasis within a variant without changing its visual size.

## Don't
- Don't use raw HTML elements with custom styles for text. Use a Typography variant instead to stay consistent with the design system's type scale.
- Don't double-wrap text that is already inside a Moonstone component that renders Typography internally, such as the `label` prop of a **Button**.

## Appearance

Choose the variant that matches the text's role in the content hierarchy, then adjust weight and modifiers as needed.

### `variant` for hierarchy

| Value | Use it for |
|---|---|
| `title` | _Pending design guidance_ <!-- designer: page-level titles, the largest text level --> |
| `heading` | _Pending design guidance_ <!-- designer: section headings within a page --> |
| `subheading` | _Pending design guidance_ <!-- designer: subsection headings or group labels --> |
| `body` | _Pending design guidance_ <!-- designer: default body text, the most common variant --> |
| `caption` | _Pending design guidance_ <!-- designer: small supporting text, metadata, secondary details --> |
| `button` | _Pending design guidance_ <!-- designer: control and button labels; used internally by Button --> |

### `weight` for emphasis

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: regular weight, the baseline for all variants --> |
| `bold` | _Pending design guidance_ <!-- designer: strong emphasis within a text block --> |
| `semiBold` | _Pending design guidance_ <!-- designer: moderate emphasis --> |
| `light` | _Pending design guidance_ <!-- designer: de-emphasised or secondary text --> |

## Accessibility
- Set the `component` prop to the correct HTML heading element (`h1`, `h2`, and so on) when the text is a heading. Typography renders as `<p>` by default regardless of variant.
- Use `component="label"` when the Typography wraps a form-field label, and associate it with the input via `htmlFor`.
- Don't rely on `variant` alone for semantic structure. Screen readers use the HTML element, not the visual style, to convey hierarchy.
