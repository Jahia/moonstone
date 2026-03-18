import React from 'react';
import clsx from 'clsx';
import './TableCellStart.scss';
import type {TableCellStartProps} from './TableCellStart.types';

export const TableCellStart = React.forwardRef<HTMLTableCellElement, TableCellStartProps>(
    (
        {
            className,
            component = 'td',
            children,
            ...props
        },
        ref
    ) => React.createElement(
        component,
        {
            className: clsx('moonstone-tableCellStart', className),
            ref,
            ...props
        },
        children
    )
);

TableCellStart.displayName = 'TableCellStart';
