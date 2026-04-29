import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';
import {layout, reset} from '~/globals/css-utils.js';
import {TableProps} from '../DataTable.types.js';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(reset, styles.table, layout.flexCol_nowrap, className),
        ...props
    },
    children
);

Table.displayName = 'Table';
