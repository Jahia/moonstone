## Example
```jsx
import {ListItem} from '~/components';
import {Setting, ChevronRight} from '~/icons';

<ul>
    <ListItem
        label="Settings"
        description="Manage your account preferences"
        iconStart={<Setting/>}
        iconEnd={<ChevronRight/>}
        onClick={handleSelect}
    />
</ul>
```

## Do
- Use it to render a single row of a list, such as a settings list or a menu.
- Pair it with a leading icon or image to help identify the item, and a trailing icon, such as a chevron, to hint at a next step.
- Use it to show a secondary line of detail below the main text, such as extra context about the item.
- Use it to build **MenuItem**'s row, and the draggable rows of **ListSelector**'s dual list.

## Don't
- Don't use ListItem alone for a menu item that needs keyboard focus and arrow-key navigation between items. Use **MenuItem** instead.

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

Passed straight through to the inner **Typography** that renders `label`.

| Value | Use it for |
|---|---|
| `caption` | The default, for most list items. |
| `title` | _Pending design guidance_ <!-- designer: when should a ListItem label use the title variant instead of caption? --> |
| `heading` | _Pending design guidance_ <!-- designer: when should a ListItem label use the heading variant instead of caption? --> |
| `subheading` | _Pending design guidance_ <!-- designer: when should a ListItem label use the subheading variant instead of caption? --> |
| `body` | _Pending design guidance_ <!-- designer: when should a ListItem label use the body variant instead of caption? --> |
| `button` | _Pending design guidance_ <!-- designer: when should a ListItem label use the button variant instead of caption? --> |

## Voice and tone
- Write `label` and `description` in sentence case.

## Accessibility
- `label` is truncated with an ellipsis when it doesn't fit, with no built-in way to reveal the full text. If it's likely to truncate, pair it with a **Tooltip** or a native `title` attribute so the full text stays available.
