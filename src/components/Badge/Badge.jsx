import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

export const colors = ['default', 'accent', 'success', 'warning', 'danger'];

export const Badge = ({label, color, icon}) => (
    <span className={classnames(styles.badge, styles[`color_${color}`])}>
        {icon && <i>{icon}</i>}<Typography isNowrap component="span">{label}</Typography>
    </span>
);

Badge.defaultProps = {
    label: '',
    color: 'default',
    icon: null
};

Badge.propTypes = {
    /**
     * Badge label
     */
    label: PropTypes.string,

    /**
     * Badge color
     */
    color: PropTypes.oneOf(colors),

    /**
     * Badge icon
     */
    icon: PropTypes.node
};

Badge.displayName = 'Badge';
