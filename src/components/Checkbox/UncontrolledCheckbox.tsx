import React, {useState} from 'react';
import './Checkbox.scss';
import {CheckboxProps} from './Checkbox.types';
import {ControlledCheckbox} from '~/components/Checkbox/ControlledCheckbox';

export const UncontrolledCheckbox: React.FC<CheckboxProps> = ({defaultChecked = false, onChange, value, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckbox
            {...props}
            checked={checked}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const newState = !checked;
                setChecked(newState);
                console.log('Uncontrolled checkbox');
                console.log(onChange);
                if (typeof onChange !== 'undefined') {
                    console.log('Uncontrolled checkbox');
                    console.log(value);
                    onChange(event, value, newState);
                }
            }}
        />
    );
};

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
