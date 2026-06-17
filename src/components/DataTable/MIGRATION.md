# DataTable API Migration Guide

## Why we changed the API

The previous `renderRow` API exposed the internal row object from the underlying table library directly to consumers:

```tsx
// Old API
renderRow={(row, renderCells) => {
    const release = row.original; // ← leaked internal structure
    return <TableRow>{renderCells()}</TableRow>;
}}
```

This created two problems:

1. **Tight coupling to the table library.** If we ever swap the underlying table library, every consumer that used `row.original`, `row.getIsSelected()`, or any other internal method would break. The public API should be stable regardless of what runs underneath.

2. **Poor ergonomics.** The most common need — accessing the row data — required knowing an internal detail (`.original`). The same inconsistency existed across `render`, `cellProps`, and `rowProps`, each with different callback signatures.

The new API gives you a **stable, library-agnostic context object** that will remain consistent regardless of any internal implementation changes.

---

## New API: the context object

All row-level callbacks now receive a **single context object** with the same shape:

```ts
type RowContext<T> = {
    id: string;        // Unique row identifier (value of primaryKey)
    data: T;           // Your row data — no .original needed
    meta: {
        index: number;        // Position in the current dataset
        isSelected: boolean;  // Whether the row is selected
        isExpanded: boolean;  // Whether the row is expanded (hierarchical tables)
    };
};
```

`renderRow` extends this with a `render` function:

```ts
type RenderRowContext<T> = RowContext<T> & {
    render: (options?: RenderOptions) => React.ReactNode;
};
```

`render` (column cell render) extends it with a `value` field:

```ts
type RenderCellContext<T> = RowContext<T> & {
    value: T[key]; // The value of this specific cell
};
```

---

## Migration examples

### renderRow

**Before:**
```tsx
renderRow={(row, renderCells) => (
    <TableRow
        key={row.id}
        className={clsx(row.original.items?.length === 0 && styles.disabled)}
    >
        {renderCells({
            after: <MenuAction release={row.original} />
        })}
    </TableRow>
)}
```

**After:**
```tsx
renderRow={({id, data, render}) => (
    <TableRow
        key={id}
        className={clsx(data.items?.length === 0 && styles.disabled)}
    >
        {render({
            after: <MenuAction release={data} />
        })}
    </TableRow>
)}
```

### Column render function

**Before:**
```tsx
{
    key: 'status',
    label: 'Status',
    render: (value, row) => (
        <Badge className={row.status === 'draft' ? styles.draft : ''}>
            {value}
        </Badge>
    )
}
```

**After:**
```tsx
{
    key: 'status',
    label: 'Status',
    render: ({value, data}) => (
        <Badge className={data.status === 'draft' ? styles.draft : ''}>
            {value}
        </Badge>
    )
}
```

### cellProps

**Before:**
```tsx
{
    key: 'name',
    label: 'Name',
    cellProps: (row) => ({
        'data-id': row.id,
        className: row.status === 'active' ? styles.active : ''
    })
}
```

**After:**
```tsx
{
    key: 'name',
    label: 'Name',
    cellProps: ({id, data, meta}) => ({
        'data-id': id,
        className: data.status === 'active' ? styles.active : '',
        'aria-selected': meta.isSelected
    })
}
```

### rowProps

**Before:**
```tsx
<DataTable
    rowProps={(row) => ({
        className: row.status === 'draft' ? styles.disabled : ''
    })}
/>
```

**After:**
```tsx
<DataTable
    rowProps={({data, meta}) => ({
        className: data.status === 'draft' ? styles.disabled : '',
        'aria-selected': meta.isSelected || undefined
    })}
/>
```

---

## Summary of changes

| Callback | Before | After |
|---|---|---|
| `renderRow` | `(row, renderCells) => ...` | `({id, data, meta, render}) => ...` |
| column `render` | `(value, row) => ...` | `({value, id, data, meta}) => ...` |
| `cellProps` | `(row) => ...` | `({id, data, meta}) => ...` |
| `rowProps` | `(row) => ...` | `({id, data, meta}) => ...` |
| Row data access | `row.original.field` | `data.field` |
| Row identifier | `row.id` | `id` |

---

## TypeScript

All context types are exported and can be used to type extracted render functions:

```tsx
import type {RenderRowContext, RenderCellContext, RowContext, RenderMeta} from '@jahia/moonstone/DataTable';

// Type a render function separately
const renderRelease = ({id, data, render}: RenderRowContext<Release>) => (
    <TableRow key={id}>{render()}</TableRow>
);

// Type a cellProps function
const nameProps = ({data}: RowContext<Release>) => ({
    className: data.status === 'draft' ? styles.draft : ''
});
```
