import React from 'react';
import type {TableCellProps} from '../TableCell/TableCell.types';

/**
 * Props for TableCellActions - a cell dedicated to row actions.
 * Aligned to the right, supports both always-visible and hover-only actions.
 */
export type TableCellActionsProps = Omit<TableCellProps, 'color' | 'children'> & {
    /**
     * Actions always visible in the cell.
     */
    actions?: React.ReactNode;

    /**
     * Actions visible only on row hover or focus.
     */
    actionsOnHover?: React.ReactNode;
};
