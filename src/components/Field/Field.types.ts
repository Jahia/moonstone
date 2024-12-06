import * as React from 'react';

export type FieldProps = {
    /**
     * Field label
     */
    label: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Field chip(s)
     */
    chips?: React.ReactElement;

    /**
     * Field helper
     */
    helper?: string;

    /**
     * Define field selector(s)
     */
    children: React.ReactElement;

    /**
     * Field action(s)
     */
    buttons?: React.ReactElement;

    /**
     * Display as error
     */
    hasError?: boolean;

    /**
     * Error message
     */
    errorMessage?: string;
};
