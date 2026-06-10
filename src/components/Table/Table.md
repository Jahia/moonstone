Renders tabular data with the design system's styling. Table is the structural
container; you compose it from the head, body, row, and cell sub-components.

## When to use
- Displaying rows and columns of related data.
- You need full control over the markup of headers, rows, and cells.

## When NOT to use
- Rich data grids with built-in sorting/selection/virtualization out of the box →
  use **DataTable** (`@jahia/moonstone/DataTable`).
- A simple vertical list of items → use **ListItem** / a list layout.

## Usage
```jsx
import {Table, TableHead, TableBody, TableRow} from '@jahia/moonstone';
// cell components live under Table's table-cells

<Table>
    <TableHead>
        <TableRow>{/* header cells */}</TableRow>
    </TableHead>
    <TableBody>
        <TableRow>{/* data cells */}</TableRow>
    </TableBody>
</Table>
```

- `component` lets you render as a different element when needed.

## Composition
- Build with **TableHead**, **TableBody**, **TableRow**, the **table-cells**, and
  optionally **TablePagination** and **SortIndicator**.

## Accessibility
- Use real table semantics (header cells in `TableHead`) so screen readers announce
  rows/columns correctly.

## Related
- **DataTable** (batteries-included grid), **Pagination**, **ListItem**.
