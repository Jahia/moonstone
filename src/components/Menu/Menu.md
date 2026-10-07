## Example
```jsx
import {Menu, MenuItem} from '@jahia/moonstone';

<Menu isDisplayed={isOpen}>
    <MenuItem label="Rename"/>
    <MenuItem label="Delete"/>
</Menu>
```

## Do
- Use it to show a list of actions for an item, such as a "more actions" menu on a table row.
- Use it for a context menu that opens where the user clicks.
- Use it for a long list of actions that the user needs to filter.
- Use it to split a list of actions into groups, each introduced by a title item.

## Don't
- Don't use a Menu to let the user pick a value for a form field. Use a **Dropdown** instead.
- Don't use a Menu for persistent navigation between pages. Use **PrimaryNav** or **SecondaryNav** instead.
- Don't use a Menu for a task that needs the user's full attention or a confirmation. Use a **Modal** instead.
- Don't use a Menu for a short hint on hover. Use a **Tooltip** instead.

## Appearance

### `position` for placement

| Value | Use it for |
|---|---|
| `fixed` | The default. _Pending design guidance_ <!-- designer: when should a menu keep the default fixed position? --> |
| `absolute` | _Pending design guidance_ <!-- designer: when should a menu be positioned against its closest positioned ancestor instead of the viewport? --> |

### `variant` for structure

This prop belongs to each **MenuItem**.

| Value | Use it for |
|---|---|
| `default` | The default. An item the user can choose. |
| `title` | A heading that introduces a group of items. It cannot be focused or chosen, and search skips it. |

### `iconSize` for prominence

This prop belongs to each **MenuItem**.

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should a MenuItem icon use the small size? --> |
| `default` | The default. |
| `big` | _Pending design guidance_ <!-- designer: when should a MenuItem icon use the big size? --> |

### `imageSize` for prominence

This prop belongs to each **MenuItem**.

| Value | Use it for |
|---|---|
| `small` | The default. |
| `big` | _Pending design guidance_ <!-- designer: when should a MenuItem show its image at the big size instead of small? --> |

## Voice and tone
- Write item labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start an action item with a verb that names the action, such as "Rename", "Duplicate", or "Delete".
- Add a noun only when the same verb applies to different objects, such as "Copy link" and "Copy content".
- Be specific and name the real outcome. Write "Delete", never "OK".

## Accessibility
- An icon-only trigger, such as a **Button** with only an `icon`, must have an `aria-label` that describes the menu, such as "More actions".
- The Up and Down arrow keys move the focus between items.
- Enter or Space activates the focused item (soon).
- Home and End move the focus to the first and last items (soon).
- Escape closes the menu (soon).
