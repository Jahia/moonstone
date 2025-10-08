import React, {useImperativeHandle, useRef} from 'react';
import type {SearchInputProps} from './SearchInput.types';
import {BaseInput} from '../BaseInput';
import {Search} from '~/icons';

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(({
    ...props
}, ref) => {
    const inputRef = useRef<HTMLInputElement>();
    useImperativeHandle(ref, () => inputRef.current!, []);

    return (
        <BaseInput
            ref={inputRef}
            {...props}
            isShowClearButton
            role="search"
            icon={<Search aria-hidden/>}
        />
    );
});

SearchInput.displayName = 'SearchInput';
