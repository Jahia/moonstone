import React, {useState} from 'react';
import './Checkbox.scss';
import {CheckboxProps} from './Checkbox.types';
import {ControlledCheckbox} from '~/components/Checkbox/ControlledCheckbox';

export const UncontrolledCheckbox: React.FC<CheckboxProps> = ({defaultChecked = false, onChange, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckbox
            {...props}
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setChecked(!checked);
                if (typeof onChange !== 'undefined') {
                    onChange(event);
                }
            }}
        />
    );
};

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
