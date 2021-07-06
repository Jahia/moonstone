import React from 'react';

import {TableHeadProps} from './TableHead.types';
import './TableHead.scss';
import clsx from 'clsx';

export const TableHead: React.FC<TableHeadProps> = ({
    isSticky = false,
    component = 'thead',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-tableHead', isSticky && 'moonstone-tableHead-sticky', className),
        ...props
    },
    children
);

TableHead.displayName = 'TableHead';
