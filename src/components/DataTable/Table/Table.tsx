import React from 'react';
import clsx from 'clsx';
import type {TableProps} from '../DataTable.types.js';
import {layout} from '~/globals/css-utils.js';
import styles from './Table.module.scss';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(styles.table, layout.flexCol_nowrap, className),
        ...props
    },
    children
);

Table.displayName = 'Table';
