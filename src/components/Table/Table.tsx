import React from 'react';
import clsx from 'clsx';

import {TableProps} from './Table.types';

export const Table: React.FC<TableProps> = ({
    children,
    ...props
}) => (
    <table
        className={clsx('moonstone-table')}
        {...props}
    >
        {children}
    </table>
);

Table.displayName = 'Table';
