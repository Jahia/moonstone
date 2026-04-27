import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';
import type {TableProps} from '../DataTable.types';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(styles.table, 'flexCol_nowrap', className),
        ...props
    },
    children
);

Table.displayName = 'Table';
