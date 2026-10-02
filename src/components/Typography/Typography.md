## Example
```jsx
import {Typography} from '@jahia/moonstone';

<Typography variant="heading" component="h2">Recent activity</Typography>
```

## Do
- Use it for every piece of text you render yourself, such as headings, body copy, captions, and labels.
- Use it to give a heading or a link the design system's type style while keeping the right HTML element for its role in the page.
- Use it to emphasize or de-emphasize part of a text, such as a key figure or a secondary detail.

## Don't
- Don't use Typography to style the label of a Moonstone component, such as a **Button**. Pass the text to the component, which already renders it with the right style.
- Don't use Typography to build a form-field label. Use a **Field** instead, which renders the label and links it to its control.
- Don't use Typography to build the title bar of a page. Use a **Header** instead.

## Appearance

Choose the variant that matches the text's role in the content hierarchy, then adjust the weight if needed.

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
| `light` | De-emphasized or secondary text. |

## Accessibility
- The component renders a `<p>` whatever the variant. When the text is a heading, set `component` to the matching heading element, such as `h1` or `h2`.
- Don't rely on `variant` for structure. Assistive technology conveys the hierarchy from the HTML element, not from the visual style.
- Keep heading levels in order on the page. Don't skip a level to get a smaller style. Pick the `variant` for the look and the `component` for the level.
