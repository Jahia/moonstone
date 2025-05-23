import React from 'react';
import {InputProps} from './Input.types';
import {BaseInput} from './BaseInput';
import {SearchInput} from './SearchInput';

export const Input: React.FC<InputProps> = props => {
    if (props.variant === 'search') {
        console.warn(
            'The prop `variant` of the Input component is deprecated, and it will be removed in a next release. If you need the `search` variant, please use the dedicated component `SearchInput`'
        );
        return <SearchInput {...props} variant="outlined"/>;
    }

    return <BaseInput {...props}/>;
};

Input.displayName = 'Input';
