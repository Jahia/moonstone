import React from 'react';

import type {TableHeadProps} from './TableHead.types';
import './TableHead.scss';
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
            className: clsx('moonstone-tableHead', isSticky && 'moonstone-tableHead_sticky', className),
            ...props
        },
        children
    );
};

TableHead.displayName = 'TableHead';

