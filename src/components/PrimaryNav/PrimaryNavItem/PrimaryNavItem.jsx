import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './PrimaryNavItem.scss';
import clsx from 'clsx';
import {Typography, variants as typographyVariants} from '~/components/Typography';
import {PrimaryNavContext} from '../PrimaryNav.context';

// Internal component
const Item = ({icon, label, textVariant, subtitle, button}) => (
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
                {subtitle &&
                <Typography isNowrap
                            component="div"
                            variant="caption"
                            className={clsx('moonstone-primaryNavItem_label', 'moonstone-subtitle')}
                >
                    {subtitle}
                </Typography>}
            </div>
        </div>
        {button &&
        <div className={clsx('moonstone-primaryNavItem_buttonContainer')}>
            {button}
        </div>}
    </>
);

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    textVariant: PropTypes.oneOf(typographyVariants),
    subtitle: PropTypes.string,
    button: PropTypes.node
};

// Internal component
const ItemTypeResolver = ({url, icon, label, subtitle, button}) => {
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
        <Item icon={icon} label={label} subtitle={subtitle} textVariant="subheading" weight="bold" button={button}/>
    );
};

ItemTypeResolver.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    subtitle: PropTypes.string,
    button: PropTypes.node
};

export const PrimaryNavItem = ({label, icon, className, subtitle, url, button, isSelected, onClick, badge, ...props}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    return (
        <li
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

            {badge &&
            <badge.type className={clsx('moonstone-primaryNavItem_badge')}
                        color="danger"
                        type="round"
                        label={badge.props.label}/>}
        </li>
    );
};

PrimaryNavItem.defaultProps = {
    label: '',
    icon: null,
    subtitle: null,
    button: null,
    isSelected: false,
    badge: null,
    className: '',
    url: null,
    onClick: () => {}
};

PrimaryNavItem.propTypes = {
    /**
     * Label
     */
    label: PropTypes.string,

    /**
     * Icon node from our icon library
     */
    icon: PropTypes.element,

    /**
     * Subtitle
     */
    subtitle: PropTypes.string,

    /**
     * Optional button
     */
    button: PropTypes.node,

    /**
     * Element is selected or not
     */
    isSelected: PropTypes.bool,

    /**
     * Badge
     */
    badge: PropTypes.element,

    /**
     * URL to navigate to. If this is used <a> element will be returned with target set to _blank.
     */
    url: PropTypes.string,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function triggered on click
     */
    onClick: PropTypes.func
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
