## Example

```jsx
import {Breadcrumb, BreadcrumbItem} from '@jahia/moonstone';
import {Folder} from '@jahia/moonstone/icons';

// Label only
<Breadcrumb>
    <BreadcrumbItem label="Home" onClick={() => navigate('/')}/>
    <BreadcrumbItem label="Media"/>
</Breadcrumb>

// With a leading icon
<Breadcrumb>
    <BreadcrumbItem icon={<Folder/>} label="Media" onClick={() => navigate('/media')}/>
    <BreadcrumbItem label="Images"/>
</Breadcrumb>

// Icon-only. See Accessibility for the required aria-label.
<Breadcrumb>
    <BreadcrumbItem icon={<Folder/>} aria-label="Media" onClick={() => navigate('/media')}/>
    <BreadcrumbItem label="Images"/>
</Breadcrumb>
```

## Do

- Use it inside a `Breadcrumb` to represent one level of the navigation hierarchy.
- Use it with `onClick` to navigate when the user selects an ancestor item.
- Use it with an `icon` to reinforce the identity of a section visually.

## Don't

- Don't use it outside a `Breadcrumb`. It is designed to work only as a direct child of `Breadcrumb`.
- Don't set `aria-current="page"` manually. `Breadcrumb` sets it on the last item automatically.

## Voice and tone

- Write labels in sentence case, using a few words at most.
- Use the name of the section or page, such as "Home", "Media", or "Images".
- Avoid verbs unless the destination is an action page.

## Accessibility

- An icon-only `BreadcrumbItem` (no `label`) must have an `aria-label` that names the destination.
- The `label` prop is the accessible name of the item. Keep it concise and descriptive.
- The focus ring appears automatically on keyboard focus. Do not remove it.
