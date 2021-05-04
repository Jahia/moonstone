import React from 'react';

import {TableHeadProps} from './TableHead.types';
import './TableHead.scss';

export const TableHead: React.FC<TableHeadProps> = ({children, className, ...props}) => (
    <thead className={className} {...props}>
        {children}
    </thead>
);

TableHead.displayName = 'TableHead';
