import React, {Fragment, useState} from 'react';
import classnames from 'clsx';
import './Dropdown.scss';
import spacings from '~/tokens/spacings/spacing.json';

import {Menu, MenuItem} from '~/components/Menu';
import {Typography} from '~/components/Typography';
import {Separator} from '~/components/Separator';
import {ChevronDown} from '~/icons';

type TDropdownVariant = 'ghost' | 'outlined';
export enum DropdownVariants {
    GHOST = 'ghost',
    OUTLINED = 'outlined'
}

type TDropdownSize = 'small' | 'medium';
export enum DropdownSizes {
    SMALL = 'small',
    MEDIUM = 'medium'
}

type TDropdownImageSize = 'small' | 'big';
export enum DropdownImageSizes {
    SMALL = 'small',
    BIG = 'big'
}

type TDropdownDataOptions = {
    label?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: {};
    image?: HTMLImageElement;
    imageSize?: TDropdownImageSize;
}

type TDropdownData = {
    groupLabel?: string;
    options?: [TDropdownDataOptions];
}

type THandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: TDropdownDataOptions) => void;

interface IDropdownProps {
    /**
     * Content of the dropdown
     */
    data: [TDropdownDataOptions & TDropdownData];

    /**
     * Label of the dropdown
     */
    label?: string;

    /**
     * Value of the dropdown
     */
    value?: string;

    /**
     * Icon displays before the dropdown's label
     */
    icon?: React.ReactElement;

    /**
     * Dropdown's variants
     */
    variant?: TDropdownVariant;

    /**
     * Dropdown's sizes
     */
    size?: TDropdownSize;

    /**
     * Size of images to show in the Dropdown
     */
    imageSize?: TDropdownImageSize;

    /**
     * Max width of the dropdown
     */
    maxWidth?: string;

    /**
     * Dropdown is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the Menu within the Dropdown has a search input
     */
    hasSearch?: boolean;

    /**
     * The text to display if the Dropdown Menu has a search input and the search doesn't have any results
     */
    searchEmptyText?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange?: () => {};
}


export const Dropdown: React.FC<IDropdownProps> = (
    {
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
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const isGrouped = typeof data[0].options !== 'undefined';
    let menuMaxWidth;
    let menuMaxHeight;

    const anchorPosition = {
        top: Number(spacings.spacingNano.slice(0, -2)),
        left: 0
    };

    switch (imageSize) {
        case DropdownImageSizes.BIG:
            menuMaxWidth = '400px';
            menuMaxHeight = '440px';
            break;
        case DropdownImageSizes.SMALL:
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
        setMinWith(`${(e.currentTarget as HTMLElement).offsetWidth}px`);
        setAnchorEl(e.currentTarget);
        setIsOpened(true);
    };

    const handleSelect: THandleSelect = (e, item) => {
        if (item) {
            let canClose: boolean | void = !item.isDisabled;
            if (!item.isDisabled && item.value !== value) {
                e.stopPropagation();
                canClose = (onChange as (e: React.MouseEvent | React.KeyboardEvent, item: TDropdownDataOptions) => void)(e, item);
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

    const handleKeyPress = (e: React.KeyboardEvent, item: TDropdownDataOptions) => {
        if (e.key === 'Enter') {
            handleSelect(e, item);
        }
    };

    // ---
    // CSS classes
    // ---

    const cssDropdown = classnames(
        'flexRow',
        'alignCenter',
        'moonstone-dropdown',
        `moonstone-${size}`,
        `moonstone-dropdown_${variant}`,
        {
            'moonstone-disabled': isDisabled,
            'moonstone-filled': value,
            'moonstone-opened': isOpened
        }
    );

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: TDropdownDataOptions) => (
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

    const dropdownGrouped = (children: [TDropdownDataOptions], groupLabel: string, index: number) => {
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
            className={classnames(className)}
            style={{maxWidth}}
            {...props}
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleOpenMenu(e);
                }
            }}
        >
            <div
                className={classnames(cssDropdown)}
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
                    <icon.type {...icon.props} size="small" className={classnames('moonstone-dropdown_icon')}/>
                }

                <Typography
                    isNowrap
                    variant="caption"
                    component="span"
                    className={classnames('flexFluid')}
                >
                    {label}
                </Typography>
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
            </div>

            <Menu
                isDisplayed={isOpened}
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
                            item.options.map(o => {
                                return dropdownOption(o);
                            });
                            return dropdownGrouped(item.options, item.groupLabel, index);
                        }

                        return dropdownOption(item);
                    })
                }
            </Menu>
        </div>
    );
};

Dropdown.defaultProps = {
    icon: null,
    variant: DropdownVariants.GHOST,
    size: DropdownSizes.MEDIUM,
    maxWidth: '300px',
    isDisabled: false,
    hasSearch: false,
    searchEmptyText: 'No results found.'
};

Dropdown.displayName = 'Dropdown';
