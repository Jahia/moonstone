import * as React from 'react';
import {RadioItemProps} from '~/components/RadioGroup/RadioItem/RadioItem.types';

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

type BasicProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * RadioItem's input name
     */
    name: string;

    /**
     * Content of RadioItem component (We expected at least 2 items)
     */
    children: React.ReactElement<RadioItemProps>[];

    /**
     * Additional classnames
     */
    className?: string;

    /**
     * The value of selected RadioItem (Uncontrolled)
     */
    value?: string;

    /**
     * Function triggered on change of the RadioItem value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

    /**
     * Whether the radio group should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the radio can be selected but not changed by the user
     */
    isReadOnly?: boolean;
}

export type RadioGroupProps = (BasicProps & ControlledProps) | (BasicProps & UncontrolledProps);

export type ControlledRadioGroupProps = BasicProps & ControlledProps;

export type UncontrolledRadioGroupProps = BasicProps & UncontrolledProps;

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

