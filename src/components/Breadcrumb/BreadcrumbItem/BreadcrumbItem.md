## Example

```jsx
import {Breadcrumb, BreadcrumbItem} from '@jahia/moonstone';

<Breadcrumb>
    <BreadcrumbItem label="Home" onClick={() => navigate('/')}/>
    <BreadcrumbItem label="Media"/>
</Breadcrumb>
```

## Do

- Use it for each level of a **Breadcrumb**, from the root to the current page.
- Use it to let the user go back to an ancestor level of the current page.

## Don't

- Don't use a BreadcrumbItem outside a Breadcrumb. Use a **Button** instead for a standalone action.

## Voice and tone

- Write labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Use the name of the page or section the item leads to, such as "Home", "Media", or "Images".

## Accessibility

- The label is the accessible name of the item. Make it name the destination.
- An icon-only BreadcrumbItem (one with no `label`) must have an `aria-label` that names the destination.
- Don't set `aria-current` yourself. The Breadcrumb sets it on the last item automatically.
- The focus ring appears automatically on keyboard focus. Don't remove it.
