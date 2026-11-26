import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import { TableRowContext } from '../../TableRow/TableRow.context';
import { TableCell } from '../TableCell';
import { layout } from '~/globals/css-utils.js';
import { mergeHandlers, shouldIgnoreKey } from '~/hooks';

import type { TableCellStatusProps } from './TableCellStatus.types';

import style from './TableCellStatus.module.scss';

// The Escape listener of each hovered status cell, added on the document while the pointer is over the cell
const escapeListeners = new WeakMap<HTMLElement, (e: KeyboardEvent) => void>();

const stopListening = (cell: HTMLElement) => {
    const listener = escapeListeners.get(cell);
    if (listener) {
        document.removeEventListener('keydown', listener, true);
        escapeListeners.delete(cell);
    }
};

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
    const [isHoverDismissed, setIsHoverDismissed] = useState(false);

    useEffect(() => registerStatus?.(), [registerStatus]);

    // Escape hides the panel shown on hover until the pointer leaves the cell (WCAG 1.4.13)
    const listenForEscape = (cell: HTMLElement) => {
        stopListening(cell);
        const listener = (e: KeyboardEvent) => {
            // The cell left the page while hovered: no pointerleave comes
            if (!cell.isConnected) {
                stopListening(cell);
                return;
            }

            if (e.key !== 'Escape' || shouldIgnoreKey(e)) {
                return;
            }

            stopListening(cell);
            setIsHoverDismissed(true);
            // The row stops the Escape that also hides the panel shown on its keyboard focus. The class,
            // not isRowStatusDismissed, gives the state of the row at this keydown.
            const rowElement = cell.closest('tr');
            if (e.target !== rowElement || !rowElement.matches(':focus-visible') || cell.classList.contains(style.dismissed)) {
                e.stopPropagation();
            }
        };
        escapeListeners.set(cell, listener);
        // Capture: a Modal around the table listens for Escape on the document too, and closes on the next Escape
        document.addEventListener('keydown', listener, true);
    };

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
                onPointerEnter: (e: React.PointerEvent<HTMLElement>) => listenForEscape(e.currentTarget),
                onPointerLeave: (e: React.PointerEvent<HTMLElement>) => {
                    stopListening(e.currentTarget);
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
