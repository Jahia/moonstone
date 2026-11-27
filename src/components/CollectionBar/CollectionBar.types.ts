import type React from 'react';

export type CollectionBarProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children' | 'onChange' | 'defaultValue'> & {
    /**
     * Blocks at the start of the bar, such as FilterChips and AddFilter
     */
    children?: React.ReactNode;

    /**
     * Blocks at the end of the bar, such as a SearchInput or a ColumnChooser
     */
    end?: React.ReactNode;

    /**
     * Key of the FilterChip whose popup is open, or `null` when none is (controlled)
     */
    openFilterKey?: string | null;

    /**
     * Key of the FilterChip whose popup is open at first (uncontrolled)
     * @default null
     */
    defaultOpenFilterKey?: string | null;

    /**
     * Called when a FilterChip popup opens or closes
     * @param openFilterKey - The key of the open FilterChip, or `null` when none is open.
     */
    onOpenFilterChange?: (openFilterKey: string | null) => void;

    /**
     * Width of a SearchInput placed in the bar. When room lacks, it shrinks to 144px at most
     * @default '192px'
     */
    searchWidth?: string;

    /**
     * Whether every block of the bar that reads it is disabled: FilterChip and AddFilter
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Additional class name
     */
    className?: string;
};
