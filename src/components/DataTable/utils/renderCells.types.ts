import type { DataTableProps, RowContext } from '../DataTable.types';
import type { HeaderGroup, Row } from '@tanstack/react-table';
import type React from 'react';

export type CustomColumnMeta<T extends NonNullable<unknown>> = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    isScrollable?: boolean;
    cellProps?:
        | (React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>)
        | ((context: RowContext<T>) => React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>);
};

export type RenderHeadCellProps<T extends NonNullable<unknown>> = {
    headerGroup: HeaderGroup<T>;
    /** Number of sticky cells before the data columns, set when the table scrolls horizontally */
    stickyStartBase?: number;
    enableSorting: boolean;
    isStructured: boolean;
    onClickTableHeadCell?: DataTableProps<T>['onClickTableHeadCell'];
};

export type RenderCellProps<T extends NonNullable<unknown>> = {
    row: Row<T>;
    isStructured: boolean;
    /** Number of sticky cells before the data columns, set when the table scrolls horizontally */
    stickyStartBase?: number;
};
