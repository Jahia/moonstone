import React, {HTMLAttributes} from 'react';

export type ThumbnailTypes = 'icon' | 'preview';
export const thumbnailTypes = ['icon', 'preview'];

export type CardSelectorProps = {
    /**
     * Required id
     */
    id: string;

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
    cardAction?: React.ReactElement;

    /**
     * Define if the dragging icon will be displayed
     */
    isDraggable?: boolean;

    /**
     * Define if the item is disabled
     */
    isDisabled?: boolean;

    /**
     * Define if the item is readOnly
     */
    isReadOnly?: boolean;

    /**
     * Image url as thumbnail
     */
    thumbnailURL?: string;

    /**
     * Alt attribute for thumbnail
     */
    thumbnailAlt: string;

    /**
     * Thumbnail type
     */
    thumbnailType: 'icon' | 'preview';

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

} & HTMLAttributes<HTMLButtonElement>
