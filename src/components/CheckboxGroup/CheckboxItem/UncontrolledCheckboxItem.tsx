import React, {useState} from 'react';

import type {CheckboxItemProps} from './CheckboxItem.types';

import {CheckboxGroupContext} from '../CheckboxGroup.context';
import {ControlledCheckboxItem} from './ControlledCheckboxItem';

export const UncontrolledCheckboxItem: React.FC<CheckboxItemProps> = ({defaultChecked = false, onChange, value, ...props}) => {
    const context = React.useContext(CheckboxGroupContext);
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckboxItem
            {...props}
            checked={checked}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const newState = !checked;
                setChecked(newState);
                console.log('call uncontrol checkboxItem');
                if (typeof onChange !== 'undefined') {
                    console.log('call uncontrol checkboxItem');
                    console.log(value);
                    onChange(event, value, newState);
                }

                if (typeof context?.onChange !== 'undefined') {
                    context.onChange(event, value, newState);
                }
            }}
        />
    );
};

UncontrolledCheckboxItem.displayName = 'UncontrolledCheckboxItem';
