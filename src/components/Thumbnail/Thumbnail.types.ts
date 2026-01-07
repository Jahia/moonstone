import type React from 'react';

export type ThumbnailSrc = string | React.ReactElement;
export type ThumbnailSize = 'small' | 'default';
export type ThumbnailVariant = 'preview' | 'icon';

export type ThumbnailProps = {
    /** Image source - URL string, React element, or undefined for fallback icon */
    src?: string | React.ReactElement;
    /** Alt text for accessibility (recommended when src is a string) */
    alt?: string;
    /** Size: 'small' (40x40) or 'default' (46x46) @default 'default' */
    size?: ThumbnailSize;
    /** Display variant: 'preview' (object-fit cover) or 'icon' (centered) @default 'preview' */
    variant?: ThumbnailVariant;
    /** Additional className */
    className?: string;
    /** Additional img element props (only applies when src is a string) */
    imgProps?: Omit<React.ComponentPropsWithoutRef<'img'>, 'src' | 'alt' | 'className'>;
};

