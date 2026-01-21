import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import './TableRow.scss';

const TableRowForwardRef: React.ForwardRefRenderFunction<HTMLElement, TableRowProps> = (
    {
        className,
        component = 'tr',
        isHighlighted = false,
        children,
        ...props
    }, ref) => {
    if (!children) {
        return null;
    }

    return React.createElement(
        component,
        {
            className: clsx(
                'flexRow',
                'moonstone-tableRow',
                'alignCenter',
                isHighlighted && 'moonstone-tableRow_highlighted',
                className
            ),
            tabIndex: 0,
            ...props,
            ref
        },
        children
    );
};

export const TableRow = React.forwardRef(TableRowForwardRef);

TableRow.displayName = 'TableRow';

