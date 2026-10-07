## Example
```jsx
import {PrimaryNav, PrimaryNavItem, PrimaryNavItemsGroup} from '@jahia/moonstone';

<PrimaryNav
    top={(
        <PrimaryNavItemsGroup>
            <PrimaryNavItem label="Dashboard"/>
            <PrimaryNavItem label="Users"/>
        </PrimaryNavItemsGroup>
    )}
/>
```

## Do
- Use it to group related **PrimaryNavItem** entries at the top or the bottom of a **PrimaryNav**. Each group starts with a divider.
- Use it for a low-priority set of entries that should disappear while the navigation is collapsed to icons.

## Don't
- Don't use it outside a **PrimaryNav**. To divide other content, use a **Separator** instead.
- Don't use it to group the entries of a navigation inside a section of the application. Use **SecondaryNav** instead.

## Accessibility
- Place it directly in the `top` or `bottom` of a **PrimaryNav**. It renders list items, which need the list that the **PrimaryNav** provides.
- Put only **PrimaryNavItem** entries in it, so the nested list holds only list items.
