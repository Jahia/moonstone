import React, {useState, ChangeEvent} from 'react';
import {InputProps} from './Input.types';
import {ControlledInput} from './ControlledInput';

export const UncontrolledInput: React.FC<InputProps> = ({defaultValue, variant, onChange, onClear, ...props}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    }

    const handleOnClear = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (variant === 'search') {
            setInputValue('');
        }

        if (typeof onClear !== 'undefined') {
            onClear(event);
        }
    }

    return <ControlledInput value={inputValue} onChange={handleOnChange} onClear={handleOnClear} variant={variant} {...props}/>;
};

UncontrolledInput.displayName = 'UncontrolledInput';
