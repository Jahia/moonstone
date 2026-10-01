## Example
```jsx
import {PrimaryNavItemsGroup, PrimaryNavItem} from '@jahia/moonstone';
import {Apps} from '@jahia/moonstone/icons';

<PrimaryNavItemsGroup>
    <PrimaryNavItem isSelected icon={<Apps/>} label="Dashboard"/>
    <PrimaryNavItem icon={<Apps/>} label="Reports"/>
</PrimaryNavItemsGroup>
```

## Do
- Use it to group related **PrimaryNavItem**s inside a **PrimaryNav**, separated from the next group by a divider.
- Use it to keep a low-priority group out of sight when the navigation is collapsed. Set `isDisplayedWhenCollapsed` to `false`.

## Don't
- Don't use it outside a **PrimaryNav**. It reads the navigation's expanded state from context to decide whether to render.

## Accessibility
- Always render it inside a **PrimaryNav**'s `top` or `bottom`. It depends on the surrounding `<nav>` and list markup for correct navigation semantics.
