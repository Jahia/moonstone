import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';

export const TableHeadCell: React.FC<TableCellProps> = ({
    component = 'th',
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
                'moonstone-TableCell-border',
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            weight="bold"
            variant="body"
            {...props}
        >

            <TableCell iconStart={iconStart} iconEnd={iconEnd}>
                {children}
            </TableCell>

        </Typography>
    );
};

TableHeadCell.displayName = 'TableHeadCell';
