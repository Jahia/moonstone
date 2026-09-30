import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { EmptyDataProps } from './EmptyData.types';

import styles from './EmptyData.module.scss';

export const EmptyData = React.forwardRef<HTMLElement, EmptyDataProps>(
    ({
        title, message, icon, className, component, ...props
    }, ref) => {
        const Component = component ?? 'div';
        return (
            <Component
                className={clsx(
                    ['moonstone-emptyData', styles['moonstone-emptyData']],
                    ['flexCol_center', layout.flexCol_center],
                    ['alignCenter', layout.alignCenter],
                    ['flexFluid', layout.flexFluid],
                    className,
                )}
                ref={ref}
                {...props}
            >
                {icon}
                {title && (
                    <Typography variant="heading" weight="semiBold">
                        {title}
                    </Typography>
                )}
                <Typography variant="body">{message}</Typography>
            </Component>
        );
    },
);

EmptyData.displayName = 'EmptyData';
