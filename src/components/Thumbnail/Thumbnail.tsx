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
    'data-testid': dataTestId = 'thumbnail',
    ...props
}) => {
    const rootClassName = clsx(
        'moonstone-thumbnail',
        `moonstone-thumbnail_${size}`,
        className
    );

    const renderContent = () => {
        if (!src) {
            return <Image size="big" color="gray" data-testid={dataTestId}/>;
        }

        if (typeof src === 'string') {
            return (
                <img
                    className={`moonstone-thumbnail_${variant}`}
                    src={src}
                    alt={alt}
                    data-testid={dataTestId}
                />
            );
        }

        return (
            <src.type
                {...src.props}
                className={clsx(`moonstone-thumbnail_${variant}`, src.props.className)}
                data-testid={dataTestId}
            />
        );
    };

    return (
        <div className={rootClassName} {...props}>
            {renderContent()}
        </div>
    );
};

Thumbnail.displayName = 'Thumbnail';
