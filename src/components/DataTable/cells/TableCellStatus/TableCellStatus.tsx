import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { TableCell } from '../TableCell';
import { layout } from '~/globals/css-utils.js';

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
    const panelRef = useRef<HTMLDivElement>(null);
    const [isDismissed, setIsDismissed] = useState(false);

    // Keys reach the focused row, not this cell, so the listeners go on the row
    useEffect(() => {
        const row = panelRef.current?.closest('tr');
        if (!row) {
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
            if (e.target !== row || e.defaultPrevented || hasModifier) {
                return;
            }

            if (e.key === 'Escape') {
                setIsDismissed(true);
            }
        };
        const handleBlur = () => setIsDismissed(false);

        row.addEventListener('keydown', handleKeyDown);
        row.addEventListener('blur', handleBlur);
        return () => {
            row.removeEventListener('keydown', handleKeyDown);
            row.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <TableCell
            className={clsx(
                style.tableCellStatus,
                style[color],
                isDismissed && style.dismissed,
                className,
            )}
            component="td"
            ref={ref}
            width="8px"
            {...props}
        >
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, style.panel)} ref={panelRef}>
                {children}
            </div>
        </TableCell>
    );
};

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
