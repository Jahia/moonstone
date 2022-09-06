import React, {useState, useMemo} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';

import {
    DropdownData,
    DropdownDataOption,
    DropdownDataTree,
    BaseDropdownProps,
    HandleSelect
} from './BaseDropdown.types';
import {Tag, Typography} from '~/components';
import {ChevronDown} from '~/icons';
import {DropdownMenu} from '~/components/Dropdown/DropdownMenu';
import {getSelectedItemsByValues, getSelectedNodesId} from '../dropdown.utils';

export const BaseDropdown: React.FC<BaseDropdownProps> = ({
    data,
    label,
    selectedValues = [],
    isDisabled,
    maxWidth = '300px',
    variant = 'ghost',
    size = 'medium',
    icon,
    hasSearch = false,
    searchEmptyText = 'No results found.',
    imageSize,
    onChange,
    className,
    isTree,
    isMultiple,
    ...props
}) => {
    console.log('call BaseDropdown');

    const selectedItems = useMemo(() => {
        return getSelectedItemsByValues(data, selectedValues, isTree);
    }, [data, selectedValues, isTree]);

    const selectedNodesId = isTree ? getSelectedNodesId(selectedItems) : null;
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuMinWidth, setMenuMinWith] = useState(null);
    const isEmpty = data.length < 1;
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
        case 'big':
            menuMaxWidth = '400px';
            menuMaxHeight = '440px';
            break;
        case 'small':
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

        setMenuMinWith(`${dropdownWidth < 80 ? '80px' : dropdownWidth}px`);
        setAnchorEl(e.currentTarget);
        setIsOpened(true);
    };

    const handleSelect: HandleSelect = (e, item) => {
        if (item) {
            let canClose: boolean | void = !item.isDisabled;

            if (!item.isDisabled && !selectedValues.includes(item.value)) {
            // If (!item.isDisabled && item.value !== value) {
                e.stopPropagation();

                if (isMultiple) {
                    canClose = false;
                    onChange(e as React.MouseEvent, item);
                } else {
                    canClose = (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: DropdownDataOption | DropdownDataTree) => void)(e, item);
                }
            }

            if (canClose !== false) {
                setIsOpened(false);
            }
        }
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
        // SetAnchorEl(null);
    };

    const handleKeyPress = (e: React.KeyboardEvent, item: DropdownDataOption) => {
        if (e.key === 'Enter') {
            handleSelect(e, item);
        }
    };

    const handleClickTag = (e: React.MouseEvent, item: DropdownDataOption | DropdownDataTree) => {
        e.stopPropagation();
        onChange(e, item);
    };

    // ---
    // CSS classes
    // ---
    const cssDropdown = clsx(
        !label && !icon ? 'flexRow_reverse' : 'flexRow_between',
        'alignCenter',
        'moonstone-dropdown',
        `moonstone-dropdown_${size}`,
        `moonstone-dropdown_${variant}`,
        {
            'moonstone-dropdown-disabled': (typeof isDisabled === 'undefined' && isEmpty) ? true : isDisabled,
            'moonstone-filled': selectedValues.length > 0,
            'moonstone-opened': isOpened,
            'moonstone-dropdown_multiple': isMultiple
        }
    );

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

                <Typography
                    isNowrap
                    variant="caption"
                    component="span"
                    className={clsx(
                        'flexFluid',
                        {flexRow: isMultiple}
                    )}
                >
                    {
                        isMultiple && selectedItems.length > 0 ?
                            selectedItems.map(item => {
                                return <Tag key={item.value} label={item.label} value={item.value} onClick={(e, tagItem) => handleClickTag(e, tagItem)}/>;
                            }) :
                        label
                    }
                </Typography>
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
            </div>

            {isOpened &&
                <DropdownMenu
                    isDisplayed
                    isTree={isTree}
                    data={data as DropdownDataOption[] | DropdownData[]}
                    selectedNodesId={selectedNodesId}
                    selectedValues={selectedValues}
                    anchorPosition={anchorPosition}
                    minWidth={menuMinWidth}
                    maxWidth={menuMaxWidth}
                    maxHeight={menuMaxHeight}
                    anchorEl={anchorEl}
                    hasSearch={hasSearch}
                    searchEmptyText={searchEmptyText}
                    handleKeyPress={handleKeyPress}
                    handleSelect={handleSelect}
                    imageSize={imageSize}
                    onClose={handleCloseMenu}
                />}
        </div>
    );
};

BaseDropdown.displayName = 'BaseDropdown';
