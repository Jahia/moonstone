import React from 'react';
import {DropdownDataOptions} from '~/components/Dropdown/Dropdown.types';
import {Menu, MenuItem, Separator} from '~/components';
import {DropdownMenuProps} from '~/components/Dropdown/DropdownMenu.types';

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
    const isEmpty = data.length < 1;
    const isGrouped = !isEmpty && typeof data[0].options !== 'undefined';

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: DropdownDataOptions) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={item.iconStart}
            label={item.label}
            description={item.description}
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

    const dropdownGrouped = (children: [DropdownDataOptions], groupLabel: string, index: number) => {
        return (
            <div key={`${groupLabel}-${index}`} data-option-type="group">
                {index > 0 && (
                    <Separator/>
                )}

                <MenuItem variant="title" label={groupLabel}/>

                {children.map(item => {
                    return dropdownOption(item);
                })}
            </div>
        );
    };

    return (
        <Menu
            isDisplayed={isDisplayed}
            position="fixed"
            anchorPosition={anchorPosition}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            anchorEl={anchorEl}
            hasSearch={hasSearch}
            searchEmptyText={searchEmptyText}
            onClose={onClose}
        >
            {
                data.map((item, index) => {
                    if (isGrouped) {
                        item.options.map((o: DropdownDataOptions) => {
                            return dropdownOption(o);
                        });
                        return dropdownGrouped(item.options, item.groupLabel, index);
                    }

                    return dropdownOption(item);
                })
            }
        </Menu>
    );
};

