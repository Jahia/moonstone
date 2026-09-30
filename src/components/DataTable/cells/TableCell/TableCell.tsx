import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { TableCellProps } from './TableCell.types';

import styles from './TableCell.module.scss';

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
    ref,
) => {
    return (
        <Typography
            isNowrap
            className={clsx(
                styles.tableCell,
                align === 'left' ? layout.justifyStart : align === 'right' ? layout.justifyEnd : layout.justifyCenter,
                layout.flexRow_nowrap,
                layout.alignCenter,
                width ? undefined : layout.flexFluid,
                isScrollable && styles.scrollable,
                className,
            )}
            component={component}
            ref={ref}
            style={{
                width: width,
                ...style,
            }}
            variant="body"
            {...props}
        >
            {children}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
