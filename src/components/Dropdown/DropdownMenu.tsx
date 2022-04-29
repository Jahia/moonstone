import React, {useState} from "react";
import {DropdownDataOption, DropdownData} from "~/components/Dropdown/Dropdown.types";
import {Menu, MenuItem, Input, Separator, Typography} from "~/components";
import {DropdownMenuProps} from "~/components/Dropdown/DropdownMenu.types";

type Data = DropdownDataOption[] | DropdownData[] | [];

const filterByLabel = (data: Data, label: string): Data => {
    return data.filter((option: DropdownDataOption) => {
        return option.label?.toLowerCase().includes(label.toLowerCase())
    })
}

const isGrouped = (data: Data): data is DropdownData[] => {
    return data[0].hasOwnProperty('options');
}

// ---
// Filter options and return the data filtered
// ---
const filteredOptions = (data: Data, searchedValue: string): Data => {
    if (isGrouped(data)) {
        const filteredData: DropdownData[] = [];
        // TODO: don't return the groupLabel and options if no match in options - if no march we msut return an empty array.
        data.map(item => {
            filteredData.push({
                ...item,
                options: filterByLabel(item.options, searchedValue)
            } as DropdownData);
        })
        // console.log('call filteredOptions');
        // console.log(filteredData);
        return filteredData;

    } else {
        return filterByLabel(data, searchedValue);
    }
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isDisplayed,
    anchorPosition,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    hasSearch,
    searchEmptyText,
    data,
    value,
    imageSize,
    handleSelect,
    handleKeyPress,
    onClose
}) => {
    const [searchedValue, setSearchedValue] = useState('');
    // const [isEmpty, setIsEmpty] = useState(false);

    // ---
    // Build option
    // ---
    const dropdownOption = (item: DropdownDataOption) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={item.iconStart}
            label={item.label}
            iconEnd={item.iconEnd}
            isDisabled={item.isDisabled}
            isSelected={value === item.value}
            image={item.image}
            imageSize={imageSize}
            onClick={e => handleSelect(e, item)}
            onKeyPress={e => handleKeyPress(e, item)}
            {...item.attributes}
        />
    );

    // ---
    // Build grouped options
    // ---
    const dropdownOptionsGrouped = (groupLabel: string, options: DropdownDataOption[], index: number) => {
        // console.log(options);
        if (options.length > 0) {
            // setIsEmpty(false);
            return (
                <div key={`${groupLabel}-${index}`} data-option-type="group">
                    {index > 0 && (
                        <Separator/>
                    )}

                    <MenuItem variant="title" label={groupLabel}/>

                    {options.map(option => {
                        return dropdownOption(option);
                    })}
                </div>
            );
        } else {
            // setIsEmpty(true);
        }
    };

    // ---
    // Build the menu content
    // ---
    const dropdownMenuContent = () => {
        let renderedData = data;

        // Manage filtering
        if (searchedValue !== '' ) {
            renderedData = filteredOptions(data, searchedValue);
            // console.log('---');
            // console.log(renderedData);
            // console.log(renderedData.length);
            // console.log('---');
        }

        // No results
        if (renderedData.length < 1 ) {
            return (
                <Typography
                    className="moonstone-menu_emptySearchText"
                    variant="caption"
                    component='li'
                >
                    {searchEmptyText}
                </Typography>
            )
        }

        // Display options
        if (isGrouped(renderedData)) {
            return renderedData.map((item, index) => dropdownOptionsGrouped(item.groupLabel, item.options, index));
        } else {
            return renderedData.map((item) => dropdownOption(item));
        }
    }

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
                {hasSearch && (
                    <li className="moonstone-menu_searchInput">
                        <Input
                            focusOnField
                            variant="search"
                            value={searchedValue}
                            onChange={e => setSearchedValue(e.target.value)}
                            onClear={() => setSearchedValue('')}
                        />
                    </li>
                )}

                {dropdownMenuContent()}
            </>
        </Menu>
    );
}
