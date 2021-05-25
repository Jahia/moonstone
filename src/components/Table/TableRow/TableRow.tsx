import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow: React.FC<TableRowProps> = ({
    className,
    hasMultipleLines = false,
    isSelected = false,
    isHighlighted = false,
    children,
    ...props
}) => (
    <tr
        className={
            clsx(
                'moonstone-tableRow',
                hasMultipleLines && 'moonstone-tableRow-multipleLines',
                isSelected && 'moonstone-tableRow-selected',
                isHighlighted && 'moonstone-tableRow-highlighted',
                className
            )
        }
        {...props}
    >
        {children}
    </tr>
);

TableRow.displayName = 'TableRow';
