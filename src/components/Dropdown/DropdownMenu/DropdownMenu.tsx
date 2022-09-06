import React, {useState} from 'react';

import {Menu, SearchInput, Typography} from '~/components';
import {DropdownMenuList} from './DropdownMenuList';
import {DropdownMenuTree} from './DropdownMenuTree';
import {filterData} from '../dropdown.utils';

import type {DropdownMenuProps} from './DropdownMenu.types';
import type {DropdownDataOption, DropdownData} from '../BaseDropdown/BaseDropdown.types';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isDisplayed,
    isTree,
    anchorPosition,
    selectedNodesId,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    hasSearch,
    searchEmptyText,
    data,
    selectedValues,
    imageSize,
    handleSelect,
    handleKeyPress,
    onClose
}) => {
    const [filteredData, setFilteredData] = useState(data);
    const [openedBySearch, setOpenedBySearch] = useState<string[]>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredData(filterData(data, e.target.value, isTree, setOpenedBySearch));
    };

    console.log('call DropdownMenu');
    console.log(selectedNodesId);

    // ---
    // Render the component
    // ---
    return (
        <Menu
            isDisplayed={isDisplayed}
            position="absolute"
            anchorPosition={anchorPosition}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            <>
                {
                    hasSearch && (
                        <li className="moonstone-menu_searchInput">
                            <SearchInput
                                focusOnField
                                defaultValue=""
                                onChange={e => handleSearch(e)}
                            />
                        </li>
                    )
                }

                {
                    filteredData.length < 1 &&
                        <Typography
                            className="moonstone-menu_emptySearchText"
                            variant="caption"
                            component="li"
                        >
                            {searchEmptyText}
                        </Typography>
                }
                { isTree ?
                    <DropdownMenuTree
                        data={filteredData as TreeViewData[]}
                        handleSelect={handleSelect}
                        openedBySearch={openedBySearch}
                        selectedNodesId={selectedNodesId}
                        // HandleKeyPress={handleKeyPress}
                        selectedValues={selectedValues}
                    /> :
                    <DropdownMenuList
                        data={filteredData as DropdownDataOption[] | DropdownData[]}
                        handleSelect={handleSelect}
                        handleKeyPress={handleKeyPress}
                        imageSize={imageSize}
                        selectedValues={selectedValues}
                    />}
            </>
        </Menu>
    );
};
