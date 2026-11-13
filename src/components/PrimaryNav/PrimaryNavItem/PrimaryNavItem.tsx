import clsx from 'clsx';
import React, { useContext } from 'react';

import { PrimaryNavContext } from '../PrimaryNav.context';
import { Typography } from '~/components';

import type { PrimaryNavItemProps } from './PrimaryNavItem.types';

import styles from './PrimaryNavItem.module.scss';

export const PrimaryNavItem: React.FC<PrimaryNavItemProps> = ({
    label = '',
    icon,
    className,
    subtitle,
    url,
    button,
    isSelected = false,
    onClick,
    badge,
    'aria-describedby': ariaDescribedBy,
    ...props
}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    const handleClick = (e: React.MouseEvent) => {
        if (typeof primaryNavContext.collapse === 'function') {
            primaryNavContext.collapse();
        }

        onClick?.(e);
    };

    const controlProps = url
        ? {
                component: 'a',
                href: url,
                rel: 'noopener noreferrer',
                target: '_blank',
            } as const
        : {
                component: 'button',
                type: 'button',
            } as const;

    return (
        <li
            className={clsx(
                ['moonstone-primaryNavItem', styles['moonstone-primaryNavItem']],
                isSelected && ['moonstone-selected', styles['moonstone-selected']],
                className,
            )}
            title={label}
            {...props}
        >
            {/* The one interactive element of the item, a link or a button: it takes the description of a Tooltip */}
            <Typography
                {...controlProps}
                aria-current={isSelected ? 'page' : undefined}
                aria-describedby={ariaDescribedBy}
                className={clsx(styles.primaryNavItem_control, url && 'moonstone-primaryNavItem_linkItem')}
                onClick={handleClick}
            >
                <span className={clsx('moonstone-primaryNavItem_iconContainer', styles['moonstone-primaryNavItem_iconContainer'])}>
                    {icon && <icon.type {...icon.props} size="big"/>}
                </span>
                <span className={clsx('moonstone-primaryNavItem_textContainer', styles['moonstone-primaryNavItem_textContainer'])}>
                    <Typography
                        isNowrap
                        className={clsx('moonstone-primaryNavItem_label', styles['moonstone-primaryNavItem_label'])}
                        component="span"
                        variant={url ? 'body' : 'subheading'}
                    >
                        {label}
                    </Typography>
                    {subtitle && (
                        <Typography
                            isNowrap
                            className={clsx(
                                ['moonstone-primaryNavItem_label', styles['moonstone-primaryNavItem_label']],
                                ['moonstone-subtitle', styles['moonstone-subtitle']],
                            )}
                            component="span"
                            variant="caption"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </span>
                {/* Inside the control so the count is part of its accessible name */}
                {badge && (
                    <badge.type
                        className={clsx('moonstone-primaryNavItem_badge', styles['moonstone-primaryNavItem_badge'])}
                        color="danger"
                        label={badge.props.label}
                        type="round"
                    />
                )}
            </Typography>

            {button && (
                <div className={clsx('moonstone-primaryNavItem_buttonContainer', styles['moonstone-primaryNavItem_buttonContainer'])}>
                    {button}
                </div>
            )}
        </li>
    );
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
