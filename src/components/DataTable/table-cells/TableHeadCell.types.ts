import React from 'react';
import type {TableCellProps} from '../cells/TableCell.types';

export type TableHeadCellProps = TableCellProps & {
    /**
     * Whether to render the sort indicator ascending/up arrow or descending/down arrow
     */
    sortDirection?: 'ascending' | 'descending';

    /**
     * Define if the column is currently sorted
     */
    isSorted?: boolean;

    /**
     * Callback when header cell is clicked (for sorting)
     */
    onClick?: React.MouseEventHandler<HTMLTableCellElement>;
};
