import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrimaryNavItem.scss';
import classnames from 'clsx';
import {Typography, TypographyVariants} from '~/components/Typography';

// Internal component
const Item = ({icon, label, textVariant, subtitle}) => (
    <>
        <div className={classnames(styles.primaryNavItem_iconContainer)}>{icon}</div>

        <div className={classnames(styles.primaryNavItem_textContainer)}>
            <Typography isNowrap
                        variant={textVariant}
                        component="span"
                        className={classnames(styles.primaryNavItem_label)}
            >
                {label}
            </Typography>
            {subtitle &&
            <Typography isNowrap component="div" variant="subtitle" className={classnames(styles.primaryNavItem_label)}>
                {subtitle}
            </Typography>}
        </div>
    </>
);

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    textVariant: PropTypes.oneOf(TypographyVariants),
    subtitle: PropTypes.string
};

// Internal component
const ItemTypeResolver = ({url, icon, label, subtitle}) => {
    if (url) {
        return (
            <a className={classnames(styles.primaryNavItem, styles.primaryNavItem_linkItem)} href={url} target="_blank" rel="noopener noreferrer">
                <Item icon={icon} label={label} subtitle={subtitle} textVariant="caption"/>
            </a>
        );
    }

    return (
        <Item icon={icon} label={label} subtitle={subtitle} textVariant="regular"/>
    );
};

ItemTypeResolver.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    subtitle: PropTypes.string
};

export const PrimaryNavItem = ({label, className, isSelected, icon, ...props}) => (
    <li
        className={classnames(
            styles.primaryNavItem,
            {[styles.selected]: isSelected},
            className
        )}
        onClick={props.onClick}
    >
        <ItemTypeResolver icon={icon} label={label} subtitle={props.subtitle} url={props.url}/>
    </li>
);

PrimaryNavItem.defaultProps = {
    label: '',
    icon: null,
    subtitle: null,
    button: null,
    isSelected: false,
    badge: null,
    className: '',
    url: null
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
     * Element has badge
     */
    badge: PropTypes.string,

    /**
     * URL to navigate to. If this is used <a> element will be returned with target set to _blank.
     */
    url: PropTypes.string,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Element is selected or not
     */
    onClick: PropTypes.func
};
