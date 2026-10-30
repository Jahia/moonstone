## Example
```jsx
import {Button, Drawer} from '@jahia/moonstone';

<Drawer isOpen={isOpen} aria-label="Page details" onOpenChange={setIsOpen}>
    <Button label="Close"/>
    <YourContent/>
</Drawer>
```

## Do
- Use it to show supplementary content beside the main page, such as additional information about an item.
- Use it for a side panel that the user opens and closes while the rest of the page stays visible and usable.

## Don't
- Don't use a Drawer for a task or a confirmation that must block the page until the user responds. Use a [Modal](?path=/docs/components-modal--docs) instead.
- Don't use a Drawer for persistent navigation between pages. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use a Drawer to show or hide a section within the page flow. Use a [Collapsible](?path=/docs/components-collapsible--docs) instead.

## Accessibility
- By default, the Drawer renders a complementary landmark. Name it with `aria-label` or `aria-labelledby`.
- Always provide a visible control that closes the Drawer, such as a "Close" [Button](?path=/docs/components-button--docs).
- Pass `onOpenChange` so that Escape closes the Drawer. Without it, Escape does nothing.
- Opening the Drawer moves the focus to its first focusable element, and closing it while the focus is inside returns the focus to the element that had it before. A Drawer rendered open does not take the focus.
