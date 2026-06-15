## Example
```jsx
import {LayoutContent, Header} from '@jahia/moonstone';

// A page with a header and its main content.
<LayoutContent header={<Header title="Settings"/>}>
    <SettingsPanel/>
</LayoutContent>

// Center the content, for an empty or single-message state.
<LayoutContent header={<Header title="Search"/>} isCentered>
    <EmptyData/>
</LayoutContent>

// Show a loader in place of the content while the page is fetching.
<LayoutContent header={<Header title="Reports"/>} isLoading>
    <ReportsTable/>
</LayoutContent>
```

## Do
- Use it to lay out the main content area of a page, with an optional header above it.
- Use it when the content should fill the remaining space inside its parent layout.
- Pair it with a **Header** passed to `header` to give the page a consistent title bar.

## Don't
- Don't use it as the top-level frame for a whole screen with a side navigation. Use a **LayoutApp** instead.
- Don't use it to arrange a navigation panel beside a content area. Use a **LayoutModule** instead.
- Don't pass the page body to `content`. That prop is deprecated, so pass it as `children` instead.

## Accessibility
- While `isLoading` is `true`, the content region is marked busy and the content is replaced by a **Loader**, so assistive technology announces that the region is loading.
- Provide an accessible name for the content of the `header` so the page has a clear title.
