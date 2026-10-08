import React from 'react';

import type { RadioItemProps } from '~/components/RadioGroup/RadioItem/RadioItem.types';

type BasicRadioGroupProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onChange'> & {
    /**
     * Name shared by the radio inputs of the group.
     */
    name: string;

    /**
     * The RadioItem components of the group, at least two.
     */
    children: React.ReactElement<RadioItemProps>[];

    /**
     * Additional class name.
     */
    className?: string;

    /**
     * Called when the user selects an option, with the option's `value`.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

    /**
     * Whether every option of the group is disabled. Overrides each RadioItem's `isDisabled`.
     */
    isDisabled?: boolean;

    /**
     * Whether every option of the group is read-only. Overrides each RadioItem's `isReadOnly`.
     */
    isReadOnly?: boolean;
};

type ControlledProps = {
    /**
     * Value of the selected RadioItem (controlled). Setting it makes the group controlled.
     */
    value?: string;
};

type UncontrolledProps = {
    /**
     * Value of the RadioItem selected on first render (uncontrolled).
     */
    defaultValue?: string;
};

export type RadioGroupProps = BasicRadioGroupProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledRadioGroupProps = BasicRadioGroupProps & ControlledProps;
export type UncontrolledRadioGroupProps = BasicRadioGroupProps & UncontrolledProps;

export type RadioGroupContextProps = {
    /**
     * Name shared by the radio inputs of the group.
     */
    name: string | undefined;

    /**
     * Called when the user selects an option, with the option's `value`.
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
};
