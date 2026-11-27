import { createContext, useContext } from 'react';

/** A filter that a FilterChip declares to the bar, so that AddFilter can list it */
export type CollectionBarFilterEntry = {
    filterKey: string;
    label: string;
    isAddable: boolean;
    hasValue: boolean;
    isDisabled: boolean;
    iconStart?: React.ReactElement;
};

/** Where the focus goes once the next change is in the DOM: a chip by its key, AddFilter, or nowhere */
export type CollectionBarFocusRequest = { filterKey: string } | 'addFilter' | 'none';

export type CollectionBarContextValue = {
    openFilterKey: string | null;
    setOpenFilterKey: (filterKey: string | null) => void;
    filters: CollectionBarFilterEntry[];
    upsert: (entry: CollectionBarFilterEntry) => void;
    remove: (filterKey: string) => void;
    isDisabled: boolean;
    requestFocus: (request: CollectionBarFocusRequest) => void;
    // The menu of AddFilter, and the filter opened from it, whose popup leads back to the menu
    isAddFilterMenuOpen: boolean;
    setAddFilterMenuOpen: (isOpen: boolean) => void;
    menuFilterKey: string | null;
    openFromMenu: (filterKey: string) => void;
    setChipButton: (filterKey: string, button: HTMLButtonElement | null) => void;
    addFilterRef: React.MutableRefObject<HTMLButtonElement | null>;
};

export const CollectionBarContext = createContext<CollectionBarContextValue | null>(null);

export const useCollectionBarContext = (component: string) => {
    const context = useContext(CollectionBarContext);
    if (!context) {
        throw new Error(`${component} must be used inside a CollectionBar`);
    }

    return context;
};
