import React, {useState, ChangeEvent} from 'react';
import {SearchContextInputProps} from './SearchContextInput.types';
import {ControlledSearchContextInput} from './ControlledSearchContextInput';

export const UncontrolledSearchContextInput: React.FC<SearchContextInputProps> = ({defaultValue, onChange, ...props}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    }

    return <ControlledSearchContextInput value={inputValue} onChange={handleOnChange}  {...props}/>;
};

UncontrolledSearchContextInput.displayName = 'UncontrolledSearchContextInput';
