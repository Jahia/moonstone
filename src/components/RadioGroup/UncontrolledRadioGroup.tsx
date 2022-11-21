import React, {useState} from 'react';
import {ControlledRadioGroup} from './ControlledRadioGroup';
import {RadioGroupProps} from './RadioGroup.types';

export const UncontrolledRadioGroup: React.FC<RadioGroupProps> = ({onChange, defaultValue, children, ...props}) => {
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
