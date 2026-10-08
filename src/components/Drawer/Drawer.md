## Example
```jsx
import {Button, Drawer} from '@jahia/moonstone';

<Drawer isOpen={isOpen} aria-label="Page details">
    <Button label="Close"/>
    <YourContent/>
</Drawer>
```

## Do
- Use it to show supplementary content beside the main page, such as the details or settings of a selected item.
- Use it for a side panel that the user opens and closes while the rest of the page stays visible and usable.

## Don't
- Don't use a Drawer for a task or a confirmation that must block the page until the user responds. Use a [Modal](?path=/docs/components-modal--docs) instead.
- Don't use a Drawer for persistent navigation between pages. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use a Drawer to show or hide a section within the page flow. Use a [Collapsible](?path=/docs/components-collapsible--docs) instead.

## Accessibility
- By default, the Drawer renders a complementary landmark. Give it an `aria-label` that names the panel, such as "Page details".
- Always provide a visible control that closes the Drawer, such as a "Close" [Button](?path=/docs/components-button--docs).
- Escape closes the Drawer (soon).
