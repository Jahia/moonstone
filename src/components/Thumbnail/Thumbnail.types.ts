import type React from 'react';

export type ThumbnailSize = 'small' | 'default';
export type ThumbnailVariant = 'preview' | 'icon';

type BaseThumbnailProps = {
    /**
     * Size of the thumbnail
     * - 'small': 40x40
     * - 'default': 46x46
     * @default 'default'
     */
    size?: ThumbnailSize;

    /**
     * Thumbnail display variant
     * - 'preview': fills container with object-fit cover
     * - 'icon': smaller centered display
     * @default 'preview'
     */
    variant?: ThumbnailVariant;

    /**
     * Additional className
     */
    className?: string;
};

type ThumbnailSrcProps =
    | {
        /** Image URL - alt is required */
        src: string;
        /** Alt text for accessibility */
        alt: string;
        /** Additional img element props */
        imgProps?: Omit<React.ComponentPropsWithoutRef<'img'>, 'src' | 'alt' | 'className'>;
    }
    | {
        /** Custom React element to render as thumbnail */
        src: React.ReactElement;
        alt?: never;
        imgProps?: never;
    }
    | {
        /** No src - renders fallback icon */
        src?: undefined;
        alt?: never;
        imgProps?: never;
    };

export type ThumbnailProps = BaseThumbnailProps & ThumbnailSrcProps;
