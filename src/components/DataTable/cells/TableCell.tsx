import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import './TableCell.scss';
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
                'moonstone-tableCell',
                align === 'left' ? 'justifyStart' : align === 'right' ? 'justifyEnd' : 'justifyCenter',
                'flexRow_nowrap',
                'alignCenter',
                {flexFluid: !width},
                {'moonstone-tableCell_scrollable': isScrollable},
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
