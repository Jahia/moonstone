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
        isResizing,
        resizeHandler,
        resizeHandleAttr,
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
                align === 'left' ? 'justifyStart' : align === 'right' ? 'justifyEnd' : 'justifyCenter',
                'flexRow_nowrap',
                'alignCenter',
                'verticalAlign' + capitalize(verticalAlign),
                {flexFluid: typeof width === 'undefined'},
                {'moonstone-tableCell--resizable': Boolean(resizeHandler)},
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
            {resizeHandler && (
                <div
                    className={clsx(
                        'moonstone-tableCell_resizeHandle',
                        isResizing && 'moonstone-tableCell_resizeHandle--active'
                    )}
                    onMouseDown={resizeHandler}
                    onTouchStart={resizeHandler}
                    onClick={e => e.stopPropagation()}
                    {...resizeHandleAttr}
                />
            )}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';

