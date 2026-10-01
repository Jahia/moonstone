## Example

```jsx
import {Breadcrumb, BreadcrumbItem} from '@jahia/moonstone';

<Breadcrumb>
    <BreadcrumbItem label="Home" onClick={() => handleOnClick()}/>
    <BreadcrumbItem label="Media"/>
</Breadcrumb>
```

## Do

- Use it inside a **Breadcrumb** to represent one level of the navigation hierarchy.
- Use it with `onClick` to navigate when the user selects an ancestor item.
- Use it with an `icon` to reinforce the identity of a section visually.

## Don't

- Don't use it outside a Breadcrumb. Use **Button** directly for a standalone action.

## Voice and tone

- Write labels in sentence case, using a few words at most.
- Use the name of the section or page, such as "Home", "Media", or "Images".
- Avoid verbs unless the destination is an action page.

## Accessibility

- An icon-only `BreadcrumbItem` (no `label`) must have an `aria-label` that names the destination.
- The `label` prop is the accessible name of the item. Keep it concise and descriptive.
- Don't set `aria-current="page"` manually. Breadcrumb sets it on the last item automatically.
- The focus ring appears automatically on keyboard focus. Do not remove it.
