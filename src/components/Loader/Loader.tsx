import React from 'react';
import clsx from 'clsx';

import {LoaderProps} from './Loader.types';
import './Loader.scss';

export const Loader: React.FC<LoaderProps> = ({
    size,
    className,
    ...props
}: LoaderProps) => {
    return (
        <svg role="status" className={clsx('moonstone-loader', `moonstone-loader_${size}`, className)}
            {...props}
        >
            <circle
                className={clsx('moonstone-loader_circle', 'moonstone-loader_background')}
                cx="50%"
                cy="50%"
            />
            <circle
                className={clsx('moonstone-loader_circle', 'moonstone-loader_animation')}
                cx="50%"
                cy="50%"
            />
        </svg>
    )};

Loader.displayName = 'Loader';
