import React from 'react';

export type TableCellStartProps = Omit<React.ComponentPropsWithoutRef<'td'>, 'children' | 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of the cell HTML element to render in the DOM
     */
    component?: 'td' | 'th';

    /**
     * Children elements
     */
    children?: React.ReactNode;
};
