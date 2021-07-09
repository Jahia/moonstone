import React from 'react';
import clsx from 'clsx';

import {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({
    component = 'tbody',
    className,
    children,
    ...props
}) => React.createElement(
    component,
    {
        // 'moonstone-TableBody' class is used to target only rows within the table body
        // to apply the hover effect
        className: clsx('moonstone-TableBody', className),
        ...props
    },
    children
);

TableBody.displayName = 'TableBody';
