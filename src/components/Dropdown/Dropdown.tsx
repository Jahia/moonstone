import React, {useState} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';

import {
    DropdownData,
    DropdownDataOption,
    DropdownProps,
    HandleSelect
} from './Dropdown.types';
import {Typography} from '~/components';
import {ChevronDown} from '~/icons';
import {DropdownMenu} from '~/components/Dropdown/DropdownMenu';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

type Data = DropdownDataOption[] | DropdownData[] | TreeViewData[] | []

const getNodebyValue = (data: Data, value: string, isTree: boolean): TreeViewData[] => {
    if (isTree && data.length > 0) {
        for (const item of data as TreeViewData[]) {
            if (item.value === value) {
                return [item];
            }

            if (item.children) {
                const desiredNodeId = getNodebyValue(item.children, value, isTree);
                if (desiredNodeId) {
                    return desiredNodeId;
                }
            }
        }
    }

    return null;
};

export const Dropdown: React.FC<DropdownProps> = ({
    data,
    label,
    value,
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
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const [selectedNodes, setSelectedNodes] = useState(getNodebyValue(data, value, isTree));
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
        setMinWith(`${dropdownWidth < menuMinWidth ? menuMinWidth : dropdownWidth}px`);
        setAnchorEl(e.currentTarget);
        setIsOpened(true);
    };

    const handleSelect: HandleSelect = (e, item) => {
        if (item) {
            let canClose: boolean | void = !item.isDisabled;

            if (!item.isDisabled && item.value !== value) {
                e.stopPropagation();
                canClose = (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: DropdownDataOption) => void)(e, item);
            }

            if (canClose !== false) {
                setIsOpened(false);
            }

            if (isTree) {
                setSelectedNodes([item] as TreeViewData[]);
            }

            // If (isTree && isMultiple) {
            //     setSelectedNodes(previousSelectedNodes => [previousSelectedNode, ...item]);
            // }
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
            'moonstone-filled': value,
            'moonstone-opened': isOpened
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
                    className={clsx('flexFluid')}
                    data-testid="label"
                >
                    {label}
                </Typography>
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
            </div>

            {isOpened &&
                <DropdownMenu
                    isDisplayed
                    isTree={isTree}
                    data={data as DropdownDataOption[] | DropdownData[]}
                    selectedNodes={selectedNodes}
                    value={value}
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
                />}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';
