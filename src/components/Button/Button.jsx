import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import classnames from 'clsx';

export const ButtonSizes = ['small', 'medium', 'big'];
export const ButtonVariants = ['default', 'primary', 'ghost'];
export const ButtonColors = ['accent', 'inherit', 'success', 'warning', 'danger', 'reverse'];

export const Button = ({label, onClick, size, isDisabled, icon, variant, color, ...props}) => {
    return (
        <button
            className={classnames(styles.button, styles[variant], styles[color], (icon === null) ? null : styles.icon)}
            type="button"
            onClick={onClick}
            {...props}
        >
            <i>{icon}</i>{label}
        </button>
    );
};

Button.defaultProps = {
    label: '',
    size: 'medium',
    icon: null,
    variant: 'default',
    isDisabled: false,
    color: 'inherit'
};

Button.propTypes = {
    /**
     * Button label
     */
    label: PropTypes.string,

    /**
     * Icon size
     */
    size: PropTypes.oneOf(ButtonSizes),

    /**
     * Icon name, if it's empty the button has no icon
     */
    icon: PropTypes.element,

    /**
     * Button style
     */
    variant: PropTypes.oneOf(ButtonVariants),

    /**
     * Button color
     */
    color: PropTypes.oneOf(ButtonColors),

    /**
     * Is button disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * Function trigger on click
     */
    onClick: PropTypes.func.isRequired
};
