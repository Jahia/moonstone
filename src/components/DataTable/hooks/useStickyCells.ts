import clsx from 'clsx';
import React, { useLayoutEffect } from 'react';

import styles from '../DataTable.module.scss';

type StickySide = 'start' | 'end';

type CellLayoutProps = {
    className?: string;
    style?: React.CSSProperties;
};

type StickyCellProps = CellLayoutProps & {
    'isSticky': true;
    // The edge the cell sticks to, which `useStickyCells` reads to measure it
    'data-sticky': StickySide;
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

/** Adds the layout props to the props of a cell, keeping its own className and style */
export const mergeCellProps = <P extends CellLayoutProps>(props: P | undefined, layout: CellLayoutProps | undefined) => ({
    ...props,
    ...layout,
    className: clsx(props?.className, layout?.className),
    style: {
        ...props?.style,
        ...layout?.style,
    },
});

const countTrue = (flags: boolean[]) => flags.filter(Boolean).length;

/**
 * Places the cells around the data columns: each sticky one gets its offset, and the innermost
 * sticky cell of each edge carries the shadow. Every cell before a sticky column sticks too.
 */
export const getStickyLayout = ({
    before, isSelectionSticky, stickyColumnCount, after,
}: {
    before: boolean[];
    isSelectionSticky: boolean;
    stickyColumnCount: number;
    after: boolean[];
}) => {
    const beforeFlags = before.map(isSticky => stickyColumnCount > 0 || isSticky);
    const stickyStartBase = countTrue(beforeFlags) + (isSelectionSticky ? 1 : 0);
    const stickyStartCount = stickyStartBase + stickyColumnCount;
    const stickyEndCount = countTrue(after);

    const place = (side: StickySide, rank: number, count: number): StickyCellProps => ({
        'isSticky': true,
        'data-sticky': side,
        'className': rank === count - 1 ? (side === 'start' ? styles.stickyEdgeStart : styles.stickyEdgeEnd) : undefined,
        'style': getStickyStyle(side, rank),
    });

    return {
        before: beforeFlags.map((isSticky, i) => (isSticky ? place('start', countTrue(beforeFlags.slice(0, i)), stickyStartCount) : undefined)),
        selection: isSelectionSticky ? place('start', stickyStartBase - 1, stickyStartCount) : undefined,
        after: after.map((isSticky, i) => (isSticky ? place('end', countTrue(after.slice(i + 1)), stickyEndCount) : undefined)),
        // Number of sticky cells before the data columns: the custom `before` cells and the selection
        stickyStartBase,
    };
};

export const isStickyElement = (node: React.ReactNode) => (
    React.isValidElement(node) && Boolean((node.props as { isSticky?: boolean }).isSticky)
);

/** Adds the sticky props to a custom cell */
export const withStickyProps = (node: React.ReactNode, placement?: StickyCellProps) => {
    if (!placement || !React.isValidElement(node)) {
        return node;
    }

    return React.cloneElement(node as React.ReactElement<StickyCellProps>, mergeCellProps(node.props as CellLayoutProps, placement));
};

/**
 * Measures the sticky cells of the header row and sets their offsets on the table, so every row
 * shares them. Also flags the table as scrolled from its start or before its end, for the shadows.
 */
export function useStickyCells(headRowRef: React.RefObject<HTMLElement>, isEnabled: boolean, layoutKey: string) {
    useLayoutEffect(() => {
        const headRow = headRowRef.current;
        const table = headRow?.parentElement?.parentElement;
        if (!isEnabled || !headRow || !table) {
            return;
        }

        const startCells = Array.from(headRow.querySelectorAll<HTMLElement>(':scope > [data-sticky="start"]'));
        const endCells = Array.from(headRow.querySelectorAll<HTMLElement>(':scope > [data-sticky="end"]')).reverse();

        const widthOf = (sideCells: HTMLElement[]) => sideCells.reduce((sum, cell) => sum + cell.offsetWidth, 0);
        let isSticking = true;

        // An `auto` offset stops the cell from sticking
        const setOffsets = (side: StickySide, sideCells: HTMLElement[]) => {
            let offset = 0;
            sideCells.forEach((cell, rank) => {
                table.style.setProperty(`--moon-sticky-${side}-${rank}`, isSticking ? `${offset}px` : 'auto');
                offset += cell.offsetWidth;
            });
            const width = isSticking ? offset : 0;
            // The scroll padding keeps a control that gets the focus out from under the sticky cells
            table.style.setProperty(`--moon-sticky-${side}-width`, `${width}px`);
        };

        const updateScrollFlags = () => {
            const maxScrollLeft = table.scrollWidth - table.clientWidth;
            table.toggleAttribute('data-scrolled-start', isSticking && table.scrollLeft > 0);
            table.toggleAttribute('data-scrolled-end', isSticking && table.scrollLeft < maxScrollLeft - 1);
        };

        const update = () => {
            // At a narrow width or a high zoom, sticky cells would hide the cells that scroll (WCAG 1.4.10)
            isSticking = widthOf(startCells) + widthOf(endCells) <= table.clientWidth / 2;
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
    }, [headRowRef, isEnabled, layoutKey]);
}
