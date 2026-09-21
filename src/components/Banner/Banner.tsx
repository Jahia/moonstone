import clsx from 'clsx';
import React from 'react';

import { Typography } from '../Typography';
import { layout } from '~/globals/css-utils.js';
import { HelpOutline, Information, Report, Warning } from '~/icons';

import type { BannerProps } from './Banner.types';

import styles from './Banner.module.scss';

const BannerForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, BannerProps> = ({
    className,
    variant = 'neutral',
    iconStart,
    title,
    children,
    ...props
}, ref) => {
    const getDefaultIcon = (bannerVariant: BannerProps['variant']) => {
        switch (bannerVariant) {
            case 'info':
                return <Information/>;
            case 'warning':
                return <Warning/>;
            case 'danger':
                return <Report/>;
            case 'neutral':
            default:
                return <HelpOutline/>;
        }
    };

    const effectiveIcon = iconStart ?? getDefaultIcon(variant);

    return (
        <div
            aria-label={title}
            className={clsx(
                ['moonstone-banner', styles['moonstone-banner']],
                [`moonstone-banner_${variant}`, styles[`moonstone-banner_${variant}`]],
                className,
                ['flexCol', layout.flexCol],
            )}
            ref={ref}
            {...props}
        >
            <div className={clsx(
                ['moonstone-banner_title', styles['moonstone-banner_title']],
                ['alignCenter', layout.alignCenter],
                ['flexRow', layout.flexRow],
            )}
            >
                {effectiveIcon && <effectiveIcon.type {...effectiveIcon.props} size="default"/>}
                <Typography variant="subheading" weight="bold">
                    {title}
                </Typography>
            </div>
            <Typography className={clsx('moonstone-banner_content')} component="div" variant="body">
                {children}
            </Typography>
        </div>
    );
};

export const Banner = React.forwardRef(BannerForwardRef);

Banner.displayName = 'Banner';
