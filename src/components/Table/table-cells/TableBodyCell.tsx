import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './tableCell.types';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';

export const TableBodyCell: React.FC<TableCellProps> = ({
    component = 'td',
    textAlign = 'left',
    verticalAlign = 'center',
    className,
    iconStart,
    iconEnd,
    children,
    ...props
}) => {

    // what's the correct naming convention for these cell scss classes?
    return (
        <Typography
            className={clsx(
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            variant="body"
            {...props}
        >

            <TableCell iconStart={iconStart} iconEnd={iconEnd}>
                {children}
            </TableCell>

        </Typography>
    );
};

TableBodyCell.displayName = 'TableBodyCell';
