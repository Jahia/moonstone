import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';
import {alignment, layout} from '~/globals/css-utils.js';

export const TableHeadCell: React.FC<TableCellProps> = ({
    component = 'th',
    width,
    textAlign = 'left',
    verticalAlign = 'middle',
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
                typeof width === 'undefined' && ['flexFluid', layout.flexFluid],
                [`textAlign${capitalize(textAlign)}`, alignment[`textAlign${capitalize(textAlign)}`]],
                [`verticalAlign${capitalize(verticalAlign)}`, alignment[`verticalAlign${capitalize(verticalAlign)}`]],
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
