import React from 'react';

export type CheckboxProps = {
    /**
     * Whether the checkbox should be checked by default (uncontrolled)
     */
    defaultSelected?: boolean;

    /**
     * Whether the checkbox should be checked (controlled)
     */
    isSelected?: boolean;

    /**
     * Indeterminism is for presentation only. It's to show the user that some other checkboxes
     * in the same group have been selected, but not all
     */
    isIndeterminate?: boolean;

    /**
     * Identifier added to the input element
     */
    id?: string;

    /**
     * The value of the input element, used when submitting an HTML form
     */
    value?: string;

    /**
     * The name of the input element, used when submitting an HTML form
     */
    name?: string;

    /**
     * Additional classname(s)
     */
    className?: string;

    /**
     * Whether the checkbox should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the checkbox can be selected but not changed by the user
     */
    isReadOnly?: boolean;

    /**
     * Function triggered on change of the checkbox value
     */
    onChange?: (isSelected: boolean) => void;

    /**
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;
}
