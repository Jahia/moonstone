import React from 'react';
import clsx from 'clsx';

import {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({
    className,
    children,
    ...props
}) => (
    <tbody
        // 'moonstone-tableBody' class is used to target only rows within the table body
        // to apply the hover effect
        className={clsx('moonstone-tableBody', className)}
        {...props}
    >
        {children}
    </tbody>
);

TableBody.displayName = 'TableBody';
