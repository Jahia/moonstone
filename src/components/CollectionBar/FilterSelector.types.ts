import type { CollectionBarFilter } from './CollectionBar.types';

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
     * Label of the Close button
     */
    closeLabel: string;

    /**
     * Function triggered by Escape, the Close button, a click outside, or the close of the function form
     */
    onClose: () => void;
};
