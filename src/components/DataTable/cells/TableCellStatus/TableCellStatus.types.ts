import React from 'react';

export type TableCellStatusProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> & {
    /**
     * Main status color.
     */
    color: 'success' | 'warning' | 'danger' | 'dark' | 'default' | 'info';

    /**
     * Optional start icon displayed in the expanded status.
     */
    iconStart?: React.ReactNode;

    /**
     * Status description.
     */
    text: string;
};
