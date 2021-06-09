import React from 'react';

// Shared types used by both TableHeadCell and TableBodyCell
export type TableCellProps = {
    /**
     * Any additional class names to apply to the component
     */
    className?: string;

    /**
     * Name of the cell HTML element to render in the DOM
     */
    component?: 'td' | 'th';

    /**
     * Icon to render at the start/left side of the cell
     */
    iconStart?: React.ReactElement;

    /**
     * Icon to render at the end/right side of the cell
     */
    iconEnd?: React.ReactElement;

    /**
     * How to align content horizontally within the table cell
     */
    textAlign?: 'left' | 'center' | 'right';

    /**
     * How to align content vertically within the table cell
     */
    verticalAlign?: 'top' | 'middle' | 'bottom';

    /**
     * Whether this cell is in the first column of the table
     */
    isFirstColumn?: boolean;

    /**
     * Whether this cell is in the first column of the table
     */
    canExpand?: boolean;

    /**
     * Whether the cell is currently expanded
     */
    isExpanded?: boolean;

    /**
     * Depth of the nesting of the current row
     */
    depth?: number;

    /**
     * react-table utility that gets the expansion props when invoked
     */
    getToggleRowExpandedProps?: ({}) => any;

    /**
     * Any styles to render inline
     */
    style?: React.CSSProperties;

    /**
     * Children elements
     */
    children?: React.ReactNode;
};
