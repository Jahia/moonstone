import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import classnames from 'clsx';
import {Typography} from '../Typography';

export const buttonSizes = ['small', 'default', 'big'];
export const buttonVariants = ['default', 'ghost', 'outlined'];
export const buttonColors = ['default', 'accent', 'danger'];

export const Button = ({label, onClick, size, isReversed, isDisabled, icon, variant, color, className, ...props}) => {
    let typoWeight = 'default';
    if (size === 'small') {
        typoWeight = 'light';
    }

    if (size === 'big') {
        typoWeight = 'semiBold';
    }

    return (
        <button
            className={
                classnames(
                    styles.button,
                    styles[`size_${size}`],
                    styles[`variant_${variant}`],
                    styles[`color_${color}`],
                    {[styles.icon]: (icon && label)},
                    {[styles['icon-button']]: !label},
                    {[styles.reverse]: isReversed},
                    className
                )
            }
            type="button"
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}
            {label &&
                <Typography isNowrap
                            component="span"
                            variant="button"
                            isUpperCase={size === 'big'}
                            weight={typoWeight}
                >
                    {label}
                </Typography>}
        </button>
    );
};

Button.defaultProps = {
    label: '',
    size: 'default',
    icon: null,
    variant: 'default',
    isDisabled: false,
    color: 'default',
    isReversed: false,
    className: null
};

Button.propTypes = {
    /**
     * Button label
     */
    label: PropTypes.string,

    /**
     * Icon size
     */
    size: PropTypes.oneOf(buttonSizes),

    /**
     * Icon name, if it's empty the button has no icon
     */
    icon: PropTypes.element,

    /**
     * Button style
     */
    variant: PropTypes.oneOf(buttonVariants),

    /**
     * Button color
     */
    color: PropTypes.oneOf(buttonColors),

    /**
     * Is button disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * Function trigger on click
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Is button color reversed
     */
    isReversed: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Button.displayName = 'Button';
