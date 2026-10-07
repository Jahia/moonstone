## Example
```jsx
import {Paper, Typography} from '@jahia/moonstone';

<Paper aria-labelledby="languages-title">
    <Typography id="languages-title" component="h2" variant="heading">Languages</Typography>
    <YourContent/>
</Paper>
```

## Do
- Use it to group a block of related content on a raised surface.
- Use it to stack several blocks of content on a page. Consecutive Papers are spaced apart automatically.

## Don't
- Don't use a Paper for content that must interrupt the user, such as a confirmation. Use a **Modal** instead.
- Don't use a Paper for a side panel that slides in beside the page content. Use a **Drawer** instead.
- Don't use a Paper for a section that the user expands and collapses. Use an **Accordion** or a **Collapsible** instead.

## Accessibility
- The Paper renders a `section`, which screen readers expose as a region only when it has an accessible name. Point `aria-labelledby` at the heading inside it, or pass `component="div"` when the Paper is only visual.
