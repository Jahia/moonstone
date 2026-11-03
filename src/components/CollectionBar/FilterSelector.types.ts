import type { CollectionBarCloseReason, CollectionBarFilter } from './CollectionBar.types';

export type FilterSelectorProps = {
    /**
     * The filter whose selector the dialog shows
     */
    filter: CollectionBarFilter;

    /**
     * Returns the chip that anchors the dialog
     */
    getAnchor: () => HTMLElement | null;

    /**
     * Returns the root of the bar, whose controls close the selector themselves
     */
    getBar: () => HTMLElement | null;

    /**
     * Label of the Close button
     */
    closeLabel: string;

    /**
     * Function triggered by Escape, the Close button, a click outside, or the close of the function form, with the reason
     */
    onClose: (reason: CollectionBarCloseReason) => void;
};
