import React from 'react';
import type {TableCellProps} from '../TableCell.types';

export type TableCellStatusProps = Omit<TableCellProps, 'color' | 'children'> & {
    /**
     * Main status color.
     */
    color: 'success' | 'warning' | 'danger' | 'dark' | 'default' | 'info';

    /**
     * Content of the status cell.
     */
    children: React.ReactNode;
};
