
import {type ColumnDef} from '@tanstack/react-table';
import type {DataTableProps, ColumnType, CellContent} from '../DataTable.types';
import {TableCellDate} from '../cells/TableCellDate';
import {TableCellNumber} from '../cells/TableCellNumber';
import {TableCellChip} from '../cells/TableCellChip';
import {TableCellActions} from '../cells/TableCellActions';
import {TableCellText} from '../cells/TableCellText';


const CustomCell = (
    type: ColumnType,
    value: string | number | Date | CellContent | null | undefined,
    align: 'left' | 'center' | 'right',
    locale?: string
) => {
    switch (type) {
        case 'date':
            return <TableCellDate value={value as Date} locale={locale}/>;
        case 'number':
            return <TableCellNumber value={value as number} locale={locale}/>;
        case 'badge':
            return <TableCellChip value={value as string}/>;
        case 'actions':
            return <TableCellActions/>;
        case 'text':
        default:
            return <TableCellText value={value as string | CellContent}/>;
    }
};

export const createTableColumns = <T extends Record<string, unknown>>(
    columns: DataTableProps<T>['columns'],
    locale?: string
): ColumnDef<T>[] => {
    return columns.map(col => ({
        id: col.key as string,
        accessorKey: col.key as string,
        header: col.label,

        meta: {
            isSortable: col.isSortable,
            align: col.align
        },

        cell: ({row, getValue, column}) => {
            const value = getValue();

            if (col.render) {
                return col.render(value as any, row.original);
            }

            const safeType: ColumnType = col.type || 'text';
            const alignment = col.align
            return CustomCell(safeType, value as string | number | Date | CellContent | null | undefined, alignment, locale);
        }
    }));
};
