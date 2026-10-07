## Example
```jsx
import {CustomDropdown} from '@jahia/moonstone';

<CustomDropdown label="Filters">
    <YourContent/>
</CustomDropdown>
```

## Do
- Use it to open custom content from a button, such as sorting controls or a small form, without
  leaving the page.

## Don't
- Don't use it to pick one or several values from a list of options. Use a **Dropdown** instead.
- Don't use it for a single action with no content to show. Use a **Button** instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `ghost` | _Pending design guidance_ <!-- designer: default value. Does the Button `ghost` guidance (toolbars, icon-only) apply here? --> |
| `outlined` | _Pending design guidance_ <!-- designer: when should the trigger be outlined, such as a sorting control above a list? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: Button restricts `small` to BreadcrumbItem. Is it allowed here? --> |
| `default` | _Pending design guidance_ <!-- designer: default value. Confirm it is the standard size. --> |
| `big` | _Pending design guidance_ <!-- designer: does `big` apply here as in Button (headers, modal footers)? --> |

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum). Never write a full
  sentence.
- When the label names an action, start with a verb, such as "Sort" or "Filter".

## Accessibility
- An icon-only CustomDropdown (one with no `label`) must have an `aria-label` that describes what
  it opens.
- Make sure every control you pass as children is reachable with the keyboard.
- The Down arrow key opens the menu (soon).
- The Up and Down arrow keys move the focus between items.
- Enter activates the focused item (soon).
- Escape closes the menu and returns the focus to the trigger (soon).
