import clsx from 'clsx';
import React from 'react';

import { SortIndicator } from '../SortIndicator';
import { TableCell } from './TableCell';
import { Typography } from '~/components';
import { alignment, layout } from '~/globals/css-utils.js';
import { capitalize } from '~/utils/helpers';

import type { SortIndicatorProps } from '../SortIndicator/SortIndicator.types';
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
    // The legacy API keeps the sort state on an aria-hidden SortIndicator, so the header exposes it as aria-sort
    const sortIndicator = [iconStart, iconEnd, ...React.Children.toArray(children)]
        .find((node): node is React.ReactElement<SortIndicatorProps> => React.isValidElement(node) && node.type === SortIndicator);
    const ariaSort = sortIndicator?.props.isSorted ? (sortIndicator.props.direction ?? 'descending') : undefined;

    return (
        <Typography
            aria-sort={ariaSort}
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
