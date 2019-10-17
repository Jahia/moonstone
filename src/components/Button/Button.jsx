import React from 'react';
import PropTypes from 'prop-types';

export const ButtonSizes = ['small', 'medium', 'big'];
export const ButtonVariants = ['default', 'primary', 'ghost'];
export const ButtonColors = ['accent', 'inherit', 'success', 'warning', 'danger', 'reverse'];

// TODO implement the component !
// eslint-disable-next-line
export const Button = ({label, onClick, size, isDisabled, icon, variant, color}) => {
    return (
        <button type="button"/>
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
