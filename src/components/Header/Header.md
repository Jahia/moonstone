## Example
```jsx
import {Header} from '@jahia/moonstone';

<Header title="Home page"/>
```

## Do
- Use it at the top of a page to show the page title and the main actions of the page.
- Use it to give the context of the item shown on the page, such as its location in a [Breadcrumb](?path=/docs/components-breadcrumb--docs), its content type, or its status with a [Chip](?path=/docs/components-chip--docs).
- Use it to hold a toolbar of controls that act on the page content, such as a [Tab](?path=/docs/components-tab--docs), a [Dropdown](?path=/docs/components-dropdown--docs), or view switchers.
- Use it as the header of a [LayoutContent](?path=/docs/layouts-layoutcontent--docs).

## Don't
- Don't use it for the navigation of the application. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use it to title a section inside a page. Use [Typography](?path=/docs/tokens-typography--docs) instead.
- Don't use it as the header of a modal. Use [ModalHeader](?path=/docs/components-modalheader--docs) instead.
- Don't use it to title a secondary navigation panel. Use [SecondaryNavHeader](?path=/docs/components-secondarynavheader--docs) instead.

## Voice and tone
- Write the title in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the page or the item it shows, such as "Home page" or "Users".
- Write the labels of the main actions as [Button](?path=/docs/components-button--docs) labels: start with a verb that names the action, such as "Publish" or "Preview", and never write "OK".

## Accessibility
- The title is rendered as the page's main heading (`h1`). Use a single Header per page, and don't add another `h1` to the page.
- An icon-only [Button](?path=/docs/components-button--docs) in the toolbar or in the main actions must have an `aria-label` that describes the action.
- The toolbar is exposed as a toolbar to assistive technologies. Put only controls in it.
- In the toolbar, the Left and Right arrow keys move the focus between buttons (soon).
- Home and End move the focus to the first and last toolbar buttons (soon).
