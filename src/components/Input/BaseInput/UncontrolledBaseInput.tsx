import React, {useState, ChangeEvent} from 'react';
import type {UncontrolledBaseInputProps} from './BaseInput.types';
import {ControlledBaseInput} from './ControlledBaseInput';

export const UncontrolledBaseInput: React.FC<UncontrolledBaseInputProps> = ({defaultValue, onChange, ...props}) => {
    const [inputValue, setBaseInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBaseInputValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledBaseInput value={inputValue} onChange={handleOnChange} {...props}/>;
};

UncontrolledBaseInput.displayName = 'UncontrolledBaseInput';
