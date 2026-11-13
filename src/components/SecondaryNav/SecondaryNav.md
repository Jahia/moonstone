## Example
```jsx
import {SecondaryNav, SecondaryNavHeader} from '@jahia/moonstone';

<SecondaryNav
    aria-label="Administration"
    header={<SecondaryNavHeader>Content</SecondaryNavHeader>}
>
    <YourContent/>
</SecondaryNav>
```

## Do
- Use it as the second-level navigation of a section of the application, next to the [PrimaryNav](?path=/docs/components-primarynav--docs).
- Use it to hold the navigation of the current section, such as a [TreeView](?path=/docs/components-treeview--docs) or an [Accordion](?path=/docs/components-accordion--docs) of trees.
- Use it when the user needs to hide the navigation to make room for the content, or to resize it. It manages its visibility and width itself.
- Use it as the navigation of a [LayoutModule](?path=/docs/layouts-layoutmodule--docs).

## Don't
- Don't use it for the top-level navigation of the application. Use [PrimaryNav](?path=/docs/components-primarynav--docs) instead.
- Don't use it to switch between views inside a page. Use [Tab](?path=/docs/components-tab--docs) instead.
- Don't put [Collapsible](?path=/docs/components-collapsible--docs) sections in it. Use an [Accordion](?path=/docs/components-accordion--docs) instead.

## Voice and tone
- Write `i18n.toggleButtonLabel` as a short, verb-first accessible label in sentence case, such as "Toggle secondary navigation".

## Accessibility
- Pass an `aria-label` that names the navigation, such as "Administration". It is forwarded to the root element, which is a navigation landmark.
- Override `i18n`'s navigation, toggle button, and resize handle labels and its width unit when translating; left unset, they default to English.
- The SecondaryNav uses reversed colors by default, for a dark background. Give its content the same `isReversed` value, such as `<TreeView isReversed/>`, so the text keeps enough contrast.
