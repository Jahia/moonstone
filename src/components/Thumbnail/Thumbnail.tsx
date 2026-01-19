import React from 'react';
import clsx from 'clsx';

import './Thumbnail.scss';
import type {ThumbnailProps} from './Thumbnail.types';
import {Image} from '~/icons/components';

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
        'moonstone-thumbnail',
        `moonstone-thumbnail_${size}`,
        className
    );

    if (!src) {
        return (
            <div className={rootClassName} {...props}>
                <Image size="big" color="gray"/>
            </div>
        );
    }

    if (typeof src === 'string') {
        return (
            <div className={rootClassName} {...props}>
                <img
                    className={`moonstone-thumbnail_${variant}`}
                    src={src}
                    alt={alt}
                    {...imgProps}
                />
            </div>
        );
    }

    return (
        <div className={rootClassName} {...props}>
            <src.type
                {...src.props}
                className={clsx(`moonstone-thumbnail_${variant}`, src.props.className)}
            />
        </div>
    );
};

Thumbnail.displayName = 'Thumbnail';
