## Example
```jsx
import {PrimaryNavItem} from '@jahia/moonstone';
import {Apps} from '@jahia/moonstone/icons';

<PrimaryNavItem isSelected icon={<Apps/>} label="Dashboard"/>
```

## Do
- Use it for each destination or action inside a **PrimaryNavItemsGroup**, such as a section link or a sign-out action.
- Use it to mark the page or section the user is currently on. Set `isSelected` on that one item.
- Use it with a `url` to link to an external resource. It renders as a link that opens in a new tab.
- Use it with a `button` to add a secondary action, such as a sign-out control, alongside the item's main click target.

## Don't
- Don't use it outside a **PrimaryNav**. It depends on the navigation's context to collapse an expanded **PrimaryNav** when clicked.
- Don't use it for a generic, non-navigation list row. Use **ListItem** instead.

## Voice and tone
- Write `label` and `subtitle` in sentence case and keep them short. They don't wrap and are cut off when they overflow the rail.

## Accessibility
- Set `isSelected` on only one item at a time. It's exposed as `aria-current`, which assumes a single current page or section.
- Pass a `label`. It also becomes the native `title` tooltip shown when the collapsed nav exposes only the icon.
- If you omit `label` for an icon-only item, pass `aria-label` instead so the item still has an accessible name.
