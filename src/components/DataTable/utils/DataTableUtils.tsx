
import {type ColumnDef} from '@tanstack/react-table';
import type {DataTableProps, ColumnType, CellContent} from '../types/DataTableColumn.types';
import {TableCellDate} from '../cells/TableCellDate';
import {TableCellNumber} from '../cells/TableCellNumber';
import {TableCellChips} from '../cells/TableCellChip';
import {TableCellActions} from '../cells/TableCellActions';
import {TableCellText} from '../cells/TableCellText';

const getDefaultAlign = (type?: ColumnType): 'left' | 'right' => {
    if (type === 'number' || type === 'actions' || type === 'hover-actions') {
        return 'right';
    }

    return 'left';
};

const renderSmartCell = (
    type: ColumnType,
    value: string | number | Date | CellContent | null | undefined,
    locale?: string
) => {
    switch (type) {
        case 'date':
            return <TableCellDate value={value as Date} locale={locale}/>;
        case 'number':
            return <TableCellNumber value={value as number} locale={locale}/>;
        case 'badge':
            return <TableCellChips value={value as string}/>;
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
        id: col.key,
        accessorKey: col.key,
        header: col.label,

        meta: {
            isSortable: Boolean(col.isSortable),
            align: col.align || getDefaultAlign(col.type)
        },

        cell: ({row, getValue}) => {
            const value = getValue();

            if (col.render) {
                return col.render(value as T[keyof T], row.original);
            }

            const safeType: ColumnType = col.type || 'text';
            return renderSmartCell(safeType, value as string | number | Date | CellContent | null | undefined, locale);
        }
    }));
};
