import React from 'react';
import clsx from 'clsx';

import type {TableProps} from './Table.types';
import styles from './Table.module.scss';
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
            ['moonstone-Table', styles['moonstone-Table']],
            ['flexCol_nowrap', layout.flexCol_nowrap],
            className
        ),
        ...props
    },
    children
);

Table.displayName = 'Table';
