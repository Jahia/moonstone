import clsx from 'clsx';
import React, { useId } from 'react';

import { TableCell } from '../TableCell';
import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { mergeHandlers } from '~/hooks';
import { ChevronDown, ChevronRight } from '~/icons';

import type { TableStructuredCellProps } from './TableStructuredCell.types';

import styles from './TableStructuredCell.module.scss';

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
        ref,
    ) => {
        const contentId = useId();

        // Render nothing when no children are provided to avoid empty HTML markup
        if (!children) {
            return null;
        }

        const indent = depth * indentSpace;
        const handleToggleExpand: React.MouseEventHandler = (event) => {
            event.stopPropagation();
            onToggleExpand?.();
        };
        return (
            <TableCell
                className={clsx(styles.tableStructuredCell, className)}
                ref={ref}
                {...mergeHandlers(props, { onClick: handleToggleExpand })}
            >
                <div
                    className={clsx(
                        layout.flexRow_nowrap,
                        layout.flexFluid,
                        layout.alignCenter,
                        {
                            [styles.expandable]: isExpandable,
                            [styles.scrollable]: isScrollable && !isExpandable,
                        },
                    )}
                    style={{ marginLeft: indent }}
                >
                    {isExpandable
                        ? (
                                <>
                                    {/* Only the chevron is the button: the content may hold a link or a button. Its click bubbles to the onClick of the cell */}
                                    <Typography
                                        aria-expanded={isExpanded}
                                        aria-labelledby={contentId}
                                        className={styles.toggle}
                                        component="button"
                                        type="button"
                                    >
                                        {isExpanded
                                            ? <ChevronDown/>
                                            : <ChevronRight/>}
                                    </Typography>
                                    <Typography
                                        isNowrap
                                        className={clsx(
                                            layout.flexRow_nowrap,
                                            layout.alignCenter,
                                            { [styles.scrollable]: isScrollable },
                                        )}
                                        component="div"
                                        id={contentId}
                                    >
                                        {children}
                                    </Typography>
                                </>
                            )
                        : children}
                </div>
            </TableCell>
        );
    },
);

TableStructuredCell.displayName = 'TableStructuredCell';
