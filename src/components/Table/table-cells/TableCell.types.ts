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
     * Children elements
     */
    children?: React.ReactNode;
};
