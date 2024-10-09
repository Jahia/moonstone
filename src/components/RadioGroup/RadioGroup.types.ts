import * as React from 'react';
import {RadioItemProps} from '~/components/RadioGroup/RadioItem/RadioItem.types';

type BasicRadioGroupProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onChange'> & {
    /**
     * RadioItem's input name
     */
    name: string;

    /**
     * Content of RadioItem component (We expected at least 2 items)
     */
    children: React.ReactElement<RadioItemProps>[];

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function triggered on change of the RadioItem value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the radio can be selected but not changed by the user
     */
    isReadOnly?: boolean;
}

type ControlledProps = {
    /**
     * The value of selected RadioItem. Define the component as controlled when it set (Controlled)
     */
    value?: string;
}

type UncontrolledProps = {
    /**
     * The default value of the selected RadioItem (Uncontrolled)
     */
    defaultValue?: string;
}

export type RadioGroupProps = BasicRadioGroupProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledRadioGroupProps = BasicRadioGroupProps & ControlledProps;
export type UncontrolledRadioGroupProps = BasicRadioGroupProps & UncontrolledProps;

export type RadioGroupContextProps = {
    /**
     * RadioItem's input name
     */
    name: string | undefined;

    /**
     * Function triggered on change of the RadioItem value
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

    /**
     * RadioItem's value
     */
    value: string;

    /**
     * Whether all radio items should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether all radio items should be read-only
     */
    isReadOnly?: boolean;
}

