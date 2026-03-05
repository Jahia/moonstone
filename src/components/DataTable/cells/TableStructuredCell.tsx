import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import {TableCell} from './TableCell';
import './TableStructuredCell.scss';
import './TableCell.scss';
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
                {...props}
            >
                {isExpandable ? (
                    <span
                        aria-expanded={isExpanded}
                        className="moonstone-tableStructuredCell_expandable flexRow_nowrap alignCenter"
                        style={{marginLeft: indent}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? <ChevronDown className="moonstone-tableStructuredCell_chevron"/> : <ChevronRight className="moonstone-tableStructuredCell_chevron"/>}
                        {children}
                    </span>
                ) : (
                    // Non-expandable rows: indent to align text with expandable rows
                    <span className="moonstone-tableStructuredCell_nonExpandable flexRow_nowrap alignCenter" style={{marginLeft: indent}}>
                        {children}
                    </span>
                )}
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
