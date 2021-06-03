import React from 'react';
import clsx from 'clsx';

import {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({
    className,
    children,
    ...props
}) => (
    <tbody
        // 'moonstone-TableBody' class is used to target only rows within the table body
        // to apply the hover effect
        className={clsx('moonstone-TableBody', className)}
        {...props}
    >
        {children}
    </tbody>
);

TableBody.displayName = 'TableBody';
