import React from 'react';
import {SearchContextInputProps} from './SearchContextInput.types';
import {BaseInput} from '../BaseInput';
import clsx from 'clsx';

export const SearchContextInput: React.FC<SearchContextInputProps> = ({searchContext, ...props}) => {
    const hasSearchContext = typeof searchContext !== 'undefined';

    const component = hasSearchContext && (
        <searchContext.type
            {...searchContext.props}
            variant="ghost"
            size="small"
            maxWidth="100px"
            className={clsx(searchContext.props.className, 'moonstone-searchContextInput_element')}
        />
    );

    return (
        <BaseInput
            {...props}
            isShowClearButton
            prefixComponents={[component]}
            icon={null}
            role="search"
            size="big"
        />
    );
};

SearchContextInput.displayName = 'SearchContextInput';
