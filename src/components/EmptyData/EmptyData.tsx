import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import type {EmptyDataProps} from './EmptyData.types';
import './EmptyData.scss';

export const EmptyData = React.forwardRef<HTMLElement, EmptyDataProps>(
    ({title, message, icon, className, component, ...props}, ref) => {
        const Component = component ?? 'div';
        return (
            <Component
                ref={ref}
                className={clsx(
                    'moonstone-emptyData',
                    'flexCol_center',
                    'alignCenter',
                    'flexFluid',
                    className
                )}
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
    }
);

EmptyData.displayName = 'EmptyData';
