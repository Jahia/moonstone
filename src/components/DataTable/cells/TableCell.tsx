import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import styles from './TableCell.module.scss';
import type {TableCellProps} from './TableCell.types';
import {alignment, layout} from '~/globals/css-utils.js';

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
                styles['moonstone-tableCell'],
                align === 'left' ? layout.justifyStart : align === 'right' ? layout.justifyEnd : layout.justifyCenter,
                layout.flexRow_nowrap,
                layout.alignCenter,
                alignment[`verticalAlign${capitalize(verticalAlign)}`],
                typeof width === 'undefined' && layout.flexFluid,
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
