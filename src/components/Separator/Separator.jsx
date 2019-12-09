import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Separator.scss';

export const spacings = ['small', 'medium', 'big'];
export const sizes = ['medium', 'large', 'full'];

export const Separator = ({size, spacing}) => {
    return (
        <hr className={classnames(
            styles.separator,
            styles[`size_${size}`],
            styles[`spacing_${spacing}`]
        )}/>
    );
};

Separator.defaultProps = {
    size: 'full',
    spacing: 'small'
};

Separator.propTypes = {
    /**
     * Vertical spacings
     */
    spacing: PropTypes.oneOf(spacings),
    /**
     * Size
     */
    size: PropTypes.oneOf(sizes)
};
