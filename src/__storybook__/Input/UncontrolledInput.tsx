import React, {useState, ChangeEvent} from 'react';
import {InputProps} from './Input.types';
import {ControlledInput} from './ControlledInput';

export const UncontrolledInput: React.FC<InputProps> = ({defaultValue, onChange, ...props}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    }

    return <ControlledInput value={inputValue} onChange={handleOnChange}  {...props}/>;
};

UncontrolledInput.displayName = 'UncontrolledInput';
