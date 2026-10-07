import React, { useState } from 'react';

import { ControlledSwitch } from '~/components/Switch/ControlledSwitch';

import type { UncontrolledSwitchProps } from './Switch.types';

export const UncontrolledSwitch = React.forwardRef<HTMLInputElement, UncontrolledSwitchProps>(({
    defaultChecked = false, onChange, value, ...props
}, ref) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledSwitch
            {...props}
            checked={checked}
            ref={ref}
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
});

UncontrolledSwitch.displayName = 'UncontrolledSwitch';
