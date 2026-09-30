import React, { useState } from 'react';

import { ControlledSwitch } from '~/components/Switch/ControlledSwitch';

import type { UncontrolledSwitchProps } from './Switch.types';

export const UncontrolledSwitch: React.FC<UncontrolledSwitchProps> = ({
    defaultChecked = false, onChange, value, ...props
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledSwitch
            {...props}
            checked={checked}
            value={value}
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
