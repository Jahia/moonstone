import React from 'react';

type BasicProps = Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'id' | 'onClick'> & {
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
    thumbnailAlt?: string;

    /**
     * Thumbnail type
     */
    thumbnailType?: 'icon' | 'preview';

    /**
     * Error cardSelector variant
     */
    hasError?: boolean;

    /**
     * Error cardSelector message
     */
    errorMessage?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

}

export type CardSelectorProps = (BasicProps & {hasError: true; errorMessage: string;}) | (BasicProps & {hasError?: false; errorMessage?: never;});
