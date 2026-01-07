import type React from 'react';
import type {ThumbnailSrc, ThumbnailVariant} from '~/components/Thumbnail/Thumbnail.types';

type BasicProps = Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'id' | 'onClick'> & {
    /** Thumbnail URL or React element */
    thumbnail?: ThumbnailSrc;
    /** Alt text for thumbnail image */
    thumbnailAlt?: string;
    /** Thumbnail display variant @default 'preview' */
    thumbnailType?: ThumbnailVariant;

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
