import type { DataTableProps, SubRowKey } from '../DataTable.types';
import type { ColumnDef } from '@tanstack/react-table';

/**
 * Transforms user-friendly DataTable column definitions into TanStack Table compatible ColumnDef format.
 * This abstraction keeps the public API clean and framework-agnostic while leveraging TanStack internally.
 *
 * @param columns - Array of DataTableColumn definitions from the user
 * @returns Array of TanStack-compatible ColumnDef objects
 */
export const createTableColumns = <T extends Record<string, unknown>>(
    columns: DataTableProps<T>['columns'],
): ColumnDef<T>[] => {
    return columns.map(col => ({
        id: col.key as string,
        accessorKey: col.key as string,
        header: col.label,

        meta: {
            isSortable: col.isSortable ?? false,
            align: col.align,
            width: col.width,
            isScrollable: col.isScrollable,
            cellProps: col.cellProps,
        },
        enableSorting: col.isSortable ?? false,

        sortingFn: col.sortFn
            ? (rowA, rowB) => col.sortFn!(rowA.original, rowB.original)
            : 'auto',

        cell: ({ row, getValue }) => {
            const value = getValue();

            if (col.render) {
                return col.render({
                    id: row.id,
                    value: value as T[Exclude<keyof T, SubRowKey>],
                    data: row.original,
                    meta: {
                        index: row.index,
                        isSelected: row.getIsSelected(),
                        isExpanded: row.getIsExpanded(),
                    },
                });
            }

            return value as React.ReactNode;
        },
    }));
};
