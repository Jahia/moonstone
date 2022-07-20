import React from 'react';

export type SearchContextInputProps = {
    /**
     * Slot to display a dropdown to manage search context
     */
     searchContext: React.ReactElement;

    /**
     * Default value when the component is rendered (Uncontrolled)
     */
     defaultValue?: string;

    /**
     * Value to exist in the input field (Controlled)
     */
     value?: string;

    /**
     * ID of the input
     */
    id?: string,

    /**
     * Initial placeholder text to appear in the input field
     */
    placeholder?: string;

    /**
     * Whether the input should be focused when displayed.
     */
    focusOnField?: boolean;

    /**
     * Any additional custom classes to apply to the component
     */
    className?: string;

    /**
     * Function - when passed in, the Cancel icon appears at the end of the input and its click event is passed back when the Cancel icon is clicked
     */
    onClear?: React.MouseEventHandler;

    /**
     * Function triggered on change of the input value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on blur of the input (i.e., focussing away from the input)
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on focus of the input
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
