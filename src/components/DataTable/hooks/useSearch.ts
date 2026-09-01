import {useState} from 'react';

type UseSearchProps = {
    searchValue?: string;
    onSearchChange?: (searchValue: string) => void;
};

export function useSearch({searchValue, onSearchChange}: UseSearchProps) {
    const isSearchControlled = searchValue !== undefined;

    const [state, setState] = useState('');

    const globalFilter = isSearchControlled ? searchValue : state;

    const handleGlobalFilterChange = (updater: React.SetStateAction<string>) => {
        const next = typeof updater === 'function' ? updater(globalFilter) : updater;

        if (!isSearchControlled) {
            setState(next);
        }

        onSearchChange?.(next);
    };

    return {globalFilter, isSearchControlled, handleGlobalFilterChange};
}
