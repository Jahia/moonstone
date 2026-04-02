import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import styles from './TableRow.module.scss';

const TableRowForwardRef: React.ForwardRefRenderFunction<HTMLElement, TableRowProps> = (
    {
        className,
        component = 'tr',
        type = 'body',
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
                styles.tableRow,
                'alignCenter',
                isHighlighted && type === 'body' && styles.highlighted,
                type === 'head' && styles.head,
                className
            ),
            'aria-selected': isHighlighted && type === 'body' ? true : undefined,
            tabIndex: 0,
            ...props,
            ref
        },
        children
    );
};

export const TableRow = React.forwardRef(TableRowForwardRef);

TableRow.displayName = 'TableRow';
