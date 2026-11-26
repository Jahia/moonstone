## Example
```jsx
import {Pagination} from '@jahia/moonstone';

<Pagination
    currentPage={currentPage}
    itemsPerPage={itemsPerPage}
    totalOfItems={120}
    onPageChange={setCurrentPage}
    onItemsPerPageChange={setItemsPerPage}
/>
```

## Do
- Use it under a list or a grid of items that you split into pages yourself.

## Don't
- Don't add a Pagination under a [DataTable](?path=/docs/components-datatable--docs). Use its built-in pagination instead.

## Voice and tone
- The default labels are in English. Pass translated labels through `i18n`.
