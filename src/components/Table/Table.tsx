import React from 'react';
import clsx from 'clsx';

import type {TableProps} from './Table.types';
import './Table.scss';

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
