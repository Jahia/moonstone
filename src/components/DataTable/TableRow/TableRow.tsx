import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import './TableRow.scss';

const TableRowForwardRef: React.ForwardRefRenderFunction<HTMLElement, TableRowProps> = (
    {
        className,
        component = 'tr',
        isSelected = false,
        isHighlighted = false,
        children,
        ...props
    }, ref) => React.createElement(
    component,
    {
        className: clsx(
            'flexRow',
            'moonstone-TableRow',
            'alignCenter',
            isSelected && 'moonstone-TableRow-selected',
            isHighlighted && 'moonstone-TableRow-highlighted',
            className
        ),
        tabIndex: 0,
        'aria-selected': isSelected || undefined,
        ...props,
        ref
    },
    children
);

export const TableRow = React.forwardRef(TableRowForwardRef);

TableRow.displayName = 'TableRow';
