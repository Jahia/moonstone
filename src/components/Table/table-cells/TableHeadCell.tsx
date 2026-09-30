import clsx from 'clsx';
import React from 'react';

import { TableCell } from './TableCell';
import { Typography } from '~/components';
import { alignment, layout } from '~/globals/css-utils.js';
import { capitalize } from '~/utils/helpers';

import type { TableCellProps } from './TableCell.types';

import styles from './TableCell.module.scss';

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
                styles.tableHeadCell,
                [`textAlign${capitalize(textAlign)}`, alignment[`textAlign${capitalize(textAlign)}`]],
                [`verticalAlign${capitalize(verticalAlign)}`, alignment[`verticalAlign${capitalize(verticalAlign)}`]],
                className,
            )}
            component={component}
            style={{
                ...props.style,
                width: width,
            }}
            variant="body"
            weight="bold"
        >

            <TableCell iconEnd={iconEnd} iconStart={iconStart}>
                {children}
            </TableCell>

        </Typography>
    );
};

TableHeadCell.displayName = 'TableHeadCell';
