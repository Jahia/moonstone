import type React from 'react';
import type {HeaderGroup, Row} from '@tanstack/react-table';
import type {DataTableProps} from '../DataTable.types';

export type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    isScrollable?: boolean;
    cellProps?: React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>;
};

export type RenderDataTableHeaderCellsProps<T extends NonNullable<unknown>> = {
    headerGroup: HeaderGroup<T>;
    enableSorting: boolean;
    isStructured: boolean;
    onClickTableHeadCell?: DataTableProps<T>['onClickTableHeadCell'];
};

export type RenderDataTableBodyCellsProps<T extends NonNullable<unknown>> = {
    row: Row<T>;
    isStructured: boolean;
};
