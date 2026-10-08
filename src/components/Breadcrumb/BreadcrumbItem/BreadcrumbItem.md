## Example

```jsx
import {Breadcrumb, BreadcrumbItem} from '@jahia/moonstone';

<Breadcrumb>
    <BreadcrumbItem label="Home"/>
</Breadcrumb>
```

## Do

- Use it for each level of a [Breadcrumb](?path=/docs/components-breadcrumb--docs), from the root to the current page.

## Don't

- Don't use a BreadcrumbItem outside a [Breadcrumb](?path=/docs/components-breadcrumb--docs). Use a [Button](?path=/docs/components-button--docs) instead for a standalone action.

## Voice and tone

- Write labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Use the name of the page or section the item leads to, such as "Home", "Media", or "Images".

## Accessibility

- An icon-only BreadcrumbItem (one with no `label`) must have an `aria-label` that names the destination.
