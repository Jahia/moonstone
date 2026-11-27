import React from 'react';

import { useCollectionBarContext } from '../CollectionBar.context';
import { Button } from '~/components/Button';
import { Menu, MenuItem } from '~/components/Menu';
import { ChevronRight, Filter } from '~/icons';

import type { AddFilterProps } from './AddFilter.types';

const menuAnchorPosition = {
    top: 4,
    left: 0,
};

// The max height of the menu of a default Dropdown
const MENU_MAX_HEIGHT = '270px';

export const AddFilter: React.FC<AddFilterProps> = ({ i18n, className, ...props }) => {
    const {
        filters,
        openFilterKey,
        isDisabled,
        addFilterRef,
        openFilterKey: openKey,
        setOpenFilterKey,
        isAddFilterMenuOpen: isMenuOpen,
        setAddFilterMenuOpen: setIsMenuOpen,
        openFromMenu,
    } = useCollectionBarContext('AddFilter');
    const label = i18n?.label || 'Add filter';
    const searchLabel = i18n?.search || 'Search filters';
    const noMatch = i18n?.noMatch || 'No filter matches the search';

    const addableFilters = filters.filter(filter => filter.isAddable);
    if (addableFilters.length === 0) {
        return null;
    }

    const filtersToAdd = addableFilters.filter(filter => !filter.hasValue && filter.filterKey !== openFilterKey);

    return (
        <>
            <Button
                {...props}
                isDisabled={isDisabled || filtersToAdd.length === 0}
                aria-expanded={isMenuOpen}
                aria-haspopup="menu"
                className={className}
                data-moonstone="AddFilter"
                icon={<Filter/>}
                label={label}
                ref={addFilterRef}
                variant="outlined"
                onClick={() => {
                    // A popup that the menu opened closes, and the menu takes its place
                    if (openKey) {
                        setOpenFilterKey(null);
                    }

                    setIsMenuOpen(!isMenuOpen);
                }}
            />
            {isMenuOpen && filtersToAdd.length > 0 && (
                // The search of the menu finds a filter by its name, as the list of filters grows
                <Menu
                    hasSearch
                    isDisplayed
                    anchorEl={addFilterRef}
                    anchorPosition={menuAnchorPosition}
                    aria-label={label}
                    i18n={{ searchLabel }}
                    maxHeight={MENU_MAX_HEIGHT}
                    searchEmptyText={noMatch}
                    onClose={() => setIsMenuOpen(false)}
                >
                    {filtersToAdd.map(filter => (
                        // The arrow shows that the item leads to the values of the filter
                        <MenuItem
                            isDisabled={filter.isDisabled}
                            iconEnd={<ChevronRight/>}
                            iconStart={filter.iconStart}
                            key={filter.filterKey}
                            label={filter.label}
                            onClick={() => openFromMenu(filter.filterKey)}
                        />
                    ))}
                </Menu>
            )}
        </>
    );
};

AddFilter.displayName = 'AddFilter';
