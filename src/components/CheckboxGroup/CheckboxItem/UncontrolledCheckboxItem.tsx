import React, { useState } from 'react';

import { ControlledCheckboxItem } from './ControlledCheckboxItem';

import type { UncontrolledCheckboxItemProps } from './CheckboxItem.types';
export const UncontrolledCheckboxItem: React.FC<UncontrolledCheckboxItemProps> = ({ defaultChecked = false, onChange, ...props }) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckboxItem
            {...props}
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) => {
                const toggleChecked = !checked;
                setChecked(toggleChecked);
                if (typeof onChange === 'function') {
                    onChange(event, value, toggleChecked);
                }
            }}
        />
    );
};

UncontrolledCheckboxItem.displayName = 'UncontrolledCheckboxItem';
