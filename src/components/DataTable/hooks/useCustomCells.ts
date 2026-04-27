import React, {useCallback, useEffect, useRef, useState} from 'react';
import type {
    CustomCellPosition,
    CustomHeaderWidths,
    UseCustomCellsProps,
    UseCustomCellsReturn
} from './useCustomCells.types';

const defaultHeaderWidths = (): CustomHeaderWidths => ({before: [], after: []});

export function useCustomCells<T extends NonNullable<unknown>>({
    data,
    primaryKey,
    renderRow
}: UseCustomCellsProps<T>): UseCustomCellsReturn {
    const [customBeforeCount, setCustomBeforeCount] = useState(0);
    const [customAfterCount, setCustomAfterCount] = useState(0);
    const pendingCustomBefore = useRef(0);
    const pendingCustomAfter = useRef(0);
    const [customHeaderWidths, setCustomHeaderWidths] = useState<CustomHeaderWidths>(defaultHeaderWidths);
    const observersRef = useRef<{ before:(ResizeObserver | undefined)[]; after: (ResizeObserver | undefined)[] }>({
        before: [],
        after: []
    });

    useEffect(() => () => {
        observersRef.current.before.forEach(observer => observer?.disconnect());
        observersRef.current.after.forEach(observer => observer?.disconnect());
    }, []);

    useEffect(() => {
        if (!renderRow) {
            return;
        }

        pendingCustomBefore.current = 0;
        pendingCustomAfter.current = 0;
        setCustomBeforeCount(0);
        setCustomAfterCount(0);
        observersRef.current.before.forEach(observer => observer?.disconnect());
        observersRef.current.before = [];
        observersRef.current.after.forEach(observer => observer?.disconnect());
        observersRef.current.after = [];
        setCustomHeaderWidths(defaultHeaderWidths());
    }, [data, primaryKey, renderRow]);

    useEffect(() => {
        if (!renderRow) {
            return;
        }

        if (pendingCustomBefore.current !== customBeforeCount) {
            setCustomBeforeCount(pendingCustomBefore.current);
        }

        if (pendingCustomAfter.current !== customAfterCount) {
            setCustomAfterCount(pendingCustomAfter.current);
        }

        pendingCustomBefore.current = 0;
        pendingCustomAfter.current = 0;
    });

    const registerCustomCellCounts = useCallback((beforeCount: number, afterCount: number) => {
        if (beforeCount) {
            pendingCustomBefore.current = beforeCount;
        }

        if (afterCount) {
            pendingCustomAfter.current = afterCount;
        }
    }, []);

    const withCustomCellObserver = useCallback(
        (node: React.ReactNode, rowIndex: number, position: CustomCellPosition, index: number): React.ReactNode => {
            if (rowIndex !== 0 || !React.isValidElement(node)) {
                return node;
            }

            return React.cloneElement(node as React.ReactElement, {
                ref: (element: HTMLElement | null) => {
                    observersRef.current[position][index]?.disconnect();
                    observersRef.current[position][index] = undefined;

                    if (!element) {
                        return;
                    }

                    const measure = () => {
                        const width = `${element.offsetWidth}px`;

                        setCustomHeaderWidths(previous => {
                            if (previous[position][index] === width) {
                                return previous;
                            }

                            const next = [...previous[position]];
                            next[index] = width;
                            return {...previous, [position]: next};
                        });
                    };

                    const observer = new ResizeObserver(measure);
                    observer.observe(element);
                    observersRef.current[position][index] = observer;
                }
            });
        },
        []
    );

    return {
        customBeforeCount,
        customAfterCount,
        customHeaderWidths,
        registerCustomCellCounts,
        withCustomCellObserver
    };
}
