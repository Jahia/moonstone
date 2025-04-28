import React from 'react';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import type {DropdownMenuProps} from '~/components/Dropdown/DropdownMenu.types';
import type {MenuItemProps} from '~/components/Menu/MenuItem.types';

import {Menu, MenuItem, Separator} from '~/components';
import {CheckboxChecked, CheckboxUnchecked} from '~/icons';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isDisplayed,
    anchorPosition,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    hasSearch,
    autoAddSearchLimit,
    searchEmptyText,
    data,
    value,
    values,
    imageSize,
    handleSelect,
    handleKeyPress,
    onClose
}) => {
    const getIcon = (item: DropdownDataOption) => values?.indexOf(item.value) > -1 ? <CheckboxChecked role="checkbox" color="blue"/> : <CheckboxUnchecked role="checkbox"/>;

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: DropdownDataOption) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={values ? getIcon(item) : item.iconStart}
            iconSize="default"
            label={item.label}
            description={item.description}
            iconEnd={item.iconEnd}
            isDisabled={item.isDisabled}
            isSelected={value === item.value}
            image={item.image}
            imageSize={imageSize}
            onClick={e => handleSelect(e, item)}
            onKeyPress={e => handleKeyPress(e, item)}
            {...item.attributes as MenuItemProps}
        />
    );

    const dropdownGrouped = (options: DropdownDataOption[], groupLabel: string, index: number) => {
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
    };

    if (data.length === 0) {
        return null;
    }

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
            autoAddSearchLimit={autoAddSearchLimit}
            searchEmptyText={searchEmptyText}
            onClose={onClose}
        >
            {
                data.map((item, index) => {
                    if ('options' in item && 'groupLabel' in item) {
                        item.options.map((o: DropdownDataOption) => {
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

