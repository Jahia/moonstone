import React from 'react';

import {TableHeadProps} from './TableHead.types';
import './TableHead.scss';
import clsx from 'clsx';

export const TableHead: React.FC<TableHeadProps> = ({
    sticky = false,
    className,
    children,
    ...props
}) => (
    <thead
        className={clsx(
            'moonstone-tableHead',
            sticky && 'moonstone-tableHead-sticky',
            className
        )}
        {...props}
    >
        {children}
    </thead>
);

TableHead.displayName = 'TableHead';
