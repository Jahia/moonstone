import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';
import type {TableProps} from './DataTable.types';
import {layout} from '~/globals/css-utils.js';

export const Table: React.FC<TableProps> = ({
    component = 'table',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(
            styles['moonstone-table'],
            layout.flexCol_nowrap,
            className
        ),
        ...props
    },
    children
);

Table.displayName = 'Table';
