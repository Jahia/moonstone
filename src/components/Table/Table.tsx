import React from 'react';
import clsx from 'clsx';

import { TableProps } from './Table.types';
import './Table.scss';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-Table', className),
        ...props
    },
    children
);

Table.displayName = 'Table';
