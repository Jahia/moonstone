import {useState, useRef} from 'react';
import type {ColumnSizingInfoState, ColumnSizingState, Updater} from '@tanstack/react-table';

// Default state required by TanStack to initialize columnSizingInfo before any resize occurs.
const defaultColumnSizingInfo: ColumnSizingInfoState = {
    columnSizingStart: [],
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    startOffset: null,
    startSize: null
};

type Props = {
    onResizeStart?: (key: string, size: number) => void;
    onResizeChange?: (key: string, size: number) => void;
    onResizeStop?: (key: string, size: number) => void;
};

export function useTableResizing({onResizeStart, onResizeChange, onResizeStop}: Props) {
    const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
    const [columnSizingInfo, setColumnSizingInfo] = useState<ColumnSizingInfoState>(defaultColumnSizingInfo);
    const columnSizingRef = useRef<ColumnSizingState>({});

    // Called by TanStack on every frame during a drag.
    const handleColumnSizingChange = (updater: Updater<ColumnSizingState>) => {
        setColumnSizing(prev => {
            const next = typeof updater === 'function' ? updater(prev) : updater;
            columnSizingRef.current = next;

            Object.entries(next)
                .filter(([key, size]) => size !== prev[key])
                .forEach(([key, size]) => onResizeChange?.(key, size));

            return next;
        });
    };

    const handleColumnSizingInfoChange = (updater: Updater<ColumnSizingInfoState>) => {
        setColumnSizingInfo(prev => {
            const next = typeof updater === 'function' ? updater(prev) : updater;
            const prevKey = prev.isResizingColumn;
            const nextKey = next.isResizingColumn;

            if (!prevKey && nextKey) {
                onResizeStart?.(nextKey, next.startSize ?? 0);
            } else if (prevKey && !nextKey) {
                onResizeStop?.(prevKey, columnSizingRef.current[prevKey] ?? prev.startSize ?? 0);
            }

            return next;
        });
    };

    return {columnSizing, columnSizingInfo, handleColumnSizingChange, handleColumnSizingInfoChange};
}
