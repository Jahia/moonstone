import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

export const colors = ['default', 'accent', 'success', 'warning', 'danger'];

export const Chip = ({label, color, icon, ...props}) => (
    <div className={classnames(styles.chip, styles[`color_${color}`])} {...props}>
        {icon && <>{icon}</>}{label && <Typography isNowrap component="span">{label}</Typography>}
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
    icon: PropTypes.node
};

Chip.displayName = 'Chip';
