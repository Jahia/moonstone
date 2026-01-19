import React from 'react';
import type {TableCellProps} from './TableCell.types';

type BaseTableHeadCellProps = Omit<TableCellProps, 'isScrollable' | 'component'> & {
    /**
     * Callback when header cell is clicked (for sorting)
     */
    onClick?: React.MouseEventHandler<HTMLTableCellElement>;
};

/**
 * Configuration for sortable column headers.
 * When provided, the column is sortable. When omitted, the column is not sortable.
 */
export type SortingConfig = {
    /**
     * The current sort direction to display.
     * - `'ascending'`: Shows an up arrow (A→Z / 1→9)
     * - `'descending'`: Shows a down arrow (Z→A / 9→1)
     */
    direction: 'ascending' | 'descending';

    /**
     * When `true`, highlights the sort arrow to indicate this column is the currently active sort.
     * @default false
     */
    isActive?: boolean;
};

export type TableHeadCellProps = BaseTableHeadCellProps & {
    /**
     * Sorting configuration for the column header.
     * - When provided: Column is sortable, displays sort icon based on `direction`
     * - When omitted: Column is not sortable, no sort icon displayed
     */
    sorting?: SortingConfig;
};
