import React, { useState } from 'react';

import { ControlledCheckbox } from '~/components/Checkbox/ControlledCheckbox';

import type { UncontrolledCheckboxProps } from './Checkbox.types';

export const UncontrolledCheckbox = React.forwardRef<HTMLInputElement, UncontrolledCheckboxProps>(({
    defaultChecked = false, onChange, value, ...props
}, ref) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckbox
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

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
