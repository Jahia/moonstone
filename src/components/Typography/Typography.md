## Example
```jsx
import {Typography} from '@jahia/moonstone';

<Typography variant="title" component="h1">Page title</Typography>
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
| `title` | The page title of the application. |
| `heading` | A heading of a section. |
| `subheading` | Subsection headings or group labels. |
| `body` | The default body text size, the most common variant. |
| `caption` | Small text such as a description or helper text. |
| `button` | The specific text style for a button's label. |

### `weight` for emphasis

| Value | Use it for |
|---|---|
| `default` | The baseline weight for all variants. |
| `bold` | Strong emphasis within a text block. |
| `semiBold` | Moderate emphasis. |
| `light` | De-emphasised or secondary text. |

## Accessibility
- Set the `component` prop to the correct HTML heading element (`h1`, `h2`, and so on) when the text is a heading. Typography renders as `<p>` by default regardless of variant.
- Use `component="label"` when the Typography wraps a form-field label, and associate it with the input via `htmlFor`.
- Don't rely on `variant` alone for semantic structure. Screen readers use the HTML element, not the visual style, to convey hierarchy.
