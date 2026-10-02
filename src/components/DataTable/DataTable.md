## Example
```jsx
import {DataTable} from '@jahia/moonstone';

const columns = [
    {key: 'name', label: 'Name', isSortable: true},
    {key: 'status', label: 'Status', width: '120px'},
    {key: 'lastModified', label: 'Last modified', width: '160px', isSortable: true},
];

<DataTable primaryKey="id" data={pages} columns={columns}/>
```

## Controlled & uncontrolled

Sorting, selection, pagination, and row expansion each work in either mode. Pick one mode per feature, and don't mix a controlled prop with its `default*` counterpart.

- **Uncontrolled** (default): the DataTable sorts, selects, paginates, and expands rows on its own from the `default*` props, so use it when all the rows are loaded at once.
  ```jsx
  <DataTable primaryKey="id" data={pages} columns={columns} enableSorting defaultSortBy="name"/>
  ```
- **Controlled**: the parent owns each state through its prop and callback, such as `sortBy` and `sortDirection` with `onSortChange`, so use it when the state lives elsewhere, such as in the URL or on the server.
  ```jsx
  const [sort, setSort] = useState({sortBy: 'name', sortDirection: 'ascending'});

  <DataTable
      primaryKey="id"
      data={sortedPages}
      columns={columns}
      enableSorting
      sortBy={sort.sortBy}
      sortDirection={sort.sortDirection}
      onSortChange={(sortBy, sortDirection) => setSort({sortBy, sortDirection})}
  />
  ```

In controlled mode, the DataTable doesn't sort or slice `data` itself. Pass the rows already sorted and, for pagination, only the rows of the current page, with `totalItems` set to the full count.

The callbacks receive the new state: `onSortChange(sortBy, sortDirection)`, `onChangeSelection(selection)` with the `primaryKey` values of the selected rows, `onPageChange(page)` with a page number that starts at 1, and `onExpandChange(expandedRows)` with the `primaryKey` values of the expanded rows.

## Do
- Use it to display a list of records as rows and columns, such as pages, users, or releases.
- Use it when users need to sort, select, or page through the rows.
- Use it to show hierarchical records, where a row expands to reveal its sub-rows.
- Use it when each row needs extra cells next to the data columns, such as a status or row actions.

## Don't
- Don't render a DataTable to show that there is nothing to display. It renders nothing when `data` is empty, so render an **EmptyData** in its place.
- Don't use a DataTable when you write the markup of every row and cell yourself, or when an external table library already drives the table. Use a **Table** instead.
- Don't build custom DataTable rows with the `TableRow` and cells exported from `@jahia/moonstone`. They belong to **Table**. Import **TableRow**, **TableCellStatus**, and **TableCellActions** from `@jahia/moonstone/DataTable` instead.
- Don't add a separate **Pagination** under a DataTable. Use its built-in pagination instead.

## Voice and tone
- Write column labels in sentence case, using a few words (3 maximum), such as "Last modified". Never write a full sentence.
- The default pagination labels are in English. Pass translated labels through `i18n`.

## Accessibility
- Give every column a meaningful `label`. It becomes the header that screen readers announce with each cell.
- Sorted headers get `aria-sort` and selected rows get `aria-selected` automatically. When you render rows yourself with `renderRow`, pass `aria-selected={meta.isSelected || undefined}` to your `TableRow`, as the default rows do.
- An icon-only **Button** in a custom cell must have an `aria-label` that describes the action. A **Tooltip** doesn't replace it.
