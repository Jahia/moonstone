import React, {useState} from 'react';

import type {UncontrolledCheckboxItemProps} from './CheckboxItem.types';
import {ControlledCheckboxItem} from './ControlledCheckboxItem';
export const UncontrolledCheckboxItem: React.FC<UncontrolledCheckboxItemProps> = ({defaultChecked = false, onChange, ...props}) => {
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
