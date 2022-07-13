import React from 'react';
import {Dropdown} from '~/components/Dropdown/';

type InputVariant = 'text' | 'search';
export enum InputVariants {
    Text = 'text',
    Search = 'search'
}

type InputSize = 'default' | 'big';
export enum InputSizes {
    Default = 'default',
    Big = 'big'
}

export type InputProps = {
    /**
     * Variant of the input to use
     */
     variant?: InputVariant;

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
     * Role of the input
     */
    role?: string,

    /**
     * Initial placeholder text to appear in the input field
     */
    placeholder?: string;

    /**
     * Whether the input should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the input should be read-only. It's still submittable.
     */
    isReadOnly?: boolean;

    /**
     * Whether the input should be focused when displayed.
     */
    focusOnField?: boolean;

    /**
     * Any additional custom classes to apply to the component
     */
    className?: string;

    /**
     * Whether the size of the input should be default or big
     */
    size?: InputSize;

    /**
     * Which icon to use at the beginning of the input
     */
    icon?: React.ReactElement;

    /**
     * Whether the input should have a clear button. If onClear is not specified, clear button will set the value to empty value
     */
    isShowClearButton?: boolean;

    /**
     * Function - when passed in, the Cancel icon appears at the end of the input and its click event is passed back when the Cancel icon is clicked
     */
    onClear?: React.MouseEventHandler;

    /**
     * Slot to display a dropdown to manage search context, it is only avaiable for the search variant
     */
    searchContext?: React.ReactElement;

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
