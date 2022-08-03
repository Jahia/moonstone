import React from 'react';
import {InputProps} from './Input.types';
import {BaseInput} from './BaseInput';
import {SearchInput} from './SearchInput';

export const Input: React.FC<InputProps> = ({variant, ...props}) => {
    if (variant === 'search') {
        // Tslint:disable-next-line:no-console
        console.warn('The prop `variant` of the Input component is deprecated, and it will be removed in a next release. If you need the `search` variant, please use the dedicated component `SearchInput`');
        return <SearchInput {...props}/>;
    }

    return <BaseInput {...props}/>;
};

Input.displayName = 'Input';
