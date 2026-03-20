import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import styles from './TableRow.module.scss';
import {layout} from '~/globals/css-utils.js';

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
                layout.flexRow_nowrap,
                styles['moonstone-tableRow'],
                layout.alignCenter,
                isHighlighted && styles['moonstone-tableRow_highlighted'],
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
