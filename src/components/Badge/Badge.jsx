import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

export const badgeColors = ['accent', 'success', 'danger'];
export const badgeTypes = ['round', 'diamond'];

export const Badge = ({label, color, type, className, ...props}) => {
    const classNameProps = classnames(
        styles.badge,
        styles[`color_${color}`],
        styles[type],
        className
    );

    if (type === 'round') {
        return (
            <Typography isNowrap component="span" variant="caption" weight="bold" className={classNameProps} {...props}>
                {label}
            </Typography>
        );
    }

    return (
        <div className={classNameProps} {...props}/>
    );
};

Badge.defaultProps = {
    label: null,
    color: badgeColors[0],
    type: badgeTypes[0]
};

Badge.propTypes = {
    /**
     * Badge label, only for type default
     */
    label: PropTypes.string,

    /**
     * Badge color
     */
    color: PropTypes.oneOf(badgeColors),

    /**
     * Badge type
     */
    type: PropTypes.oneOf(badgeTypes),

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Badge.displayName = 'Badge';
