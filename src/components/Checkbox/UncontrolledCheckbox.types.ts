export type AriaChecked = 'true' | 'false' | 'mixed';

export type UncontrolledCheckboxProps = {
    /**
     * Whether the checkbox should be checked
     */
    checked?: boolean;

    /**
     * Indeterminism is for presentation only. It's to show the user that some other checkboxes
     * in the same group have been selected, but not all
     */
    indeterminate?: boolean;

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
    disabled?: boolean;

    /**
     * Whether the checkbox can be selected but not changed by the user
     */
    readonly?: boolean;
};
