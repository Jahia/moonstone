import React from 'react';

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'children'| 'className'> & {
    /**
     * Which html element to render the table as
     */
    component?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * The children elements to be provided to the Table (e.g., Table Rows, Headers, and Cells)
     */
    children?: React.ReactNode;
};
