import {useState} from 'react';

type UseSearchProps = {
    searchValue?: string;
    defaultSearchValue?: string;
    onSearchChange?: (searchValue: string) => void;
};

export function useSearch({searchValue, defaultSearchValue = '', onSearchChange}: UseSearchProps) {
    const isSearchControlled = searchValue !== undefined;

    const [state, setState] = useState(defaultSearchValue);

    const globalFilter = isSearchControlled ? searchValue : state;

    const handleGlobalFilterChange = (updater: React.SetStateAction<string>) => {
        const next = typeof updater === 'function' ? updater(globalFilter) : updater;

        if (next === globalFilter) {
            return;
        }

        if (!isSearchControlled) {
            setState(next);
        }

        onSearchChange?.(next);
    };

    return {globalFilter, isSearchControlled, handleGlobalFilterChange};
}
