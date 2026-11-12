import clsx from 'clsx';
import React, { useLayoutEffect } from 'react';

import type { ColumnLayout } from '../utils/renderCells.types';

import styles from '../DataTable.module.scss';

export type StickySide = 'start' | 'end';

export type StickyCellProps = {
    isSticky: true;
    className?: string;
    style: React.CSSProperties;
};

/**
 * Inline style of a sticky cell. `rank` counts the sticky cells from the edge the cell sticks to.
 * The offsets are CSS variables that `useStickyCells` sets on the table.
 */
export const getStickyStyle = (side: StickySide, rank: number): React.CSSProperties => (
    side === 'start'
        ? { left: `var(--moon-sticky-start-${rank}, 0px)` }
        : { right: `var(--moon-sticky-end-${rank}, 0px)` }
);

const countTrue = (flags: boolean[]) => flags.filter(Boolean).length;

/**
 * Places the cells around the data columns: each sticky one gets its offset, and the innermost
 * sticky cell of each edge carries the shadow.
 */
export const getStickyLayout = ({
    before, isSelectionSticky, stickyColumnCount, after,
}: {
    before: boolean[];
    isSelectionSticky: boolean;
    stickyColumnCount: number;
    after: boolean[];
}) => {
    const stickyStartBase = countTrue(before) + (isSelectionSticky ? 1 : 0);
    const stickyStartCount = stickyStartBase + stickyColumnCount;
    const stickyEndCount = countTrue(after);

    const place = (side: StickySide, rank: number, count: number): StickyCellProps => ({
        isSticky: true,
        className: rank === count - 1 ? (side === 'start' ? styles.stickyEdgeStart : styles.stickyEdgeEnd) : undefined,
        style: getStickyStyle(side, rank),
    });

    return {
        before: before.map((isSticky, i) => (isSticky ? place('start', countTrue(before.slice(0, i)), stickyStartCount) : undefined)),
        selection: isSelectionSticky ? place('start', stickyStartBase - 1, stickyStartCount) : undefined,
        after: after.map((isSticky, i) => (isSticky ? place('end', countTrue(after.slice(i + 1)), stickyEndCount) : undefined)),
        columnLayout: {
            stickyStartBase,
            stickyStartCount,
        } satisfies ColumnLayout,
    };
};

export const isStickyElement = (node: React.ReactNode) => (
    React.isValidElement(node) && Boolean((node.props as { isSticky?: boolean }).isSticky)
);

/** Adds the sticky props to a custom cell, keeping its own className and style */
export const withStickyProps = (node: React.ReactNode, placement?: StickyCellProps) => {
    if (!placement || !React.isValidElement(node)) {
        return node;
    }

    const props = node.props as Pick<StickyCellProps, 'className' | 'style'>;
    return React.cloneElement(node as React.ReactElement<StickyCellProps>, {
        isSticky: true,
        className: clsx(props.className, placement.className),
        style: {
            ...props.style,
            ...placement.style,
        },
    });
};

const STICKY_START = '--moon-sticky-start';
const STICKY_END = '--moon-sticky-end';

/**
 * Measures the sticky cells of the header row and sets their offsets on the table, so every row
 * shares them. Also flags the table as scrolled from its start or before its end, for the shadows.
 */
export function useStickyCells(headRowRef: React.RefObject<HTMLElement>, isEnabled: boolean) {
    useLayoutEffect(() => {
        const headRow = headRowRef.current;
        const table = headRow?.parentElement?.parentElement;
        if (!isEnabled || !headRow || !table) {
            return;
        }

        const cells = Array.from(headRow.children) as HTMLElement[];
        const startCells = cells.filter(cell => cell.style.left.includes(STICKY_START));
        const endCells = cells.filter(cell => cell.style.right.includes(STICKY_END)).reverse();

        const setOffsets = (side: StickySide, sideCells: HTMLElement[]) => {
            let offset = 0;
            sideCells.forEach((cell, rank) => {
                table.style.setProperty(`--moon-sticky-${side}-${rank}`, `${offset}px`);
                offset += cell.offsetWidth;
            });
            // Keeps a cell that gets the focus out from under the sticky cells
            table.style.setProperty(`--moon-sticky-${side}-width`, `${offset}px`);
        };

        const updateScrollFlags = () => {
            const maxScrollLeft = table.scrollWidth - table.clientWidth;
            table.toggleAttribute('data-scrolled-start', table.scrollLeft > 0);
            table.toggleAttribute('data-scrolled-end', table.scrollLeft < maxScrollLeft - 1);
        };

        const update = () => {
            setOffsets('start', startCells);
            setOffsets('end', endCells);
            updateScrollFlags();
        };

        update();
        const observer = new ResizeObserver(update);
        [table, ...startCells, ...endCells].forEach(element => observer.observe(element));
        table.addEventListener('scroll', updateScrollFlags, { passive: true });

        return () => {
            observer.disconnect();
            table.removeEventListener('scroll', updateScrollFlags);
        };
    });
}
