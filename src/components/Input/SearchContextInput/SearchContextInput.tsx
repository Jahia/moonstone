import React, {useImperativeHandle, useRef} from 'react';
import {SearchContextInputProps} from './SearchContextInput.types';
import {BaseInput} from '../BaseInput';
import clsx from 'clsx';

export const SearchContextInput = React.forwardRef<HTMLInputElement, SearchContextInputProps>(({
    searchContext,
    ...props}, ref) => {
    const hasSearchContext = typeof searchContext !== 'undefined';
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);

    const component = hasSearchContext && (
        <searchContext.type
            key="searchcontext"
            {...searchContext.props}
            variant="ghost"
            size="small"
            className={clsx(searchContext.props.className, 'moonstone-searchContextInput_element')}
        />
    );

    return (
        <BaseInput
            ref={inputRef}
            {...props}
            isShowClearButton
            prefixComponents={[component]}
            icon={null}
            role="search"
            size="big"
        />
    );
});

SearchContextInput.displayName = 'SearchContextInput';
