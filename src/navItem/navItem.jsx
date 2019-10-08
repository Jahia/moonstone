import React from 'react';

import PropTypes from 'prop-types';
import styles from './navItem.scss';
import classnames from 'classnames';
import {Typography} from '../typography';

export const NavItem = ({children, className, selected, icon, ...props}) => (
    <li
        {...props}
        className={classnames(
            styles.navItem,
            {[styles.selected]: selected},
            className
        )}
    >
        <div className={classnames(styles.navItem_iconContainer)}>{icon}</div>
        <Typography component="div">{children}</Typography>
    </li>
);

NavItem.defaultProps = {
    children: '',
    className: '',
    selected: false
};

NavItem.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    selected: PropTypes.bool,
    className: PropTypes.string
};
