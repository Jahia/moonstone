## Example
```jsx
import {LayoutApp} from '@jahia/moonstone';

<LayoutApp content={<YourContent/>}/>
```

## Do
- Use it as the single root layout of an application screen, pairing a navigation panel with the main content area.
- Use it to keep the overall application frame, such as the position and width of the navigation, consistent across the product.

## Don't
- Don't use it to lay out an inner content area, such as the content of a module or a panel. Use a **LayoutContent** instead.
- Don't use it to pair a secondary navigation with content inside a module nested in the application. Use a **LayoutModule** instead.

## Accessibility
- Give the content passed to `navigation` a landmark, such as a `nav` element or an `aria-label`, so assistive technology can identify it.
- While `isLoading` is `true`, the content area is replaced by a **Loader**, which assistive technology announces through its own status role.
