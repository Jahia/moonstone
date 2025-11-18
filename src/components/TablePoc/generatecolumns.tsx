import type {ColumnDef} from '@tanstack/react-table';
import {TableColumnConfig} from './TableColumnConfigTypes';

export const generateColumns = <T extends Record<string, unknown>>(
    config: TableColumnConfig<T>[]
): ColumnDef<T>[] => {
    return config.map(c => ({
        id: c.key.toString(),
        header: c.header,
        accessorKey: c.key,
        cell: c.cell ?
            info => c.cell!(info.getValue() as T[keyof T], info.row.original) :
            info => String(info.getValue())
    }));
};
