import React from 'react';

export type TableCellStatusProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
    /**
     * Status background and accent color.
     */
    color: 'success' | 'warning' | 'danger' | 'dark' | 'neutral' | 'info';

    /**
     * Optional start icon displayed in the expanded status.
     */
    iconStart?: React.ReactNode;

    /**
     * Visible status label.
     */
    text: string;
};
