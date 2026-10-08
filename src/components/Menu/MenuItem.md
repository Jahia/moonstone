## Example
```jsx
import {Menu, MenuItem} from '@jahia/moonstone';

<Menu isDisplayed={isOpen}>
    <MenuItem label="Rename"/>
</Menu>
```

## Do
- Use it for each action of a [Menu](?path=/docs/components-menu--docs).

## Don't
- Don't use a MenuItem outside a [Menu](?path=/docs/components-menu--docs). Use a [Button](?path=/docs/components-button--docs) for a standalone action.

## Appearance

### `variant` for structure

| Value | Use it for |
|---|---|
| `default` | The default. An item the user can choose. |
| `title` | A heading that introduces a group of items. It cannot be focused or chosen, and search skips it. |

### `iconSize` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should a MenuItem icon use the small size? --> |
| `default` | The default. |
| `big` | _Pending design guidance_ <!-- designer: when should a MenuItem icon use the big size? --> |

### `imageSize` for prominence

| Value | Use it for |
|---|---|
| `small` | The default. |
| `big` | _Pending design guidance_ <!-- designer: when should a MenuItem show its image at the big size instead of small? --> |

## Voice and tone
- Write item labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start an action item with a verb that names the action, such as "Rename", "Duplicate", or "Delete".
- Add a noun only when the same verb applies to different objects, such as "Copy link" and "Copy content".
- Be specific and name the real outcome. Write "Delete", never "OK".
