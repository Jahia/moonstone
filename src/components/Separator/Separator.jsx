import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Separator.scss';

export const SeparatorSpacings = ['small', 'medium', 'big'];
export const SeparatorSizes = ['medium', 'large', 'full'];

export const Separator = ({size, spacing, ...props}) => {
    return (
        <hr {...props}
            className={classnames(
                styles.separator,
                styles[`size_${size}`],
                styles[`spacing_${spacing}`]
            )}
        />
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
    spacing: PropTypes.oneOf(SeparatorSpacings),
    /**
     * Size
     */
    size: PropTypes.oneOf(SeparatorSizes)
};

Separator.displayName = 'Separator';
