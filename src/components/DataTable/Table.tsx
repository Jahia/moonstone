import React from 'react';
import clsx from 'clsx';
import './Table.scss';
import {TableProps} from './Table.types';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-Table', 'flexCol_nowrap', className),
        ...props
    },
    children
);

Table.displayName = 'Table';
