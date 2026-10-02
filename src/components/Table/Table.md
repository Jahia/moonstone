## Example
```jsx
import {Table, TableHead, TableHeadCell, TableBody, TableRow, TableBodyCell} from '@jahia/moonstone';

<Table>
    <TableHead>
        <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell width="120px">Status</TableHeadCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {pages.map(page => (
            <TableRow key={page.id}>
                <TableBodyCell>{page.name}</TableBodyCell>
                <TableBodyCell width="120px">{page.status}</TableBodyCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
```

## Do
- Use it to lay out rows and columns when you write the markup of every row and cell yourself.
- Use it when an external table library, such as react-table, already drives sorting, selection, or nested rows, and you only need the design system's styling for the result.

## Don't
- Don't use a Table to display a list of records with sortable columns, row selection, pagination, or expandable rows. Use a **DataTable** instead, which handles them for you.
- Don't show an empty Table when there are no rows. Render an **EmptyData** in its place.

## Accessibility
- Put the header row in a `TableHead` and build it with `TableHeadCell`, so its cells render as header cells and screen readers announce each value with its column.
- If you render a part of the table as another element through `component`, add the matching ARIA role, such as `table`, `row`, `columnheader`, or `cell`. Otherwise the table semantics are lost.
- The Table doesn't manage sorting. On a sortable column, set `aria-sort` on the sorted `TableHeadCell`, and make the header operable with the keyboard as well as the mouse.
- An icon-only **Button** in a cell must have an `aria-label` that describes the action.
