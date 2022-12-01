import React from 'react';

export type RadioItemProps = React.ComponentPropsWithoutRef<'label'> & {
    /**
     * Identifier added to the input element
     */
    id: string;

    /**
     * Radio label
     */
    label: string;

    /**
     * The value of the input element, used when submitting an HTML form
     */
    value: string;

    /**
     * Radio description
     */
    description?: string;

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
     * Function triggered on focus of the radio value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the radio value loses focus
     */
    onBlur?: React.FocusEventHandler;
}
