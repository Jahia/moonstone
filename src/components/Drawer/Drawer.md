## Example
```jsx
import {useState} from 'react';
import {Button, Drawer, Typography} from '@jahia/moonstone';

const [isOpen, setIsOpen] = useState(false);

<Button label="Show details" onClick={() => setIsOpen(true)}/>
{/* The Drawer renders in place, not above the page, and fills at least the full width of its parent. */}
<Drawer isOpen={isOpen} aria-label="Page details">
    <Typography component="h2" variant="heading" weight="bold">Page details</Typography>
    <Typography>Last published by Jane Doe.</Typography>
    <Button label="Close" variant="ghost" onClick={() => setIsOpen(false)}/>
</Drawer>
```

## Do
- Use it to show supplementary content beside the main page, such as the details or settings of a selected item.
- Use it for a side panel that the user opens and closes while the rest of the page stays visible and usable.

## Don't
- Don't use a Drawer for a task or a confirmation that must block the page until the user responds. Use a **Modal** instead.
- Don't use a Drawer for persistent navigation between pages. Use **PrimaryNav** or **SecondaryNav** instead.
- Don't use a Drawer to show or hide a section within the page flow. Use a **Collapsible** instead.

## Accessibility
- By default, the Drawer renders a complementary landmark. Give it an `aria-label` that names the panel, such as "Page details".
- Always provide a visible control that closes the Drawer, such as a "Close" **Button**.
