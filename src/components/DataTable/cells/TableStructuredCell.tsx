import clsx from 'clsx';
import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import {TableCell} from './TableCell';
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

        return (
            <TableCell
                ref={ref}
                className={className}
                aria-expanded={isExpanded}
                onClick={onToggleExpand}
                {...props}
            >
                <div
                    className={clsx(
                        'moonstone-tableStructuredCell_content',
                        'flexRow_nowrap',
                        'flexFluid',
                        'alignCenter',
                        {'moonstone-tableStructuredCell_expandable': isExpandable })
                    }
                    style={{marginLeft: indent}}
                >
                    {isExpandable && (
                        <>
                            {isExpanded
                                ? <ChevronDown/>
                                : <ChevronRight/>
                            }
                        </>
                    )}
                    {children}
                </div>
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
