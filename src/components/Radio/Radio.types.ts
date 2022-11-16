import React from 'react';

export type RadioProps = {
    /**
     * Identifier added to the input element
     */
    id: string;

    /**
     * Whether the radio should be checked (controlled)
     */
    checked?: boolean;

    /**
     * Whether the radio should be checked - default value (uncontrolled)
     */
    defaultChecked?: boolean;

    /**
     * Radio label
     */
    label: string;

    /**
     * Radio description (not mandatory)
     */
    description?: string;

    /**
     * The value of the input element, used when submitting an HTML form
     */
    value: string;

    /**
     * The name of the input element, used when submitting an HTML form
     */
    name: string;

    /**
     * Additional classname(s)
     */
    className?: string;

    /**
     * Whether the radio should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the radio can be selected but not changed by the user
     */
    isReadOnly?: boolean;

    /**
     * Function triggered on change of the radio value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on focus of the radio value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the radio value loses focus
     */
    onBlur?: React.FocusEventHandler;
}
