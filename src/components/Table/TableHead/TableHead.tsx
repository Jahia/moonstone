import React from 'react';

import {TableHeadProps} from './TableHead.types';
import './TableHead.scss';
import clsx from 'clsx';

export const TableHead: React.FC<TableHeadProps> = ({
    sticky = false,
    component = 'thead',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-tableHead', sticky && 'moonstone-tableHead-sticky', className),
        ...props
    },
    children
);

TableHead.displayName = 'TableHead';
