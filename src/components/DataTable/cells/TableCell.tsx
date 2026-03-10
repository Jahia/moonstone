import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {capitalize, isTruncated} from '~/utils/helpers';
import './TableCell.scss';
import type {TableCellProps} from './TableCell.types';

const OVERFLOWING_CLASS = 'moonstone-tableCellContent_overflowing';
const scrollableContentSelector = '.moonstone-tableCellContent, .moonstone-cellText';

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
    const handleScrollableInteraction = (cell: HTMLTableCellElement, isEntering: boolean): void => {
        const scrollableElements = cell.querySelectorAll<HTMLElement>(scrollableContentSelector);

        scrollableElements.forEach(element => {
            if (isEntering) {
                if (isTruncated(element)) {
                    element.classList.add(OVERFLOWING_CLASS);
                }
            } else {
                element.classList.remove(OVERFLOWING_CLASS);
                element.scrollLeft = 0;
            }
        });
    };

    const handleMouseEnter: React.MouseEventHandler<HTMLTableCellElement> = event => {
        handleScrollableInteraction(event.currentTarget, true);
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLTableCellElement> = event => {
        handleScrollableInteraction(event.currentTarget, false);
        onMouseLeave?.(event);
    };

    const handleFocus: React.FocusEventHandler<HTMLTableCellElement> = event => {
        handleScrollableInteraction(event.currentTarget, true);
    };

    const handleBlur: React.FocusEventHandler<HTMLTableCellElement> = event => {
        handleScrollableInteraction(event.currentTarget, false);
        onBlur?.(event);
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
                className
            )}
            style={{
                width,
                ...style
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
        >
            {isScrollable ? (
                <span className="moonstone-tableCellContent flexFluid" tabIndex={0}>
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

