import React from 'react';

export type TableCellStatusProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> & {
    /**
     * Main status color.
     */
    color: 'success' | 'warning' | 'danger' | 'dark' | 'default' | 'info';

    /**
     * Content of the status cell.
     */
    children: React.ReactNode;
};
