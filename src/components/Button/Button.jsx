import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({onClick, size, isDisabled, icon, variant, color}) => {
    console.log({onClick, size, isDisabled, icon, variant, color});
    return (
        <button type="button"/>
    );
};

Button.defaultProps = {
    size: 'medium',
    isDisabled: false,
    icon: null,
    variant: 'default',
    color: 'inherit'
};

Button.propTypes = {
    /**
     * Function trigger on click
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Icon size
     */
    size: PropTypes.oneOf(['small', 'medium', 'big']),

    /**
     *
     */
    isDisabled: PropTypes.bool,

    /**
     * Icon name, if it's empty the button has no icon
     */
    icon: PropTypes.element,

    /**
     * Button style
     */
    variant: PropTypes.oneOf(['default', 'primary', 'ghost']),

    /**
     * Button color
     */
    color: PropTypes.oneOf(['accent', 'inherit', 'success', 'warning', 'danger', 'reverse'])
};
