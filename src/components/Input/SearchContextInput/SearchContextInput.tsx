import clsx from 'clsx';
import React, { useImperativeHandle, useRef } from 'react';

import { BaseInput } from '../BaseInput';

import type { SearchContextInputProps } from './SearchContextInput.types';

import baseInputStyles from '../BaseInput/BaseInput.module.scss';

export const SearchContextInput = React.forwardRef<HTMLInputElement, SearchContextInputProps>(({
    searchContext,
    ...props
}, ref) => {
    const hasSearchContext = typeof searchContext !== 'undefined';
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);

    const component = hasSearchContext && (
        <searchContext.type
            key="searchcontext"
            {...searchContext.props}
            className={clsx(searchContext.props.className, 'moonstone-searchContextInput_element', baseInputStyles['moonstone-searchContextInput_element'])}
            size="small"
            variant="ghost"
        />
    );

    return (
        <BaseInput
            ref={inputRef}
            {...props}
            isShowClearButton
            icon={null}
            prefixComponents={[component]}
            role="search"
            size="big"
        />
    );
});

SearchContextInput.displayName = 'SearchContextInput';
