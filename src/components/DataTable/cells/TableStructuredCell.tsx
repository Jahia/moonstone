import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import type {TableStructuredCellProps} from './TableStructuredCell.types';
import {TableCell} from './TableCell';
import './TableCell.scss';

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
            style,
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
                style={{paddingLeft: 0, ...style}}
                {...props}
            >
                {isExpandable ? (
                    <span
                        className="moonstone-tableCellExpandable flexRow_nowrap alignCenter"
                        style={{marginLeft: indent}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? <ChevronDown style={{marginRight: 0}}/> : <ChevronRight style={{marginRight: 0}}/>}
                        {children}
                    </span>
                ) : (
                    // Non-expandable rows: indent + placeholder to align text with expandable rows (chevron space)
                    <span className="flexRow_nowrap alignCenter" style={{marginLeft: indent}}>
                        <span aria-hidden style={{width: 'var(--spacing-medium)', flexShrink: 0}}/>
                        {children}
                    </span>
                )}
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';

