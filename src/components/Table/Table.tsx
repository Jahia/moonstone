import React from 'react';

import {TableProps} from './Table.types';

export const Table: React.FC<TableProps> = ({
    children,
    ...props
}) => (
    <table {...props}>
        {children}
    </table>
);

Table.displayName = 'Table';
