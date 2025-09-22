import React, {useImperativeHandle, useRef} from 'react';
import {InputProps} from './Input.types';
import {BaseInput} from './BaseInput';
import {SearchInput} from './SearchInput';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!, []);

    if (props.variant === 'search') {
        console.warn(
            'The prop `variant` of the Input component is deprecated, and it will be removed in a next release. If you need the `search` variant, please use the dedicated component `SearchInput`'
        );
        return <SearchInput ref={inputRef} {...props} variant="outlined"/>;
    }

    return <BaseInput ref={inputRef} {...props}/>;
});

Input.displayName = 'Input';
