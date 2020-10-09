import React, {Fragment, useState} from 'react';
import classnames from 'clsx';
import './Dropdown.scss';
import spacings from '~/tokens/spacings/spacing.json';

import {Menu, MenuItem} from '~/components/Menu';
import {Typography} from '~/components/Typography';
import {Separator} from '~/components/Separator';
import {ChevronDown} from '~/icons';

type TDropdownVariant = 'default' | 'ghost';
// change this enum name
export enum TDropdownVariants {
    DEFAULT = 'default',
    GHOST = 'ghost'
}
export const DropdownVariants = ['default', 'ghost'];

type TDropdownSize = 'small' | 'medium';
// change this enum name
export enum TDropdownSizes {
    SMALL = 'small',
    GHOST = 'ghost'
}
export const DropdownSizes = ['small', 'medium'];

type TDropdownDataOptions = {
    label?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: {};
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
     * Max width of the dropdown
     */
    maxWidth?: string;

    /**
     * Dropdown is disabled
     */
    isDisabled?: boolean;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange: () => {};
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
        onChange,
        className,
        ...props
    }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const isGrouped = typeof data[0].options !== 'undefined';

    const anchorPosition = {
        top: Number(spacings.spacingNano.slice(0, -2)),
        left: 0
    };

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
        'moonstone-dropdown',
        {
            'moonstone-disabled': isDisabled,
            'moonstone-opened': isOpened
        }
    );

    const cssDropdownLabel = classnames(
        'flexRow',
        'alignCenter',
        'moonstone-dropdown_label',
        `moonstone-${size}`,
        variant
    );

    // ---
    // Generate options
    // ---
    // const dropdownOption = (item: TDropdownDataOptions, handleSelect: THandleSelect) => (
    const dropdownOption = (item: TDropdownDataOptions) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={item.iconStart}
            label={item.label}
            iconEnd={item.iconEnd}
            isDisabled={item.isDisabled}
            isSelected={value === item.value}
            onClick={e => handleSelect(e, item)}
            onKeyPress={e => handleKeyPress(e, item)}
            {...item.attributes}
        />
    );

    const dropdownGrouped = (children: [TDropdownDataOptions], groupLabel: string, index: number) => {
        return (
            <Fragment key={`${groupLabel}-${index}`}>
                {index > 0 && (
                    <Separator/>
                )}

                <MenuItem variant="title" label={groupLabel}/>

                {children.map(item => {
                    return dropdownOption(item);
                })}
            </Fragment>
        );
    };

    return (
        <div
            className={classnames(cssDropdown, className)}
            style={{maxWidth}}
            {...props}
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleOpenMenu(e);
                }
            }}
        >
            <div
                className={classnames(cssDropdownLabel)}
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
                <ChevronDown/>
            </div>

            <Menu
                isDisplayed={isOpened}
                anchorPosition={anchorPosition}
                maxHeight="270px"
                maxWidth="250px"
                minWidth={minWidth}
                anchorEl={anchorEl}
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
    variant: 'default',
    size: 'medium',
    maxWidth: '300px',
    isDisabled: false
};

Dropdown.displayName = 'Dropdown';
