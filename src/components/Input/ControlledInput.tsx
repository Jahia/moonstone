import React, {useState, ChangeEvent} from 'react';
import {InputProps} from './Input.types';
import {UncontrolledInput} from './UncontrolledInput';

export const ControlledInput: React.FC<InputProps> = ({defaultValue, onChange, ...props}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    }

    return <UncontrolledInput value={inputValue} onChange={handleOnChange} {...props}/>;
};

ControlledInput.displayName = 'ControlledInput';
