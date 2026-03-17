import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import {onAccessibleClick} from '~/hooks/useAccessibleClick';
import './TableCell.scss';
import type {TableCellProps} from './TableCell.types';

const scrollableContentSelector = '.moonstone-tableCellContent';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        align = 'left',
        verticalAlign = 'middle',
        width,
        isScrollable = false,
        style,
        component = 'td',
        onMouseLeave,
        onBlur,
        ...props
    },
    ref
) => {
    const resetScroll = (cell: HTMLTableCellElement): void => {
        cell.querySelectorAll<HTMLElement>(scrollableContentSelector).forEach(el => {
            el.scrollLeft = 0;
        });
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLTableCellElement> = event => {
        resetScroll(event.currentTarget);
        onMouseLeave?.(event);
    };

    const handleBlur: React.FocusEventHandler<HTMLTableCellElement> = event => {
        resetScroll(event.currentTarget);
        onBlur?.(event);
    };

    const accessibleProps = isScrollable ? onAccessibleClick({
        onClick: () => {},
        tabIndex: 0,
        role: 'region'
    }) : {};

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
                'verticalAlign' + capitalize(verticalAlign),
                {flexFluid: typeof width === 'undefined'},
                className
            )}
            style={{
                width,
                ...style
            }}
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
            {...props}
        >
            {isScrollable ? (
                <span className={clsx('moonstone-tableCellContent', 'flexFluid')} {...accessibleProps}>
                    {children ?? '-'}
                </span>
            ) : (
                children ?? '-'
            )}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
