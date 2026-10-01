## Example
```jsx
import {LayoutModule} from '@jahia/moonstone';

<LayoutModule navigation={<ModuleNavigation/>} content={<ModuleContent/>}/>
```

## Do
- Use it to pair a secondary navigation with a content area inside a module nested in the application, such as a settings or management screen.
- Use it inside the `content` of a **LayoutApp**.

## Don't
- Don't use it as the top-level frame for a whole application screen. Use a **LayoutApp** instead.
- Don't use it for a content area that has no secondary navigation. Use a **LayoutContent** instead.

## Accessibility
- `navigation` is rendered inside an `aside` landmark automatically. Give its content an accessible name if the page has more than one `aside`.
- `component` controls the semantic element rendered for the content region (`main` by default). Don't use `"main"` more than once per page.
- While `isLoading` is `true`, the content region is marked busy and the content is replaced by a **Loader**, so assistive technology announces that the region is loading.
