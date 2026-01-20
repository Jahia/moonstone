import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';

export const TableHeadCell: React.FC<TableCellProps> = ({
    component = 'th',
    width,
    textAlign = 'left',
    verticalAlign = 'center',
    className,
    iconStart,
    iconEnd,
    children,
    ...props
}) => {
    return (
        <Typography
            {...props}
            className={clsx(
                {flexFluid: typeof width === 'undefined'},
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            weight="bold"
            variant="body"
            style={{...props.style, width: width}}
        >

            <TableCell iconStart={iconStart} iconEnd={iconEnd}>
                {children}
            </TableCell>

        </Typography>
    );
};

TableHeadCell.displayName = 'TableHeadCell';
