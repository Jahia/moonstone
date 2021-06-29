import React from 'react';
import clsx from 'clsx';

import {TableProps} from './Table.types';
import './Table.scss';

export const Table: React.FC<TableProps> = ({
    className,
    children,
    ...props
}) => (
    <table className={clsx('moonstone-Table', className)} {...props}>
        {children}
    </table>
);

Table.displayName = 'Table';
