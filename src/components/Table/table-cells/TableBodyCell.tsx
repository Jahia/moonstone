import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './tableCell.types';
import './TableBodyCell.scss';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';

export const TableBodyCell: React.FC<TableCellProps> = ({
    className,
    component = 'td',
    textAlign = 'left',
    verticalAlign = 'center',
    children,
    ...props
}) => {

    // what's the correct naming convention for these cell scss classes?
    return (
        <Typography
            className={clsx(
                'moonstone-tableBodyCell',
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            variant="body"
            {...props}
        >
            {children}
        </Typography>
    );
};

TableBodyCell.displayName = 'TableBodyCell';
