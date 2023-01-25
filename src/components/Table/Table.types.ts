import React from 'react';

export type TableProps = {
    /**
     * The HTML tag used to render the root node
     */
    component?: string;

    /**
     * Any additional class names to apply to the Table
     */
    className?: string;

    /**
     * The children elements to be provided to the Table (e.g., Table Rows, Headers, and Cells)
     */
    children?: React.ReactNode;
};
