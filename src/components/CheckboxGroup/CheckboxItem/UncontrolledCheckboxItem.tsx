import React, {useState} from 'react';

import type {CheckboxItemProps} from './CheckboxItem.types';
import {ControlledCheckboxItem} from './ControlledCheckboxItem';
export const UncontrolledCheckboxItem: React.FC<CheckboxItemProps> = ({defaultChecked = false, onChange, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledCheckboxItem
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

UncontrolledCheckboxItem.displayName = 'UncontrolledCheckboxItem';
