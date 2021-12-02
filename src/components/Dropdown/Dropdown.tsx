import React, {useState} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';
// import spacings from '~/tokens/spacings/spacing.json';

import {
    DropdownProps,
    DropdownImageSizes,
    HandleSelect,
    DropdownDataOptions,
    DropdownVariants,
    DropdownSizes
} from './Dropdown.types';
import {Menu, MenuItem} from '~/components/Menu';
import {Typography} from '~/components/Typography';
import {Separator} from '~/components/Separator';
import {ChevronDown} from '~/icons';

export const Dropdown: React.FC<DropdownProps> = ({
    data,
    label,
    value,
    isDisabled,
    maxWidth,
    variant,
    size,
    icon,
    hasSearch,
    searchEmptyText,
    imageSize,
    onChange,
    className,
    ...props
}) => {

    // Return nothing if `data` isn't an array
    if (!Array.isArray(data)) {
        return null;
    }

    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const isEmpty = data.length < 1;
    const isGrouped = !isEmpty && typeof data[0].options !== 'undefined';
    const menuMinWidth = 80;
    let menuMaxWidth;
    let menuMaxHeight;

    const anchorPosition = {
        top: 4,
        left: 0
    };

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
            let canClose: boolean | void = !item.isDisabled;
            if (!item.isDisabled && item.value !== value) {
                e.stopPropagation();
                canClose = (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: DropdownDataOptions) => void)(e, item);
            }

            if (canClose !== false) {
                setIsOpened(false);
            }
        }
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
        setAnchorEl(null);
    };

    const handleKeyPress = (e: React.KeyboardEvent, item: DropdownDataOptions) => {
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

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: DropdownDataOptions) => (
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
                >
                    {label}
                </Typography>
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
            </div>

            {isOpened && (
                <Menu
                    isDisplayed
                    position="absolute"
                    anchorPosition={anchorPosition}
                    minWidth={minWidth}
                    maxWidth={menuMaxWidth}
                    maxHeight={menuMaxHeight}
                    anchorEl={anchorEl}
                    hasSearch={hasSearch}
                    searchEmptyText={searchEmptyText}
                    onClose={handleCloseMenu}
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
            )}
        </div>
    );
};

Dropdown.defaultProps = {
    icon: null,
    variant: DropdownVariants.Ghost,
    size: DropdownSizes.Medium,
    maxWidth: '300px',
    hasSearch: false,
    searchEmptyText: 'No results found.'
};

Dropdown.displayName = 'Dropdown';
