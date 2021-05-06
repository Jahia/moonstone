import React from 'react';

import {TableBodyProps} from './TableBody.types';

export const TableBody: React.FC<TableBodyProps> = ({children, ...props}) => (
    <tbody {...props}>
        {children}
    </tbody>
);

TableBody.displayName = 'TableBody';
