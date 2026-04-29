import React from 'react';
import clsx from 'clsx';

import type {LoaderProps} from './Loader.types';
import styles from './Loader.module.scss';
import {reset} from '~/globals/css-utils.js';

export const Loader: React.FC<LoaderProps> = ({
    size,
    className,
    isReversed = false,
    ...props
}) => {
    return (
        <svg role="status"
             className={clsx(
                reset,
                ['moonstone-loader', styles['moonstone-loader']],
                [`moonstone-loader_${size}`, styles[`moonstone-loader_${size}`]],
                className
             )}
             {...props}
        >
            <circle
                className={clsx(
                    ['moonstone-loader_circle', styles['moonstone-loader_circle']],
                    ['moonstone-loader_background', styles['moonstone-loader_background']]
                )}
                cx="50%"
                cy="50%"
            />
            <circle
                className={clsx(
                    ['moonstone-loader_circle', styles['moonstone-loader_circle']],
                    ['moonstone-loader_animation', styles['moonstone-loader_animation']],
                    isReversed && ['moonstone-loader_reversed', styles['moonstone-loader_reversed']]
                )}
                cx="50%"
                cy="50%"
            />
        </svg>
    );
};

Loader.displayName = 'Loader';
