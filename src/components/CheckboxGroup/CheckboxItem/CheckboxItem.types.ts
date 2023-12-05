import React from 'react';

export type CheckboxItemProps = {
    /**
     * Identifier added to the input element
     */
    id: string;

    /**
     * The name of the input element, used to group values and on submitting HTML form
     */
    name?: string;

    /**
     * Checkbox label
     */
    label: string;

    /**
     * Whether the checkbox should be checked by default. (uncontrolled)
     */
    defaultChecked?: boolean;

    /**
     * Whether the checkbox should be checked. Must be used with onChange function to update the checked state (controlled)
     */
    checked?: boolean;

    /**
     * The value of the input element, used when submitting an HTML form
     */
    value: string;

    /**
     * Checkbox description
     */
    description?: string;

    /**
     * Additional classname(s)
     */
    className?: string;

    /**
     * Whether the CheckboxItem should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the CheckboxItem can be selected but not changed by the user
     */
    isReadOnly?: boolean;

    /**
     * Function triggered on focus of the CheckboxItem
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the CheckboxItem loses focus
     */
    onBlur?: React.FocusEventHandler;

    /**
     * Function triggered when the CheckboxItem changes state
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: String, checked: boolean) => void;
}
