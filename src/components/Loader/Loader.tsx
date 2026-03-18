import React from 'react';
import clsx from 'clsx';

import type {LoaderProps} from './Loader.types';
import styles from './Loader.module.scss';

export const Loader: React.FC<LoaderProps> = ({
    size,
    className,
    isReversed = false,
    ...props
}) => {
    return (
        <svg role="status"
             className={clsx('moonstone-loader', styles.loader, `moonstone-loader_${size}`, styles[`loader_${size}`], className)}
             {...props}
        >
            <circle
                className={clsx('moonstone-loader_circle', styles.loader_circle, 'moonstone-loader_background', styles.loader_background)}
                cx="50%"
                cy="50%"
            />
            <circle
                className={clsx('moonstone-loader_circle', styles.loader_circle, 'moonstone-loader_animation', styles.loader_animation, {'moonstone-loader_reversed': isReversed, [styles.loader_reversed]: isReversed})}
                cx="50%"
                cy="50%"
            />
        </svg>
    );
};

Loader.displayName = 'Loader';
