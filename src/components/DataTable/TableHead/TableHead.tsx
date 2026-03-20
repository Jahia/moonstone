import React from 'react';

import type {TableHeadProps} from './TableHead.types';
import styles from './TableHead.module.scss';
import clsx from 'clsx';

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
            className: clsx(
                styles['moonstone-tableHead'],
                isSticky && styles['moonstone-tableHead_sticky'],
                className
            ),
            ...props
        },
        children
    );
};

TableHead.displayName = 'TableHead';
