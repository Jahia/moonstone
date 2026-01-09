import type {ColumnDef} from '@tanstack/react-table';
import type {DataTableProps, SubRowKey} from '~/components/DataTable/DataTable.types';

/**
 * Transforms user-friendly DataTable column definitions into TanStack Table compatible ColumnDef format.
 * This abstraction keeps the public API clean and framework-agnostic while leveraging TanStack internally.
 *
 * @param columns - Array of DataTableColumn definitions from the user
 * @returns Array of TanStack-compatible ColumnDef objects
 */
export const createTableColumns = <T extends Record<string, unknown>>(
    columns: DataTableProps<T>['columns']
): ColumnDef<T>[] => {
    return columns.map(col => ({
        id: col.key as string,
        accessorKey: col.key as string,
        header: col.label,

        meta: {
            isSortable: col.isSortable ?? false,
            align: col.align ?? 'left'
        },
        enableSorting: col.isSortable ?? false,

        sortingFn: col.sortFn ?
            (rowA, rowB) => col.sortFn!(rowA.original as T, rowB.original as T) :
            'auto',

        cell: ({row, getValue}) => {
            const value = getValue();

            // Use custom render function if provided
            if (col.render) {
                return col.render(value as T[Exclude<keyof T, SubRowKey>], row.original as T);
            }

            // Fallback: return raw value as ReactNode
            return value as React.ReactNode;
        }
    }));
};
