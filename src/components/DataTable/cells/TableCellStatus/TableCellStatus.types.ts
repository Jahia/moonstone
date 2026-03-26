import React from 'react';

export type TableCellStatusProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Main status color.
     */
    color: 'success' | 'warning' | 'danger' | 'dark' | 'neutral' | 'info';

    /**
     * Optional start icon displayed in the expanded status.
     */
    iconStart?: React.ReactNode;

    /**
     * Status description.
     */
    text: string;
};
