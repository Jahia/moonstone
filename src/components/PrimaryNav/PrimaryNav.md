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
- Use it as the application's single top-level (level-1) navigation.
- Use it to group the application's destinations into sections with [PrimaryNavItemsGroup](?path=/docs/components-primarynavitemsgroup--docs), each holding one or more [PrimaryNavItem](?path=/docs/components-primarynavitem--docs).
- Use it when the navigation should collapse to an icon-only rail and expand back on demand. It manages that state itself.

## Don't
- Don't use it for secondary or in-page navigation within a section. Use [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use it to switch between views inside a single page, such as panel tabs. Use [Tab](?path=/docs/components-tab--docs) instead.
- Don't place a [PrimaryNavItem](?path=/docs/components-primarynavitem--docs) directly in `top` or `bottom`. Wrap it in a [PrimaryNavItemsGroup](?path=/docs/components-primarynavitemsgroup--docs) first.

## Voice and tone
- Write `headerCaption` in sentence case and keep it short, such as an environment name ("Production").

## Accessibility
- Give `headerLogo` a meaningful `alt` attribute when it's an image, or an empty one if it's purely decorative.
- If the page has more than one navigation landmark, pass `aria-label` to distinguish this one. It is forwarded to the underlying `<nav>`.
- Escape collapses the expanded navigation and returns the focus to the toggle (soon).
