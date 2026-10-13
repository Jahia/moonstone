import clsx from 'clsx';
import React, { useContext } from 'react';

import { PrimaryNavContext } from '../PrimaryNav.context';
import { Typography } from '~/components';

import type { ItemProps, ItemTypeResolverProps, PrimaryNavItemProps } from './PrimaryNavItem.types';

import styles from './PrimaryNavItem.module.scss';

// Internal component
const Item: React.FC<ItemProps> = ({
    icon, label, textVariant, subtitle,
}) => (
    <span className={clsx('moonstone-primaryNavItem_content', styles['moonstone-primaryNavItem_content'])}>
        <span className={clsx('moonstone-primaryNavItem_iconContainer', styles['moonstone-primaryNavItem_iconContainer'])}>
            {icon && <icon.type {...icon.props} size="big"/>}
        </span>

        <span className={clsx('moonstone-primaryNavItem_textContainer', styles['moonstone-primaryNavItem_textContainer'])}>
            <Typography
                isNowrap
                className={clsx('moonstone-primaryNavItem_label', styles['moonstone-primaryNavItem_label'])}
                component="span"
                variant={textVariant}
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
    </span>
);

// Internal component: the one interactive element of the item, a link or a button
const ItemTypeResolver: React.FC<ItemTypeResolverProps> = ({
    url, icon, label, subtitle, isSelected, onClick,
}) => {
    const ariaCurrent = isSelected ? 'page' : undefined;

    if (url) {
        return (
            <a
                aria-current={ariaCurrent}
                className={clsx(
                    ['moonstone-primaryNavItem_control', styles['moonstone-primaryNavItem_control']],
                    ['moonstone-primaryNavItem_linkItem', styles['moonstone-primaryNavItem_linkItem']],
                )}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                onClick={onClick}
            >
                <Item
                    icon={icon}
                    label={label}
                    subtitle={subtitle}
                    textVariant="body"
                />
            </a>
        );
    }

    return (
        <button
            aria-current={ariaCurrent}
            className={clsx('moonstone-primaryNavItem_control', styles['moonstone-primaryNavItem_control'])}
            type="button"
            onClick={onClick}
        >
            <Item
                icon={icon}
                label={label}
                subtitle={subtitle}
                textVariant="subheading"
            />
        </button>
    );
};

export const PrimaryNavItem: React.FC<PrimaryNavItemProps> = ({
    label = '',
    icon = null,
    className = null,
    subtitle = null,
    url = null,
    button = null,
    isSelected = false,
    onClick = () => undefined,
    badge = null,
    ...props
}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    const handleClick = (e: React.MouseEvent) => {
        if (typeof primaryNavContext.collapse === 'function') {
            primaryNavContext.collapse();
        }

        onClick(e);
    };

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
            <ItemTypeResolver
                isSelected={isSelected}
                icon={icon}
                label={label}
                subtitle={subtitle}
                url={url}
                onClick={handleClick}
            />

            {button && (
                <div className={clsx('moonstone-primaryNavItem_buttonContainer', styles['moonstone-primaryNavItem_buttonContainer'])}>
                    {button}
                </div>
            )}

            {badge && (
                <badge.type
                    className={clsx('moonstone-primaryNavItem_badge', styles['moonstone-primaryNavItem_badge'])}
                    color="danger"
                    label={badge.props.label}
                    type="round"
                />
            )}
        </li>
    );
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
