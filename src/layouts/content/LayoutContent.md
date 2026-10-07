## Example
```jsx
import {Header, LayoutContent} from '@jahia/moonstone';

<LayoutContent header={<Header title="Settings"/>}>
    <YourContent/>
</LayoutContent>
```

## Do
- Use it to lay out the main content area of a page.
- Use it for a page with a title bar above a scrollable content area. The title bar stays in place while the content scrolls.
- Use it for a page whose content loads asynchronously. It shows a loader in place of the content until the data is ready.

## Don't
- Don't use it as the top-level frame of a whole screen with the primary navigation. Use a **LayoutApp** instead.
- Don't use it to place a secondary navigation beside a content area. Use a **LayoutModule** instead, and put the LayoutContent in its content area.

## Accessibility
- Give the page a title with a **Header**. It renders the title as the page's main heading.
- While `isLoading` is `true`, the content region is marked busy and its content is replaced by a **Loader**. Set it back to `false` as soon as the content is ready, so assistive technology reads the new content.
