import React from 'react';
import type {DataTableProps} from '../DataTable.types';

export type DataTableCustomCellPosition = 'before' | 'after';

export type DataTableCustomHeaderWidths = Record<DataTableCustomCellPosition, string[]>;

export type UseDataTableCustomCellsProps<T extends NonNullable<unknown>> = {
    data: T[];
    primaryKey: string;
    renderRow?: DataTableProps<T>['renderRow'];
};

export type UseDataTableCustomCellsReturn = {
    customBeforeCount: number;
    customAfterCount: number;
    customHeaderWidths: DataTableCustomHeaderWidths;
    registerCustomCellCounts: (beforeCount: number, afterCount: number) => void;
    withCustomCellObserver: (
        node: React.ReactNode,
        rowIndex: number,
        position: DataTableCustomCellPosition,
        index: number
    ) => React.ReactNode;
};