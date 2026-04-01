import clsx from 'clsx';
import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import {TableCell} from './TableCell';
import {Typography} from '~/components';
import './TableStructuredCell.scss';
import type {TableStructuredCellProps} from './TableStructuredCell.types';

// Spacing constants for tree structure alignment
const indentSpace = 20; // Px - indentation per depth level

export const TableStructuredCell = React.forwardRef<HTMLTableCellElement, TableStructuredCellProps>(
    (
        {
            className,
            children,
            depth,
            isExpandable,
            isExpanded,
            isScrollable,
            onToggleExpand,
            ...props
        },
        ref
    ) => {
        // Render nothing when no children are provided to avoid empty HTML markup
        if (!children) {
            return null;
        }

        const indent = depth * indentSpace;
        const handleToggleExpand: React.MouseEventHandler = event => {
            event.stopPropagation();
            onToggleExpand?.();
        };

        return (
            <TableCell
                ref={ref}
                className={clsx('moonstone-tableStructuredCell', className)}
                aria-expanded={isExpanded}
                onClick={handleToggleExpand}
                {...props}
            >
                <div
                    className={clsx(
                        'flexRow_nowrap',
                        'flexFluid',
                        'alignCenter',
                        {'moonstone-tableStructuredCell_expandable': isExpandable},
                        {'moonstone-tableStructuredCell_scrollable': isScrollable && !isExpandable}
                    )}
                    style={{marginLeft: indent}}
                >
                    {isExpandable ? (
                        <>
                            {isExpanded ?
                                <ChevronDown className="moonstone-tableStructuredCell_chevron"/> :
                                <ChevronRight className="moonstone-tableStructuredCell_chevron"/>}
                            <Typography
                                isNowrap
                                component="div"
                                className={clsx(
                                    'flexRow_nowrap',
                                    'alignCenter',
                                    {'moonstone-tableStructuredCell_scrollable': isScrollable}
                                )}
                            >
                                {children}
                            </Typography>
                        </>
                    ) :
                    children}
                </div>
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
