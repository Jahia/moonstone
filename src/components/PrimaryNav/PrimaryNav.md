## Example
```jsx
import {PrimaryNav, PrimaryNavItem, PrimaryNavItemsGroup} from '@jahia/moonstone';
import {Apps, Person, Power} from '@jahia/moonstone/icons';

<PrimaryNav
    headerCaption="Production"
    headerLogo={<img alt="Acme" height={30} src="/logo.svg"/>}
    top={(
        <PrimaryNavItemsGroup>
            <PrimaryNavItem isSelected icon={<Apps/>} label="Dashboard"/>
            <PrimaryNavItem icon={<Person/>} label="Users"/>
        </PrimaryNavItemsGroup>
    )}
    bottom={(
        <PrimaryNavItemsGroup>
            <PrimaryNavItem icon={<Power/>} label="Sign out" onClick={handleSignOut}/>
        </PrimaryNavItemsGroup>
    )}
/>
```

## Do
- Use it as the application's single top-level (level-1) navigation.
- Use it to group the application's destinations into sections with **PrimaryNavItemsGroup**, each holding one or more **PrimaryNavItem**.
- Use it when the navigation should collapse to an icon-only rail and expand back on demand. It manages that state itself.

## Don't
- Don't use it for secondary or in-page navigation within a section. Use **SecondaryNav** instead.
- Don't use it to switch between views inside a single page, such as panel tabs. Use **Tab** instead.
- Don't place a **PrimaryNavItem** directly in `top` or `bottom`. Wrap it in a **PrimaryNavItemsGroup** first.

## Voice and tone
- Write `headerCaption` in sentence case and keep it short, such as an environment name ("Production").

## Accessibility
- Give `headerLogo` a meaningful `alt` attribute when it's an image, or an empty one if it's purely decorative.
- If the page has more than one navigation landmark, pass `aria-label` to distinguish this one. It is forwarded to the underlying `<nav>`.
