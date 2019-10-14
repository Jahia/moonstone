import React from 'react';

import PropTypes from 'prop-types';
import styles from './PrimaryNavItem.scss';
import classnames from 'classnames';
import {Typography} from '../Typography';

export const PrimaryNavItem = ({children, className, isSelected, icon, ...props}) => (
    <li
        {...props}
        className={classnames(
            styles.navItem,
            {[styles.selected]: isSelected},
            className
        )}
    >
        <div className={classnames(styles.navItem_iconContainer)}>{icon}</div>
        <Typography component="div">{children}</Typography>
    </li>
);

PrimaryNavItem.defaultProps = {
    children: '',
    className: '',
    isSelected: false,
    hasNotification: false,
    variant: 'button'
};

PrimaryNavItem.propTypes = {
    /**
     * Children
     */
    children: PropTypes.string,

    /**
     * Icon node from our icon library
     */
    icon: PropTypes.element,

    /**
     * Element is selected or not
     */
    isSelected: PropTypes.bool,

    /**
     * Element is selected or not
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Element has notification
     */
    hasNotification: PropTypes.bool,

    /**
     * Element has notification
     */
    variant: PropTypes.oneOf(['button', 'link']),

    /**
     * Additional classname
     */
    className: PropTypes.string
};
