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
