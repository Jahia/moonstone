## Example
```jsx
import {LayoutModule} from '@jahia/moonstone';

<LayoutModule content={<YourContent/>}/>
```

## Do
- Use it to pair a secondary navigation with a content area, for a module of the application such as a settings or administration screen.
- Use it as the content area of a [LayoutApp](?path=/docs/layouts-layoutapp--docs), beside the primary navigation. It places the navigation and the content side by side in that row.

## Don't
- Don't use it as the top-level frame of a whole application screen. Use a [LayoutApp](?path=/docs/layouts-layoutapp--docs) instead.
- Don't use it for a content area that has no secondary navigation. Use a [LayoutContent](?path=/docs/layouts-layoutcontent--docs) instead.

## Accessibility
- The content renders in a `<main>` landmark by default, and a page has only one. If the page already has a `<main>`, set `component` to another element, such as `section`.
- While `isLoading` is `true`, the content region is marked busy and its content is replaced by a [Loader](?path=/docs/components-loader--docs). Set it back to `false` as soon as the content is ready, so assistive technology reads the new content.
