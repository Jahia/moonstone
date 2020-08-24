import React, {ChangeEvent, FunctionComponent, useState} from 'react';

// Create an interface for Input component
// props include: defaultValue, ...

export const Input: FunctionComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    // Console.log('inputValue:', inputValue);

    return (
        <input
            value={inputValue}
            onChange={handleInputChange}
        />
    );
};

Input.displayName = 'Input';
