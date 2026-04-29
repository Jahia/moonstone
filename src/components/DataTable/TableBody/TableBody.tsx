import React from 'react';
import clsx from 'clsx';

import styles from './TableBody.module.scss';
import type {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({
    component = 'tbody',
    className,
    children,
    ...props
}) => {
    if (!children) {
        return null;
    }

    return React.createElement(
        component,
        {
            className: clsx(styles.tableBody, className),
            ...props
        },
        children
    );
};

TableBody.displayName = 'TableBody';
