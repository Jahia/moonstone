import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

const DEFAULT_OPTION_INDEX = 0;

export const colors = ['default', 'accent', 'success', 'warning', 'danger'];

export const sizes = ['default', 'small', 'big'];

export const types = ['round', 'diamond'];

export const Badge = ({label, color, type, size, className, ...props}) => {
    const classNameProps = classnames(styles.badge, styles[`${type}_${size}`], styles[`color_${color}`], className);

    if (type === types[DEFAULT_OPTION_INDEX]) {
        return (
            <Typography isNowrap component="span" className={classNameProps} {...props}>
                {label}
            </Typography>
        );
    }

    return (
        <span className={classNameProps} {...props}/>
    );
};

Badge.defaultProps = {
    label: null,
    color: colors[DEFAULT_OPTION_INDEX],
    type: types[DEFAULT_OPTION_INDEX],
    size: types[DEFAULT_OPTION_INDEX]
};

Badge.propTypes = {
    /**
     * Badge label, only for type round
     */
    label: PropTypes.string,

    /**
     * Badge color
     */
    color: PropTypes.oneOf(colors),

    /**
     * Badge type
     */
    type: PropTypes.oneOf(types),

    /**
     * Badge size
     */
    size: PropTypes.oneOf(sizes),

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Badge.displayName = 'Badge';
