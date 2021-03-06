import React from 'react';

export type TableProps = {
    /**
     * Which html element to render the table as
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
