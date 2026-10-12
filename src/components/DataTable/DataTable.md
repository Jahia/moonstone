## Example
```jsx
import {DataTable} from '@jahia/moonstone';

const columns = [
    {key: 'name', label: 'Name'},
    {key: 'status', label: 'Status'},
    {key: 'lastModified', label: 'Last modified'},
];

<DataTable primaryKey="id" data={pages} columns={columns}/>
```

## Controlled
- Sorting, selection, pagination, and row expansion each work in either mode. Pick one mode per feature.
- Pass the state and its callback, such as `sortBy` and `sortDirection` with `onSortChange`. You own the state, and the DataTable doesn't sort or slice `data` itself: pass the rows already sorted and, for pagination, only the rows of the current page, with `totalItems` set to the full count.
- Use it when the state lives elsewhere.
- Don't mix a controlled prop with its `default*` counterpart.
- The callbacks receive the new state: `onSortChange(sortBy, sortDirection)`, `onChangeSelection(selection)` with the `primaryKey` values of the selected rows, `onPageChange(page)` with a page number that starts at 1, and `onExpandChange(expandedRows)` with the `primaryKey` values of the expanded rows.

```jsx
<DataTable primaryKey="id" data={sortedPages} columns={columns} enableSorting sortBy={sortBy} sortDirection={sortDirection} onSortChange={(by, direction) => setSort(by, direction)}/>
```

## Uncontrolled
- Pass the `default*` props (optional), such as `defaultSortBy`, and let the DataTable sort, select, paginate, and expand rows on its own. All the rows must be loaded at once.
- Use it when all the rows are loaded at once.

```jsx
<DataTable primaryKey="id" data={pages} columns={columns} enableSorting defaultSortBy="name"/>
```

## Do
- Use it to display a list of records as rows and columns.
- Use it when users need to sort, select, or page through the rows.
- Use it to show hierarchical records, where a row expands to reveal its sub-rows.
- Use it when each row needs extra cells next to the data columns.

## Don't
- Don't render a DataTable to show that there is nothing to display. It renders nothing when `data` is empty, so render an [EmptyData](?path=/docs/components-emptydata--docs) in its place.
- Don't use a DataTable when you write the markup of every row and cell yourself, or when an external table library already drives the table. Use a [Table](?path=/docs/components-table--docs) instead.
- Don't build custom DataTable rows with the `TableRow` and cells exported from `@jahia/moonstone`. They belong to [Table](?path=/docs/components-table--docs). Import **TableRow**, **TableCellStatus**, and **TableCellActions** from `@jahia/moonstone/DataTable` instead.
- Don't add a separate [Pagination](?path=/docs/components-pagination--docs) under a DataTable. Use its built-in pagination instead.

## Voice and tone
- Write column labels in sentence case, using a few words (3 maximum), such as "Last modified". Never write a full sentence.
- The default pagination labels are in English. Pass translated labels through `i18n`.

## Accessibility
- An icon-only [Button](?path=/docs/components-button--docs) in a custom cell must have an `aria-label` that describes the action. A [Tooltip](?path=/docs/components-tooltip--docs) doesn't replace it.
- Enter or Space on a sortable header sorts the column (soon).
- Enter or Space activates a clickable row (soon).
