## Example
```jsx
import {Pagination} from '@jahia/moonstone';

<Pagination totalOfItems={120}/>
```

## Controlled
- Pass `currentPage` and `onPageChange`, and `itemsPerPage` with `onItemsPerPageChange`. You own the state, and `onPageChange(page)` gives you the new page, starting at 1.
- Use it when changing the page loads data.
- Don't mix the two modes. Passing both `currentPage` and `defaultCurrentPage` is not supported.

```jsx
<Pagination currentPage={page} itemsPerPage={itemsPerPage} totalOfItems={120} onPageChange={setPage} onItemsPerPageChange={setItemsPerPage}/>
```

## Uncontrolled
- Pass `defaultCurrentPage` and `defaultItemsPerPage` (optional) and let the component manage its own state. It goes back to the first page when the number of items per page changes.
- Use it when nothing else needs the page.

```jsx
<Pagination totalOfItems={120} defaultCurrentPage={2}/>
```

## Do
- Use it under a list or a grid of items that you split into pages yourself.

## Don't
- Don't add a Pagination under a [DataTable](?path=/docs/components-datatable--docs). Use its built-in pagination instead.

## Voice and tone
- The default labels are in English. Pass translated labels through `i18n`.
