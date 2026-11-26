import clsx from 'clsx';
import React from 'react';

import { Image } from '~/icons';
import { warnOnce } from '~/utils/warnOnce';

import type { ThumbnailProps } from './Thumbnail.types';

import styles from './Thumbnail.module.scss';

export const Thumbnail: React.FC<ThumbnailProps> = ({
    src,
    alt,
    variant = 'preview',
    size = 'default',
    className,
    imgProps,
    ...props
}) => {
    const rootClassName = clsx(
        ['moonstone-thumbnail', styles['moonstone-thumbnail']],
        [`moonstone-thumbnail_${size}`, styles[`moonstone-thumbnail_${size}`]],
        className,
    );

    if (!src) {
        return (
            <div className={rootClassName} {...props}>
                <Image color="gray" size="big"/>
            </div>
        );
    }

    if (typeof src === 'string') {
        if (alt === undefined) {
            warnOnce('Thumbnail.alt', 'The Thumbnail component needs an `alt` prop when `src` is a URL: a text alternative, or an empty string for a decorative image.');
        }

        return (
            <div className={rootClassName} {...props}>
                <img
                    alt={alt}
                    className={clsx([`moonstone-thumbnail_${variant}`, styles[`moonstone-thumbnail_${variant}`]])}
                    src={src}
                    {...imgProps}
                />
            </div>
        );
    }

    return (
        <div className={rootClassName} {...props}>
            <src.type
                {...src.props}
                className={clsx([`moonstone-thumbnail_${variant}`, styles[`moonstone-thumbnail_${variant}`]], src.props.className)}
            />
        </div>
    );
};

Thumbnail.displayName = 'Thumbnail';
