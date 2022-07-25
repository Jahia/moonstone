import React from 'react';
import {InputProps} from './Input.types';
import {BaseInput} from './BaseInput';
import {SearchInput} from './SearchInput';

export const Input: React.FC<InputProps> = ({variant, ...props}) => {
    if (variant === 'search') {
        return <SearchInput {...props}/>
    }

    return <BaseInput {...props}/>;
};

Input.displayName = 'Input';
