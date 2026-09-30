import React, { useImperativeHandle, useRef } from 'react';

import { BaseInput } from '../BaseInput';
import { Search } from '~/icons';

import type { SearchInputProps } from './SearchInput.types';

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
            icon={<Search aria-hidden/>}
            role="search"
        />
    );
});

SearchInput.displayName = 'SearchInput';
