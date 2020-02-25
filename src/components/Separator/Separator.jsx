import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Separator.scss';

export const SeparatorSpacings = ['small', 'medium', 'big'];
export const SeparatorSizes = ['medium', 'large', 'full'];
export const SeparatorVariants = ['horizontal', 'vertical'];

export const Separator = ({size, spacing, variant, className, ...props}) => {
    return (
        <hr {...props}
            className={classnames(
                styles.separator,
                styles[`separator_${variant}`],
                styles[`size_${size}`],
                styles[`spacing_${spacing}`],
                className
            )}
        />
    );
};

Separator.defaultProps = {
    variant: 'horizontal',
    size: 'full',
    spacing: 'small'
};

Separator.propTypes = {
    /**
     * Variants: Horizontal or Vertical
     */
    variant: PropTypes.oneOf(SeparatorVariants),

    /**
     * Vertical spacings
     */
    spacing: PropTypes.oneOf(SeparatorSpacings),

    /**
     * Size
     */
    size: PropTypes.oneOf(SeparatorSizes),

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Separator.displayName = 'Separator';
