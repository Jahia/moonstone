import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import { TableRowContext } from '../../TableRow/TableRow.context';
import { TableCell } from '../TableCell';
import { layout } from '~/globals/css-utils.js';
import { mergeHandlers, shouldIgnoreKey } from '~/hooks';

import type { TableCellStatusProps } from './TableCellStatus.types';

import style from './TableCellStatus.module.scss';

const TableCellStatusForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellStatusProps> = (
    {
        color,
        children,
        className,
        ...props
    },
    ref,
) => {
    const row = useContext(TableRowContext);
    const registerStatus = row?.registerStatus;
    const isRowStatusDismissed = row?.isStatusDismissed;
    const [hoveredCell, setHoveredCell] = useState<HTMLElement | null>(null);
    const [isHoverDismissed, setIsHoverDismissed] = useState(false);

    useEffect(() => registerStatus?.(), [registerStatus]);

    // Escape hides the panel shown on hover until the pointer leaves the cell (WCAG 1.4.13)
    useEffect(() => {
        if (!hoveredCell || isHoverDismissed) {
            return undefined;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Escape' || shouldIgnoreKey(e)) {
                return;
            }

            setIsHoverDismissed(true);
            // The row stops the Escape that also hides the panel shown on its keyboard focus
            const rowElement = hoveredCell.closest('tr');
            if (e.target !== rowElement || !rowElement.matches(':focus-visible') || isRowStatusDismissed) {
                e.stopPropagation();
            }
        };

        // Capture: a Modal around the table listens for Escape on the document too, and closes on the next Escape
        document.addEventListener('keydown', handleKeyDown, true);
        return () => document.removeEventListener('keydown', handleKeyDown, true);
    }, [hoveredCell, isHoverDismissed, isRowStatusDismissed]);

    return (
        <TableCell
            className={clsx(
                style.tableCellStatus,
                style[color],
                isRowStatusDismissed && style.dismissed,
                isHoverDismissed && style.hoverDismissed,
                className,
            )}
            component="td"
            ref={ref}
            width="8px"
            {...mergeHandlers(props, {
                onPointerEnter: (e: React.PointerEvent<HTMLElement>) => setHoveredCell(e.currentTarget),
                onPointerLeave: () => {
                    setHoveredCell(null);
                    setIsHoverDismissed(false);
                },
            })}
        >
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, style.panel)}>
                {children}
            </div>
        </TableCell>
    );
};

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
