import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import styles from './TableCell.module.scss';
import type {TableCellProps} from './TableCell.types';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children = '-',
        align = 'left',
        width,
        isScrollable = false,
        style,
        component = 'td',
        ...props
    },
    ref
) => {
    return (
        <Typography
            ref={ref}
            isNowrap
            component={component}
            variant="body"
            className={clsx(
                styles.tableCell,
                align === 'left' ? 'justifyStart' : align === 'right' ? 'justifyEnd' : 'justifyCenter',
                'flexRow_nowrap',
                'alignCenter',
                {flexFluid: !width},
                { [styles.scrollable]: isScrollable },
                className
            )}
            style={{
                width: width,
                ...style
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
