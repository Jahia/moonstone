import React from 'react';
import clsx from 'clsx';
import './Table.scss';
import type {TableProps} from './DataTable.types';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-table', 'flexCol_nowrap', className),
        ...props
    },
    children
);

Table.displayName = 'Table';
