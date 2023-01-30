import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';

import {
    DropdownDataOption,
    DropdownImageSizes,
    DropdownProps,
    DropdownSizes,
    DropdownVariants,
    HandleSelect
} from './Dropdown.types';
import {DropdownMenu} from '~/components/Dropdown/DropdownMenu';
import {TreeViewMenu} from '~/components/Dropdown/TreeViewMenu';
import {Tag} from '../Tag';
import {TreeViewData} from '~/components/TreeView/TreeView.types';
import {ControlledBaseInput} from '~/components/Input/BaseInput/ControlledBaseInput';

const flatten = (data: TreeViewData[]): TreeViewData[] => {
    const res: TreeViewData[] = [];

    const fn = (current: TreeViewData) => {
        res.push(current);
        if (current.children) {
            current.children.forEach(fn);
        }
    };

    data?.forEach?.(fn);

    return res;
};

export const Dropdown: React.FC<DropdownProps> = ({
    data,
    label,
    placeholder,
    value,
    values,
    isDisabled,
    maxWidth = '300px',
    variant = DropdownVariants.Ghost,
    size = DropdownSizes.Medium,
    icon,
    hasSearch = false,
    searchEmptyText = 'No results found.',
    imageSize,
    onChange,
    onBlur,
    onFocus,
    className,
    isTree,
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);

    const flatData = useMemo(() => flatten(data), [data]);
    const isEmpty = data.length < 1;
    const menuMinWidth = 80;
    const anchorPosition = {
        top: 4,
        left: 0
    };
    let menuMaxWidth;
    let menuMaxHeight;

    // Return nothing if `data` isn't an array
    if (!Array.isArray(data)) {
        return null;
    }

    switch (imageSize) {
        case DropdownImageSizes.Big:
            menuMaxWidth = '400px';
            menuMaxHeight = '440px';
            break;
        case DropdownImageSizes.Small:
            menuMaxWidth = '264px';
            menuMaxHeight = '320px';
            break;
        default:
            // Default menu size for the dropdown when no image size is provided
            menuMaxWidth = '250px';
            menuMaxHeight = '270px';
    }

    // ---
    // Functions to handle events
    // ---
    const handleOpenMenu = (e: React.MouseEvent | React.KeyboardEvent) => {
        const dropdownWidth = (e.currentTarget as HTMLElement).offsetWidth;
        setMinWith(`${dropdownWidth < menuMinWidth ? menuMinWidth : dropdownWidth}px`);
        setAnchorEl(e.currentTarget);
        setIsOpened(true);
    };

    const handleSelect: HandleSelect = (e, item) => {
        if (item) {
            if (values) {
                if (!item.isDisabled) {
                    e.stopPropagation();
                    (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: DropdownDataOption) => void)(e, item);
                }
            } else {
                let canClose: boolean | void = !item.isDisabled;
                if (!item.isDisabled && item.value !== value) {
                    e.stopPropagation();
                    canClose = (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: DropdownDataOption) => void)(e, item);
                }

                if (canClose !== false) {
                    setIsOpened(false);
                }
            }
        }
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
        setAnchorEl(null);
    };

    const handleKeyPress = (e: React.KeyboardEvent, item: DropdownDataOption) => {
        if (e.key === 'Enter') {
            handleSelect(e, item);
        }
    };

    const View = isTree ? TreeViewMenu : DropdownMenu;

    return (
        <div
            className={clsx('moonstone-dropdown_container', className)}
            style={{maxWidth}}
            {...props}
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleOpenMenu(e);
                }
            }}
        >
            <ControlledBaseInput isShowTriggerButton
                                 isReadOnly
                                 role="dropdown"
                                 size={size === 'small' ? 'default' : 'big'}
                                 placeholder={(!values || values.length === 0) ? placeholder : ''}
                                 icon={icon}
                                 variant={variant}
                                 value={label || flatData.find(i => i.value === value)?.label || ''}
                                 prefixComponents={!label && values && values.length > 0 && values.map(v => {
                                     const item = flatData.find(i => i.value === v);
                                     return (
                                         <Tag key={item.value}
                                              label={item.label}
                                              value={item.value}
                                              size={size}
                                              onClick={e => handleSelect(e, item)}
                                         />
                                     );
                                 })}
                                 onClick={handleOpenMenu}
            />

            {isOpened && (
                <View
                    isDisplayed
                    data={data as any}
                    value={value}
                    values={values}
                    anchorPosition={anchorPosition}
                    minWidth={minWidth}
                    maxWidth={menuMaxWidth}
                    maxHeight={menuMaxHeight}
                    anchorEl={anchorEl}
                    hasSearch={hasSearch}
                    searchEmptyText={searchEmptyText}
                    handleKeyPress={handleKeyPress}
                    handleSelect={handleSelect}
                    imageSize={imageSize}
                    onClose={handleCloseMenu}
                />
            )}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';
