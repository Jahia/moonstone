import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';

import type {TableCellProps} from './TableCell.types';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        textAlign = 'left',
        verticalAlign = 'center',
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
            component={component}
            variant="body"
            className={clsx(
                'moonstone-TableCell',
                'textAlign' + capitalize(textAlign),
                'flexRow',
                'alignCenter',
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                {flexFluid: typeof width === 'undefined'},
                scrollableClass,
                className
            )}
            style={{width, ...style}}
            {...props}
        >
            {children ?? '-'}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
