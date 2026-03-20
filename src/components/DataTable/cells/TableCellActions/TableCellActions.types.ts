import React from 'react';

/**
 * Props for TableCellActions - a cell dedicated to row actions.
 * Aligned to the right, supports both always-visible and hover-only actions.
 */
export type TableCellActionsProps = {
    /**
     * Actions always visible in the cell.
     */
    actions?: React.ReactNode;

    /**
     * Actions visible only on row hover or focus.
     */
    actionsOnHover?: React.ReactNode;

    className?: string;
};
