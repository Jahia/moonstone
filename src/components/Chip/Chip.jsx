import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

export const colors = ['default', 'accent', 'success', 'warning', 'danger'];

export const Chip = ({label, color, icon, className, ...props}) => (
    <div className={classnames(styles.chip, styles[`color_${color}`], className)} {...props}>
        {icon && <>{icon}</>}
        {label && <Typography isNowrap component="span" variant="caption" weight="semiBold">{label}</Typography>}
    </div>
);

Chip.defaultProps = {
    label: '',
    color: 'default',
    icon: null
};

Chip.propTypes = {
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
    icon: PropTypes.node,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Chip.displayName = 'Chip';
