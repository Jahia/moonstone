import React, {useState} from 'react';
import {ControlledRadioGroup} from './ControlledRadioGroup';
import type {UncontrolledRadioGroupProps} from './RadioGroup.types';

export const UncontrolledRadioGroup: React.FC<UncontrolledRadioGroupProps> = ({onChange, defaultValue, children, ...props}) => {
    // When no value is set, then the first item will be selected by default
    if (typeof defaultValue === 'undefined' || defaultValue === '') {
        defaultValue = (children[0].props.value);
    }

    const [value, setValue] = useState(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (typeof onChange !== 'undefined') {
            onChange(event, value);
        }
    };

    return (
        <ControlledRadioGroup value={value} onChange={handleChange} {...props}>
            {children}
        </ControlledRadioGroup>
    );
};
