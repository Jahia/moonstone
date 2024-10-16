import React, {useContext} from 'react';
import clsx from 'clsx';
import './PrimaryNavItem.scss';
import {ItemProps, ItemTypeResolverProps, PrimaryNavItemProps} from './PrimaryNavItem.types';
import {Typography} from '~/components/Typography';
import {PrimaryNavContext} from '../PrimaryNav.context';

// Internal component
const Item: React.FC<ItemProps> = ({icon, label, textVariant, subtitle, button}) => (
    <>
        <div className={clsx('moonstone-primaryNavItem_content')}>
            <div className={clsx('moonstone-primaryNavItem_iconContainer')}>
                {icon && <icon.type {...icon.props} size="big"/>}
            </div>

            <div className={clsx('moonstone-primaryNavItem_textContainer')}>
                <Typography isNowrap
                            variant={textVariant}
                            component="span"
                            className={clsx('moonstone-primaryNavItem_label')}
                >
                    {label}
                </Typography>
                {subtitle && (
                    <Typography
                        isNowrap
                        component="div"
                        variant="caption"
                        className={clsx('moonstone-primaryNavItem_label', 'moonstone-subtitle')}
                    >
                        {subtitle}
                    </Typography>
                )}
            </div>
        </div>
        {button && (
            <div className={clsx('moonstone-primaryNavItem_buttonContainer')}>
                {button}
            </div>
        )}
    </>
);

// Internal component
const ItemTypeResolver: React.FC<ItemTypeResolverProps> = ({url, icon, label, subtitle, button}) => {
    if (url) {
        return (
            <a className={clsx('moonstone-primaryNavItem', 'moonstone-primaryNavItem_linkItem')}
               href={url}
               target="_blank"
               rel="noopener noreferrer"
            >
                <Item icon={icon} label={label} subtitle={subtitle} textVariant="body" button={button}/>
            </a>
        );
    }

    return (
        <Item icon={icon} label={label} subtitle={subtitle} textVariant="subheading" button={button}/>
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

    return (
        <li
            aria-current={isSelected}
            className={clsx(
                'moonstone-primaryNavItem',
                {'moonstone-selected': isSelected},
                className
            )}
            title={label}
            onClick={e => {
                primaryNavContext.collapse();
                onClick(e);
            }}
            {...props}
        >
            <ItemTypeResolver icon={icon} label={label} subtitle={subtitle} url={url} button={button}/>

            {badge && (
                <badge.type
                    className={clsx('moonstone-primaryNavItem_badge')}
                    color="danger"
                    type="round"
                    label={badge.props.label}
                />
            )}
        </li>
    );
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
