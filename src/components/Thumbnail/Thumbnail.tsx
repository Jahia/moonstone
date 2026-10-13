import clsx from 'clsx';
import React from 'react';

import { Image } from '~/icons';

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
