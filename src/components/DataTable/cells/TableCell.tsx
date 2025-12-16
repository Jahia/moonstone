import React from 'react';
import clsx from 'clsx';
import { IconTextIcon, Typography } from '~/components';
import { ChevronDown, ChevronRight } from '~/icons';

import type { TableCellProps } from './TableCell.types';
import { capitalize } from '~/utils/helpers';
import './TableCell.scss';

/**
 * Enhanced TableCell component that handles structured view, icons, and typography.
 * Merges functionality from the TableBodyCell.
 */
const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        textAlign = 'left',
        verticalAlign = 'center',
        iconStart,
        iconEnd,
        isExpandableColumn,
        row,
        width,
        isScrollable,
        component = 'td',
        ...props
    },
    ref
) => {
    const leftMarginBuffer = 20; // Px
    const leftMarginIndentDepth = (row?.depth ?? 0) * 20; // Px
    const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';

    const renderCellContent = () => (
        <IconTextIcon component="div" iconStart={iconStart} iconEnd={iconEnd} typographyProps={{ className: clsx(scrollableClass, 'flexFluid') }}>
            {children ?? '-'}
        </IconTextIcon>
    );

    const renderInnerContent = () => {
        // Option 1: Expandable column AND row can expand -> Show chevron + content
        if (isExpandableColumn && row?.getCanExpand?.()) {
            return (
                <div
                    style={{ marginLeft: `${leftMarginIndentDepth}px`, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    onClick={row.getToggleExpandedHandler()}
                >
                    {row.getIsExpanded() ?
                        <ChevronDown className="moonstone-marginRightNano" /> :
                        <ChevronRight className="moonstone-marginRightNano" />}
                    {renderCellContent()}
                </div>
            );
        }

        // Option 2: Expandable column but row CANNOT expand -> Show indent + content
        if (isExpandableColumn && !row?.getCanExpand?.()) {
            return (
                <div style={{ marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px` }}>
                    {renderCellContent()}
                </div>
            );
        }

        // Option 3: Normal cell -> Just content
        return renderCellContent();
    };

    return (
        <Typography
            ref={ref}
            component={component}
            variant="body"
            className={clsx(
                'moonstone-TableCell',
                'moonstone-tableBodyCell',
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                { flexFluid: typeof width === 'undefined' },
                className
            )}
            style={{ width }}
            {...props}
        >
            {renderInnerContent()}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
