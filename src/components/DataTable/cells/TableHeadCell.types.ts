import React from 'react';
import type {TableCellProps} from './TableCell.types';

export type TableHeadCellProps = Omit<TableCellProps, 'isScrollable' | 'component'> & {
    /**
     * Callback when header cell is clicked (for sorting)
     */
    onClick?: React.MouseEventHandler<HTMLTableCellElement>;

    /**
     * Sorting configuration for the column header.
     * - When provided: Column is sortable, displays sort icon based on `direction`
     * - When omitted: Column is not sortable, no sort icon displayed
     */
    sorting?: {
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

    /**
     * Enable column resize handle (vertical border on hover)
     */
    enableResize?: boolean;

    /**
     * Resize handler for mousedown/touchstart
     */
    resizeHandler?: (e: React.MouseEvent | React.TouchEvent) => void;

    /**
     * Reset column size on double-click
     */
    onResizeReset?: () => void;

    /**
     * Whether this column is currently being resized
     */
    isResizing?: boolean;

    /**
     * Ref callback to register the header element (for resize callbacks)
     */
    resizeHeaderRef?: (el: HTMLTableCellElement | null) => void;

    /**
     * Accessible label for the resize handle (e.g. "Redimensionner la colonne Nom")
     */
    resizeHandleLabel?: string;
};

