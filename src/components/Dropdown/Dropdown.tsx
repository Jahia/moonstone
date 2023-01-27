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
import {Typography} from '~/components/Typography';
import {ChevronDown} from '~/icons';
import {DropdownMenu} from '~/components/Dropdown/DropdownMenu';
import {TreeViewMenu} from '~/components/Dropdown/TreeViewMenu';
import {Tag} from '~/components';
import {TreeViewData} from '~/components/TreeView/TreeView.types';

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

    // ---
    // CSS classes
    // ---

    const cssDropdown = clsx(
        !label && !icon ? 'flexRow_reverse' : 'flexRow_between',
        'alignCenter',
        'moonstone-dropdown',
        `moonstone-${size}`,
        `moonstone-dropdown_${variant}`,
        {
            'moonstone-disabled': (typeof isDisabled === 'undefined' && isEmpty) ? true : isDisabled,
            'moonstone-filled': value || values?.length > 0,
            'moonstone-opened': isOpened
        }
    );

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
            <div
                role="dropdown"
                className={clsx(cssDropdown)}
                tabIndex={0}
                onClick={handleOpenMenu}
                onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') {
                        handleSelect(e);
                    }
                }}
            >
                {
                    icon &&
                    <icon.type {...icon.props} size="small" className={clsx('moonstone-dropdown_icon')}/>
                }
                {!label && values && values.length > 0 ? (
                    <div className="moonstone-dropdown_tags flexFluid flexRow">
                        {values.map(v => {
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
                    </div>
                ) : (
                    <Typography
                        isNowrap
                        variant="caption"
                        component="span"
                        className={clsx('flexFluid', 'moonstone-dropdown_label')}
                        title={label}
                    >
                        {label || flatData.find(i => i.value === value)?.label || placeholder}
                    </Typography>
                )}
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
            </div>

            {isOpened && (
                <View
                    isDisplayed
                    data={data}
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
