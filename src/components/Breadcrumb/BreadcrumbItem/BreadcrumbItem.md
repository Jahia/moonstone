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

- Don't use a BreadcrumbItem outside a [Breadcrumb](?path=/docs/components-breadcrumb--docs). Place it inside a [Breadcrumb](?path=/docs/components-breadcrumb--docs) instead.

## Voice and tone

- Use the display name of the item the level leads to.
- A long label is truncated automatically, with an ellipsis.

## Accessibility

- An icon-only BreadcrumbItem (one with no `label`) must have an `aria-label` that names the destination.
