import React from 'react';
import {SearchContextInputProps} from './SearchContextInput.types';
import {BaseInput} from '../BaseInput';

export const SearchContextInput: React.FC<SearchContextInputProps> = ({...props}) => {
    return (
        <BaseInput
            {...props}
            isShowClearButton
            icon={null}
            role="search"
            size="big"
        />
    );
};

SearchContextInput.displayName = 'SearchContextInput';
