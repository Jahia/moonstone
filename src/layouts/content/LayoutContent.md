## Example
```jsx
import {LayoutContent, Header} from '@jahia/moonstone';

<LayoutContent header={<Header title="Settings"/>}>
    <SettingsPanel/>
</LayoutContent>
```

## Do
- Use it to lay out the main content area of a page, keeping that layout consistent across the product.
- Pair it with a **Header** passed to `header`. Most pages need one for a consistent title bar.

## Don't
- Don't use it as the top-level frame for a whole screen with a side navigation. Use a **LayoutApp** instead.
- Don't use it to arrange a navigation panel beside a content area. Use a **LayoutModule** instead.

## Accessibility
- While `isLoading` is `true`, the content region is marked busy and the content is replaced by a **Loader**, so assistive technology announces that the region is loading.
- Provide an accessible name for the content of the `header` so the page has a clear title.
