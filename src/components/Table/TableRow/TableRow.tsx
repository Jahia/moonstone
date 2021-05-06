import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow: React.FC<TableRowProps> = ({
    className,
    isMultipleLines = false,
    isSelected = false,
    children,
    ...props
}) => (
    <tr
        className={
            clsx(
                'moonstone-tableRow',
                isMultipleLines && 'moonstone-tableRow-multipleLines',
                isSelected && 'moonstone-tableRow-selected',
                className
            )
        }
        {...props}
    >
        {children}
    </tr>
);

TableRow.displayName = 'TableRow';
