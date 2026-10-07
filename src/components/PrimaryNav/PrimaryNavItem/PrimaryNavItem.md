## Example
```jsx
import {PrimaryNavItem} from '@jahia/moonstone';

<PrimaryNavItem label="Dashboard"/>
```

## Do
- Use it for each destination of the application's primary navigation, inside a **PrimaryNavItemsGroup**.
- Use it for an action that belongs in the primary navigation, such as signing out.
- Use it to link to an external resource, such as the documentation. The link opens in a new tab.
- Use it for the user's own entry, such as a profile item that shows the user name below its label and holds a sign-out control.

## Don't
- Don't use it on its own or in another list. Place it in a **PrimaryNavItemsGroup** inside a **PrimaryNav**.
- Don't use it for the navigation inside a section of the application. Use **SecondaryNav** instead.
- Don't use it for an entry of a dropdown or contextual menu. Use a **MenuItem** inside a **Menu** instead.

## Voice and tone
- Write `label` and `subtitle` in sentence case.
- Keep them to a few words, 3 at most, and never a full sentence. They don't wrap and are cut off when they overflow.
- For an action, start with the verb that names it, such as "Sign out".
- Be specific and name the real destination or outcome. Never write a vague label such as "OK".

## Accessibility
- Set `isSelected` on one item at a time. It's exposed as `aria-current`, which assumes a single current page or section.
- Always pass a `label`. It is also shown as a tooltip when the collapsed navigation shows only the icon.
- Enter or Space activates the focused item. Don't add another click handler or `tabIndex` on a wrapper.
