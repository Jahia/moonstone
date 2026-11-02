import { useState } from 'react';

import { Input } from '~/components/Input';
import { Filter, Person } from '~/icons';

import type { CollectionBarColumn, CollectionBarFilter } from '~/components/CollectionBar';

export const collectionBarColumns: CollectionBarColumn[] = [
    { key: 'date', label: 'Date' },
    { key: 'user', label: 'User' },
    { key: 'action', label: 'Action' },
    { key: 'path', label: 'Path' },
    { key: 'details', label: 'Details' },
];

type CollectionBarFiltersOptions = {
    /** Displays the User and Action filters by default too */
    isEveryFilterDisplayed?: boolean;
    /** Values of the filters at mount, by key */
    initialValues?: Record<string, string>;
};

/**
 * The filters of the stories and the tests: Date, displayed by default, then User and Action, which Add filter adds.
 * Each selector is an Input, and its text is the value of the filter
 */
export const useCollectionBarFilters = ({ isEveryFilterDisplayed = false, initialValues = {} }: CollectionBarFiltersOptions = {}) => {
    const [values, setValues] = useState<Record<string, string>>(initialValues);
    const setValue = (key: string, value: string) => setValues(current => ({ ...current, [key]: value }));

    const filter = (key: string, label: string, example: string, isDisplayedByDefault: boolean, iconStart?: React.ReactElement): CollectionBarFilter => ({
        key,
        label,
        iconStart,
        isDisplayedByDefault: isEveryFilterDisplayed || isDisplayedByDefault,
        valueLabel: values[key] ?? '',
        selector: (
            <Input
                aria-label={label}
                placeholder={`For example ${example}`}
                value={values[key] ?? ''}
                onChange={e => setValue(key, e.target.value)}
                onClear={() => setValue(key, '')}
            />
        ),
        onClear: () => setValue(key, ''),
    });

    return {
        values,
        filters: [
            filter('date', 'Date', '2026-11-02', true),
            filter('user', 'User', 'root', false, <Person/>),
            filter('action', 'Action', 'Published', false, <Filter/>),
        ],
        clearAll: () => setValues({}),
    };
};
