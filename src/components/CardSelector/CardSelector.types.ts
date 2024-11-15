import React, {HTMLAttributes} from 'react';

export type CardSelectorProps = {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * CardSelector displayName
     */
    displayName: string;

    /**
     * CardSelector systemName
     */
    systemName?: string;

    /**
     * CardSelector chips
     */
    chips?: React.ReactNode[];

    /**
     * Optional information to display to describe the item
     */
    information?: string;

    /**
     * Possible actions to add to the item e.g orderable with arrows, closeable with X icon...
     */
    cardActions?: [];

    /**
     * Define if the dragging icon will be displayed
     */
    isDraggable?: boolean;

    /**
     * Define if the item is disabled
     */
    isDisabled?: boolean;

    /**
     * Image url or icon name
     */
    thumbnail?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

} & HTMLAttributes<HTMLDivElement>
