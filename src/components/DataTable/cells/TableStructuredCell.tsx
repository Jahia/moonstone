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
                        className="moonstone-tableCellExpandable flexRow_nowrap alignCenter"
                        style={{marginLeft: indent}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? <ChevronDown className="moonstone-tableCellChevron"/> : <ChevronRight className="moonstone-tableCellChevron"/>}
                        {children}
                    </span>
                ) : (
                    // Non-expandable rows: indent + placeholder to align text with expandable rows (chevron space)
                    <span className="flexRow_nowrap alignCenter" style={{marginLeft: indent}}>
                        <span aria-hidden className="moonstone-tableCellSpacer"/>
                        {children}
                    </span>
                )}
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
