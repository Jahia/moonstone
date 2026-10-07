## Example
```jsx
import {IconTextIcon} from '@jahia/moonstone';

<IconTextIcon>Annual report.pdf</IconTextIcon>
```

## Do
- Use it to show a short piece of text with an icon before it, after it, or both, such as a file name with its icon.
- Use it to keep an icon and its text aligned on a single line, such as in a custom cell of a **DataTable**.

## Don't
- Don't use an IconTextIcon for a clickable action. Use a **Button** with an icon instead.
- Don't use an IconTextIcon to show the status of an item as a label. Use a **Chip** instead. <!-- designer: where is the line between an icon-and-text pair (IconTextIcon) and a status or content-type label (Chip)? -->
- Don't use an IconTextIcon for text that must wrap over several lines. By default it keeps the text on one line and truncates it. Place the icon next to a **Typography** instead.

## Appearance

`iconSize` applies to both icons and overrides the size set on the icons you pass.

### `iconSize` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should the icons use the small size? --> |
| `default` | The default. _Pending design guidance_ <!-- designer: confirm default is the right size for most contexts. --> |
| `big` | _Pending design guidance_ <!-- designer: when should the icons use the big size? --> |

## Accessibility
- The icons have no accessible name. If an icon conveys information the text doesn't, such as a status, add that information to the text or give the icon an `aria-label`.
- The text is truncated with an ellipsis when it doesn't fit, with no built-in way to reveal the full text. If it's likely to truncate, pair it with a **Tooltip** or a native `title` attribute.
