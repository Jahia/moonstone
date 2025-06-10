import React from 'react';

export type ThumbnailProps = {
    /**
     * Url of the thumbnail or icon component
     * If a string is provided, it will be used as the src of an img element.
     * If a React element is provided, it will be rendered as the thumbnail.
     */
    thumbnail?: string | React.ReactElement;

    /**
     * Alt attribute for thumbnail
     */
    thumbnailAlt?: string;

    /**
     * Thumbnail type
     * @default 'preview'
     */
    thumbnailType?: 'preview' | 'icon';
}

type BasicProps = Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'id' | 'onClick'> & ThumbnailProps & {
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
    chips?: React.ReactNode | React.ReactNode[];

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
