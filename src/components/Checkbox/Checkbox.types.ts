import React from 'react';

export type CheckboxProps = {
    isDefaultChecked?: boolean;
    isIndeterminate?: boolean;

    /**
     * Identifiant added to the input element
     */
    id?: string;

    /**
     * Value to exist in the input field
     */
    value?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Whether the checkbox should be disabled
     */
    isDisabled?: boolean;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

    /**
     * Function triggered on change of the checkbox value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, {}) => void;
}
