import React from 'react';
import {SearchContextInputProps} from './SearchContextInput.types';
import {UncontrolledSearchContextInput} from './UncontrolledSearchContextInput';
import {ControlledSearchContextInput} from './ControlledSearchContextInput';

export const SearchContextInput: React.FC<SearchContextInputProps> = ({value, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledSearchContextInput {...props}/>;
    }

    return <ControlledSearchContextInput value={value} {...props}/>;
};

SearchContextInput.displayName = 'SearchContextInput';
