import React from 'react';
import clsx from 'clsx';

import type {TableHeadProps} from './TableHead.types';
import styles from './TableHead.module.scss';

export const TableHead: React.FC<TableHeadProps> = ({
    isSticky = false,
    component = 'thead',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(
            ['moonstone-tableHead', styles['moonstone-tableHead']],
            isSticky && ['moonstone-tableHead-sticky', styles['moonstone-tableHead-sticky']],
            className
        ),
        ...props
    },
    children
);

TableHead.displayName = 'TableHead';
