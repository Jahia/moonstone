## Example

```jsx
import {Breadcrumb, BreadcrumbItem} from '@jahia/moonstone';
import {Folder} from '@jahia/moonstone/icons';

// Basic trail showing the current location in a hierarchy
<Breadcrumb>
    <BreadcrumbItem label="Home" onClick={() => navigate('/')}/>
    <BreadcrumbItem label="Media" onClick={() => navigate('/media')}/>
    <BreadcrumbItem label="Images"/>
</Breadcrumb>

// With an icon on one of the items
<Breadcrumb>
    <BreadcrumbItem icon={<Folder/>} label="Media" onClick={() => navigate('/media')}/>
    <BreadcrumbItem label="Images"/>
</Breadcrumb>
```

## Do

- Use it to show the current page's position in a multi-level hierarchy and let the user navigate to an ancestor level.
- Use it at the top of a content area so the user can always tell where they are in the navigation hierarchy.

## Don't

- Don't use it for flat, single-level navigation. Use **Tab** or **SecondaryNav** instead.
- Don't use it as a step indicator for a wizard or multi-step form. It conveys location, not progress.
- Don't use it when there is only one item. A single-item breadcrumb provides no useful hierarchy context.

## Accessibility

- The `<nav>` element is rendered with `aria-label="breadcrumb"` automatically. Do not wrap it in another `<nav>`.
- The last `BreadcrumbItem` receives `aria-current="page"` automatically. Do not set it manually.
- An icon-only `BreadcrumbItem` (no `label`) must have an `aria-label` that names the destination.
- The focus ring appears automatically on keyboard focus. Do not remove it.
