## Example
```jsx
import {CustomDropdown} from '@jahia/moonstone';

<CustomDropdown label="Filters">
    <YourContent/>
</CustomDropdown>
```

## Do
- Use it to open custom content from a button, without leaving the page.

## Don't
- Don't use it to pick one or several values from a list of options. Use a [Dropdown](?path=/docs/components-dropdown--docs) instead.
- Don't use it for a single action with no content to show. Use a [Button](?path=/docs/components-button--docs) instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `ghost` | _Pending design guidance_ <!-- designer: default value. Where should a borderless Dropdown be used (toolbars, inline filters)? --> |
| `outlined` | _Pending design guidance_ <!-- designer: is outlined the form-field look, such as inside a Field? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `small` | [BreadcrumbItem](?path=/docs/components-breadcrumbitem--docs) only. Don't use it elsewhere for now. |
| `big` | Header and modal-footer buttons, where you want to raise emphasis. The label is shown in uppercase. |

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum). Never write a full
  sentence.
- When the label names an action, start with a verb, such as "Sort" or "Filter".

## Accessibility
- An icon-only CustomDropdown (one with no `label`) must have an `aria-label` that describes what
  it opens.
- Make sure every control you pass as children is reachable with the keyboard.
- The Down arrow key opens the menu (soon).
- Opening the menu with the keyboard moves the focus to the first item (soon).
- The Up and Down arrow keys move the focus between items.
- Enter activates the focused item (soon).
- Escape closes the menu and returns the focus to the trigger (soon).
