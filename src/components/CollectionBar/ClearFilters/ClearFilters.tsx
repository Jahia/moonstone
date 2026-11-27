import React from 'react';

import { useCollectionBarContext } from '../CollectionBar.context';
import { Button } from '~/components/Button';

import type { ClearFiltersProps } from './ClearFilters.types';

export const ClearFilters: React.FC<ClearFiltersProps> = ({
    onClick,
    i18n,
    className,
    ...props
}) => {
    const { filters, isDisabled, requestFocus } = useCollectionBarContext('ClearFilters');

    // The button shows only while a filter has a value
    if (!filters.some(filter => filter.hasValue)) {
        return null;
    }

    return (
        <Button
            {...props}
            isDisabled={isDisabled}
            className={className}
            data-moonstone="ClearFilters"
            label={i18n?.label || 'Clear all'}
            variant="outlined"
            onClick={(event) => {
                // The button leaves the bar with the values, so the focus goes to AddFilter, or else to the first chip
                requestFocus('addFilter');
                onClick(event);
            }}
        />
    );
};

ClearFilters.displayName = 'ClearFilters';
