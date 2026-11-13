import React from 'react';

export type FieldsetProps = Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'children' | 'className' | 'id' | 'onChange'> & {
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
    helper?: React.ReactNode;

    /**
     * Define fieldset field(s)
     */
    children: React.ReactNode;

    /**
     * Fieldset action(s)
     */
    buttons?: React.ReactElement;
};
