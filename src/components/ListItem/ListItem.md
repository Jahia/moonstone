## Example
```jsx
import {ListItem} from '~/components';

<ul>
    <ListItem label="Settings"/>
</ul>
```

## Do
- Use it to build the row of [MenuItem](?path=/docs/components-menuitem--docs), and the draggable rows of [ListSelector](?path=/docs/components-listselector--docs)'s two lists.

## Don't
- Don't use ListItem in application code. Use a [MenuItem](?path=/docs/components-menuitem--docs) inside a [Menu](?path=/docs/components-menu--docs) for a list of actions, or a [ListSelector](?path=/docs/components-listselector--docs) to pick and order values.

## Appearance

### `imageSize` for prominence

| Value | Use it for |
|---|---|
| `small` | The default. A compact row. |
| `big` | _Pending design guidance_ <!-- designer: when should an image be shown at the larger size instead of small? --> |

### `iconSize` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should iconStart/iconEnd use the small size? --> |
| `default` | The default. |
| `big` | _Pending design guidance_ <!-- designer: when should iconStart/iconEnd use the big size? --> |

### `typographyVariant` for emphasis

Passed straight through to the inner [Typography](?path=/docs/components-typography--docs) that renders `label`.

| Value | Use it for |
|---|---|
| `title` | The page title of the application. |
| `heading` | A heading of a section. |
| `subheading` | Subsection headings or group labels. |
| `body` | The default body text size, the most common variant. |
| `caption` | Small text such as a description or helper text. |
| `button` | The specific text style for a button's label. |

## Voice and tone
- Write `label` and `description` in sentence case.

## Accessibility
- `label` is truncated with an ellipsis when it doesn't fit, with no built-in way to reveal the full text. If it's likely to truncate, pair it with a [Tooltip](?path=/docs/components-tooltip--docs) or a native `title` attribute so the full text stays available.
