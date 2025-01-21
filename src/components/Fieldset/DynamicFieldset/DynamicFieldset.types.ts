import * as React from 'react';
import type {FieldsetProps} from '../Fieldset.types';

type BaseProps = Omit<FieldsetProps, 'children'> & {
    /**
     * Define fieldset field(s)
     */
    children?: React.ReactElement;
};

type ControlledProps = {
    /**
     * Whether dynamic fieldset is checked or not
     */
    checked: boolean;

    /**
     * Dynamic fieldset's function onChange
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type UncontrolledProps = {
    /**
     * Whether dynamic fieldset is checked by default
     */
    defaultChecked?: boolean;

    /**
     * Dynamic fieldset's function onChange
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type DynamicFieldsetProps = BaseProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledDynamicFieldsetProps = BaseProps & ControlledProps;
export type UncontrolledDynamicFieldsetProps = BaseProps & UncontrolledProps;
