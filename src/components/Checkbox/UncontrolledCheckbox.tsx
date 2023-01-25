import React, {useState} from 'react';
import './Checkbox.scss';
import type {UncontrolledCheckboxProps} from './Checkbox.types';
import {ControlledCheckbox} from '~/components/Checkbox/ControlledCheckbox';

export const UncontrolledCheckbox: React.FC<UncontrolledCheckboxProps> = ({defaultChecked = false, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckbox {...props}
                            checked={checked}
                            onChange={event => {
                                setChecked(event.target.checked);
                            }}
        />
    );
};

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
