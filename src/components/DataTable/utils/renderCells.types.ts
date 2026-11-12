import type { DataTableProps, RowContext } from '../DataTable.types';
import type { HeaderGroup, Row } from '@tanstack/react-table';
import type React from 'react';

export type CustomColumnMeta<T extends NonNullable<unknown>> = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    minWidth?: string;
    isScrollable?: boolean;
    cellProps?:
        | (React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>)
        | ((context: RowContext<T>) => React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>);
};

/** Horizontal layout of the data columns, set when the table scrolls horizontally */
export type ColumnLayout = {
    /** Number of sticky cells before the data columns (custom `before` cells and the selection) */
    stickyStartBase: number;
    /** Number of sticky cells on the left edge, data columns included */
    stickyStartCount: number;
};

export type RenderHeadCellProps<T extends NonNullable<unknown>> = {
    headerGroup: HeaderGroup<T>;
    columnLayout?: ColumnLayout;
    enableSorting: boolean;
    isStructured: boolean;
    onClickTableHeadCell?: DataTableProps<T>['onClickTableHeadCell'];
};

export type RenderCellProps<T extends NonNullable<unknown>> = {
    row: Row<T>;
    isStructured: boolean;
    columnLayout?: ColumnLayout;
};
