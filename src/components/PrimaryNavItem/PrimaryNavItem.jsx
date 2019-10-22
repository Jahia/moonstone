import React from 'react';

import PropTypes from 'prop-types';
import styles from './PrimaryNavItem.scss';
import classnames from 'classnames';
import {Typography} from '../Typography';

export const PrimaryNavItem = ({label, className, isSelected, icon, ...props}) => (
    <li
        {...props}
        className={classnames(
            styles.primaryNavItem,
            {[styles.selected]: isSelected},
            className
        )}
    >
        <div className={classnames(styles.primaryNavItem_iconContainer)}>{icon}</div>
        <Typography component="span">{label}</Typography>
    </li>
);

PrimaryNavItem.defaultProps = {
    label: '',
    icon: null,
    subtitle: null,
    button: null,
    isSelected: false,
    badge: null,
    variant: 'button',
    className: ''
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
     * Element has notification
     */
    variant: PropTypes.oneOf(['button', 'link']),

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Element is selected or not
     */
    onClick: PropTypes.func
};
