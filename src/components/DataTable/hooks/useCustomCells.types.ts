import React from 'react';

import type { DataTableProps } from '../DataTable.types';

export type CustomCellPosition = 'before' | 'after';

export type CustomHeaderWidths = Record<CustomCellPosition, string[]>;

export type CustomStickyCells = Record<CustomCellPosition, boolean[]>;

export type UseCustomCellsProps<T extends NonNullable<unknown>> = {
    data: T[];
    primaryKey: string;
    renderRow?: DataTableProps<T>['renderRow'];
};

export type UseCustomCellsReturn = {
    customBeforeCount: number;
    customAfterCount: number;
    customHeaderWidths: CustomHeaderWidths;
    customStickyCells: CustomStickyCells;
    registerCustomCellCounts: (beforeCount: number, afterCount: number, stickyCells: CustomStickyCells) => void;
    withCustomCellObserver: (
        node: React.ReactNode,
        rowIndex: number,
        position: CustomCellPosition,
        index: number,
    ) => React.ReactNode;
};
