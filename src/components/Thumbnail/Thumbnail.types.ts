import type React from 'react';

export type ThumbnailSrc = string | React.ReactElement;
export type ThumbnailSize = 'small' | 'default';
export type ThumbnailVariant = 'preview' | 'icon';

// Extra props are spread on the root div
export type ThumbnailProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /** Image source - URL string, React element, or undefined for fallback icon */
    src?: string | React.ReactElement;
    /** Text alternative of the image, use an empty string for a decorative image */
    alt: string;
    /** Size: 'small' (40x40) or 'default' (46x46) @default 'default' */
    size?: ThumbnailSize;
    /** Display variant: 'preview' fills the area, cropping as needed; 'icon' is centered and not cropped @default 'preview' */
    variant?: ThumbnailVariant;
    /** Additional className */
    className?: string;
    /** Additional img element props (only applies when src is a string) */
    imgProps?: Omit<React.ComponentPropsWithoutRef<'img'>, 'src' | 'alt' | 'className'>;
};
