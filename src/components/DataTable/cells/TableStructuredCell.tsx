import clsx from 'clsx';
import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import {TableCell} from './TableCell';
import {Typography} from '~/components';
import styles from './TableStructuredCell.module.scss';
import {layout} from '~/globals/css-utils.js';
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
                className={clsx(styles.tableStructuredCell, className)}
                aria-expanded={isExpanded}
                onClick={handleToggleExpand}
                {...props}
            >
                <div
                    className={clsx(
                        layout.flexRow_nowrap,
                        layout.flexFluid,
                        layout.alignCenter,
                        {[styles.expandable]: isExpandable},
                        {[styles.scrollable]: isScrollable && !isExpandable}
                    )}
                    style={{marginLeft: indent}}
                >
                    {isExpandable ? (
                        <>
                            {isExpanded ?
                                <ChevronDown/> :
                                <ChevronRight/>}
                            <Typography
                                isNowrap
                                component="div"
                                className={clsx(
                                    layout.flexRow_nowrap,
                                    layout.alignCenter,
                                    {[styles.scrollable]: isScrollable}
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
