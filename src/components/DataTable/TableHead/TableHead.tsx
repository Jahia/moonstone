import React from 'react';

import type {TableHeadProps} from './TableHead.types';
import clsx from 'clsx';
import {tableHeadStyles as styles} from '../styles';

export const TableHead: React.FC<TableHeadProps> = ({
    isSticky = true,
    component = 'thead',
    className,
    children,
    ...props
}) => {
    if (!children) {
        return null;
    }

    return React.createElement(
        component,
        {
            className: clsx(styles.tableHead, isSticky && styles.sticky, className),
            ...props
        },
        children
    );
};

TableHead.displayName = 'TableHead';
