import React from 'react';

import {TableHeadProps} from './TableHead.types';
import './TableHead.scss';
import clsx from 'clsx';

export const TableHead: React.FC<TableHeadProps> = ({children, className, ...props}) => (
    <thead
        className={clsx('moonstone-tableHead', className)}
        {...props}
    >
        {children}
    </thead>
);

TableHead.displayName = 'TableHead';
