import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import styles from './TableCell.module.scss';
import type {TableCellProps} from './TableCell.types';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        align = 'left',
        verticalAlign = 'middle',
        width,
        isScrollable,
        style,
        component = 'td',
        ...props
    },
    ref
) => {
    const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';

    return (
        <Typography
            ref={ref}
            isNowrap
            component={component}
            variant="body"
            className={clsx(
                'moonstone-tableCell',
                styles.tableCell,
                align === 'left' ? 'justifyStart' : align === 'right' ? 'justifyEnd' : 'justifyCenter',
                'flexRow_nowrap',
                'alignCenter',
                'verticalAlign' + capitalize(verticalAlign),
                {flexFluid: typeof width === 'undefined'},
                scrollableClass,
                className
            )}
            style={{
                width,
                ...style
            }}
            {...props}
        >
            {children ?? '-'}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
