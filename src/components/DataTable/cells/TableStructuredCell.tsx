import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import type {TableStructuredCellProps} from './TableStructuredCell.types';
import {TableCell} from './TableCell';
import './TableCell.scss';

// Spacing constants for tree structure alignment
const indentSpace = 20; // Px - indentation per depth level
const ChevronSpace = 20; // Px - compensates for chevron icon width on non-expandable rows

export const TableStructuredCell = React.forwardRef<HTMLTableCellElement, TableStructuredCellProps>(
    (
        {
            className,
            children,
            depth,
            isExpandable,
            isExpanded,
            onToggleExpand,
            style,
            ...props
        },
        ref
    ) => {
        // Render nothing when no children are provided to avoid empty HTML markup
        if (!children) {
            return null;
        }

        const leftMarginIndentDepth = depth * indentSpace;

        const renderContent = () => {
            if (isExpandable) {
                return (
                    <span
                        className="moonstone-tableCellExpandable flexRow_nowrap alignCenter"
                        style={{marginLeft: `${leftMarginIndentDepth}px`}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? (
                            <ChevronDown className="moonstone-marginRightNano"/>
                        ) : (
                            <ChevronRight className="moonstone-marginRightNano"/>
                        )}
                        {children}
                    </span>
                );
            }

            return (
                <span style={{marginLeft: `${leftMarginIndentDepth + ChevronSpace}px`}}>
                    {children}
                </span>
            );
        };

        return (
            <TableCell
                ref={ref}
                className={className}
                style={style}
                {...props}
            >
                {renderContent()}
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';

