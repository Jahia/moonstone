import React from 'react';
import clsx from 'clsx';

import type {TableBodyProps} from './TableBody.types';
import styles from './TableBody.module.scss';

export const TableBody: React.FC<TableBodyProps> = ({
    component = 'tbody',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-TableBody', styles['moonstone-TableBody'], className),
        ...props
    },
    children
);

TableBody.displayName = 'TableBody';
