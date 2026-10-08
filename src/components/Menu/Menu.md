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
- Don't use a Menu to let the user pick a value for a form field. Use a [Dropdown](?path=/docs/components-dropdown--docs) instead.
- Don't use a Menu for persistent navigation between pages. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use a Menu for a task that needs the user's full attention or a confirmation. Use a [Modal](?path=/docs/components-modal--docs) instead.
- Don't use a Menu for a short hint on hover. Use a [Tooltip](?path=/docs/components-tooltip--docs) instead.

## Appearance

### `position` for placement

| Value | Use it for |
|---|---|
| `fixed` | The default. _Pending design guidance_ <!-- designer: when should a menu keep the default fixed position? --> |
| `absolute` | _Pending design guidance_ <!-- designer: when should a menu be positioned against its closest positioned ancestor instead of the viewport? --> |

## Accessibility
- An icon-only trigger, such as a [Button](?path=/docs/components-button--docs) with only an `icon`, must have an `aria-label` that describes the menu, such as "More actions".
- The Up and Down arrow keys move the focus between items.
- Enter or Space activates the focused item (soon).
- Home and End move the focus to the first and last items (soon).
- Escape closes the menu (soon).
