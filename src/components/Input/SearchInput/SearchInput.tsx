import React from 'react';
import type {SearchInputProps} from './SearchInput.types';
import {BaseInput} from '../BaseInput';
import {Search} from '~/icons';

export const SearchInput: React.FC<SearchInputProps> = ({...props}) => {
    return (
        <BaseInput
            {...props}
            role="search"
            isShowClearButton
            icon={<Search aria-hidden/>}
        />
    );
};

SearchInput.displayName = 'SearchInput';
