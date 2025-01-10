import * as React from 'react';

type BaseProps = {
    /**
     * Dynamic fieldset label
     */
    label: string;

    /**
     * Dynamic fieldset's id
     */
    id: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Dynamic fieldset helper
     */
    helper?: string;

    /**
     * Define fieldset field(s)
     */
    children: React.ReactElement;

    /**
     * Dynamic fieldset action(s)
    */
   buttons?: React.ReactElement;
};

type ControlledProps = {
    /**
     * Whether dynamic fieldset is open or not
     */
    isOpen: boolean;

    /**
     * Dynamic fieldset's function onChange
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type UncontrolledProps = {
    /**
     * Whether dynamic fieldset is open by default
     */
    defaultOpen?: boolean;

    /**
     * Dynamic fieldset's function onChange
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type DynamicFieldsetProps = BaseProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledDynamicFieldsetProps = BaseProps & ControlledProps;
export type UncontrolledDynamicFieldsetProps = BaseProps & UncontrolledProps;
