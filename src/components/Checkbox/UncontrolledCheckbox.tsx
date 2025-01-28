import React, {useState} from 'react';
import './Checkbox.scss';
import type {UncontrolledCheckboxProps} from './Checkbox.types';
import {ControlledCheckbox} from '~/components/Checkbox/ControlledCheckbox';

export const UncontrolledCheckbox: React.FC<UncontrolledCheckboxProps> = ({defaultChecked = false, onChange, value, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckbox
            {...props}
            value={value}
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const toggleChecked = !checked;
                setChecked(toggleChecked);
                if (typeof onChange === 'function') {
                    onChange(event, value, toggleChecked);
                }
            }}
        />
    );
};

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
