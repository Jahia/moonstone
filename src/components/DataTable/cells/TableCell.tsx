import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';
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
        onMouseLeave,
        onBlur,
        ...props
    },
    ref
) => {
    const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';

    const resetHorizontalScroll = (cell: HTMLTableCellElement): void => {
        const scrollableElements = cell.querySelectorAll<HTMLElement>(scrollableContentSelector);

        scrollableElements.forEach(element => {
            element.scrollLeft = 0;
        });
    };

    const resetScrollAndForwardEvent = <T extends React.SyntheticEvent<HTMLTableCellElement>>(
        event: T,
        callback?: (event: T) => void
    ): void => {
        resetHorizontalScroll(event.currentTarget);
        callback?.(event);
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLTableCellElement> = event => {
        resetScrollAndForwardEvent(event, onMouseLeave);
    };

    const handleBlur: React.FocusEventHandler<HTMLTableCellElement> = event => {
        // Reset on focus loss as well (keyboard navigation / pointer leave edge cases)
        resetScrollAndForwardEvent(event, onBlur);
    };

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
                scrollableClass,
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
            {children ?? '-'}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';

