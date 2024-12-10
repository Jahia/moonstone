import * as React from 'react';
import type {CheckboxProps} from '~/components/Checkbox/Checkbox.types';

export type FieldBooleanProps = {
    /**
     * FieldBoolean label
     */
    label: string;

    /**
     * Field's id
     */
    id: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * FieldBoolean chip(s)
     */
    chips?: React.ReactElement;

    /**
     * FieldBoolean helper
     */
    helper?: string;

    /**
     * Display as error
     */
    hasError?: boolean;

    /**
     * Error message
     */
    errorMessage?: string;

    /**
     * FieldBoolean buttons
     */
    buttons?: React.ReactElement;

    /**
     * FieldBoolean's checkbox props
     */
    checkboxAttributes?: CheckboxProps;
};
