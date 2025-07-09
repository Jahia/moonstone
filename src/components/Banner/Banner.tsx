import React from 'react';
import clsx from 'clsx';
import type {BannerProps} from './Banner.types';
import './Banner.scss';
import {Typography} from '../Typography';
import {HelpOutline, Information, Warning, Report} from '~/icons';

const BannerForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, BannerProps> = ({
    className,
    variant = 'neutral',
    iconStart,
    title,
    children,
    ...props
}, ref) => {
    const getDefaultIcon = (bannerVariant : BannerProps['variant']) => {
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
            ref={ref}
            className={clsx('moonstone-banner', `moonstone-banner_${variant}`, className, 'flexCol')}
            aria-label={title}
            {...props}
        >
            <div className="moonstone-banner_title alignCenter flexRow">
                {effectiveIcon && <effectiveIcon.type {...effectiveIcon.props} size="default"/>}
                <Typography variant="subheading" weight="bold">
                    {title}
                </Typography>
            </div>
            <Typography variant="body" component="div" className={clsx('moonstone-banner_content')}>
                {children}
            </Typography>
        </div>
    );
};

export const Banner = React.forwardRef(BannerForwardRef);

Banner.displayName = 'Banner';
