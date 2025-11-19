import React from 'react';
import clsx from 'clsx';

import './TableBody.scss';
import type {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({
    component = 'tbody',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx('moonstone-TableBody', className),
        ...props
    },
    children
);

TableBody.displayName = 'TableBody';
