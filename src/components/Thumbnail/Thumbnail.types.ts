import React from 'react';

export type ThumbnailSize = 'small' | 'default';

export type ThumbnailVariant = 'preview' | 'icon';

type BaseThumbnailProps = {
    /**
     * Render mode: 'preview' (cover image) or 'icon' (centered icon)
     * @default 'preview'
     */
    variant?: ThumbnailVariant;

    /**
     * Size: 'default' (46x46 for CardSelector) or 'small' (40x40 for TableRow)
     * @default 'default'
     */
    size?: ThumbnailSize;

    /**
     * Additional className
     */
    className?: string;

    /**
     * Data-testid for testing
     */
    'data-testid'?: string;
};

/**
 * Props when src is a string URL - alt is required
 */
type ThumbnailWithStringSrc = BaseThumbnailProps & {
    src: string;
    alt: string;
};

/**
 * Props when src is a React element (icon) - alt not applicable
 */
type ThumbnailWithElementSrc = BaseThumbnailProps & {
    src: React.ReactElement;
    alt?: never;
};

/**
 * Props when no src - renders fallback icon
 */
type ThumbnailWithNoSrc = BaseThumbnailProps & {
    src?: undefined;
    alt?: never;
};

export type ThumbnailProps = ThumbnailWithStringSrc | ThumbnailWithElementSrc | ThumbnailWithNoSrc;
