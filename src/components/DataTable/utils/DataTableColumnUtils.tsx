import {type ColumnDef} from '@tanstack/react-table';
import type {DataTableProps, ColumnType, SubRowKey, CellValue} from '../DataTable.types';

const renderCustomCell = (
    Cell: ColumnType,
    value: unknown,
    locale?: string
) => {
    return <Cell value={value as CellValue} locale={locale}/>;
};

export const createTableColumns = <T extends Record<string, unknown>>(
    columns: DataTableProps<T>['columns']
): ColumnDef<T>[] => {
    return columns.map(col => ({
        id: col.key as string,
        accessorKey: col.key as string,
        header: col.label,

        meta: {
            isSortable: col.isSortable,
            align: col.align
        },

        cell: ({row, getValue}) => {
            const value = getValue();

            if (col.render) {
                return col.render(value as T[Exclude<keyof T, SubRowKey>], row.original as T);
            }

            const Component = col.type;
            if (!Component) {
                return value as CellValue;
            }

            return renderCustomCell(Component, value);
        }
    }));
};
