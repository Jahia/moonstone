import clsx from 'clsx';
import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import {TableCell} from './TableCell';
import styles from './TableStructuredCell.module.scss';
import type {TableStructuredCellProps} from './TableStructuredCell.types';
import {layout} from '~/globals/css-utils.js';

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
                        styles['moonstone-tableStructuredCell_content'],
                        layout.flexRow_nowrap,
                        layout.flexFluid,
                        layout.alignCenter,
                        isExpandable && styles['moonstone-tableStructuredCell_expandable']
                    )}
                    style={{marginLeft: indent}}
                >
                    {isExpandable && (
                        <>
                            {isExpanded ?
                                <ChevronDown/> :
                                <ChevronRight/>}
                        </>
                    )}
                    {children}
                </div>
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
