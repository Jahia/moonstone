import React from 'react';

export type FieldsetProps = {
    /**
     * Fieldset label
     */
    label: string;

    /**
     * Fieldset's id
     */
    id: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Fieldset helper
     */
    helper?: string;

    /**
     * Define fieldset field(s)
     */
    children: React.ReactNode;

    /**
     * Fieldset action(s)
     */
    buttons?: React.ReactElement;
};
