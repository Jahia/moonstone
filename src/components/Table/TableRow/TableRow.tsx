import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow: React.FC<TableRowProps> = ({
    className,
    height = 'regular',
    isSelected = false,
    children,
    ...props
}) => (
    <tr
        className={
            clsx(
                'moonstone-table_row',
                height === 'relaxed' ? 'moonstone-table_row-relaxed' : 'moonstone-table_row-regular',
                isSelected && 'moonstone-table_row-selected',
                className
            )
        }
        {...props}
    >
        {children}
    </tr>
);

TableRow.displayName = 'TableRow';
