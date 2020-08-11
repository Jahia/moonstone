import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './Separator.scss';

export const SeparatorSpacings = ['none', 'small', 'medium', 'big'];
export const SeparatorSizes = ['medium', 'large', 'full'];
export const SeparatorVariants = ['horizontal', 'vertical'];
export const SeparatorInvisible = ['firstChild', 'lastChild', 'onlyChild', 'firstOrLastChild'];

export const Separator = ({size, spacing, variant, className, invisible, ...props}) => {
    return (
        <hr {...props}
            className={classnames(
                'moonstone-separator',
                `moonstone-separator_${variant}`,
                `moonstone-size_${size}`,
                `moonstone-spacing_${spacing}`,
                invisible && `moonstone-invisible_${invisible}`,
                className
            )}
        />
    );
};

Separator.defaultProps = {
    variant: 'horizontal',
    size: 'full',
    spacing: 'small',
    invisible: null
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
     * Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild
     * If you don't pass this property then the separator will always be visible
     */
    invisible: PropTypes.oneOf(SeparatorInvisible),

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Separator.displayName = 'Separator';
