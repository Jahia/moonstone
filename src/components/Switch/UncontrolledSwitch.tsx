import React, {useState} from 'react';
import './Switch.scss';
import type {UncontrolledSwitchProps} from './Switch.types';
import {ControlledSwitch} from '~/components/Switch/ControlledSwitch';

export const UncontrolledSwitch: React.FC<UncontrolledSwitchProps> = ({defaultChecked = false, onChange, value, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledSwitch
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

UncontrolledSwitch.displayName = 'UncontrolledSwitch';
