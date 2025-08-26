/* eslint-disable complexity */
import React, {MutableRefObject, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';

import type {
    DropdownData,
    DropdownDataOption,
    DropdownDataGrouped,
    DropdownProps,
    HandleSelect
} from './Dropdown.types';
import {DropdownMenu, TreeViewMenu} from '~/components/Dropdown';
import {Tag} from '../Tag';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';
import {Button, Loader, Typography} from '~/components';
import {Cancel, ChevronDown} from '~/icons';

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

const isGroupedData = (data: DropdownData): data is DropdownDataGrouped[] => {
    if (!Array.isArray(data)) {
        return false;
    }

    return data.every(item => 'options' in item && 'groupLabel' in item);
};

const getDataItem = (data: DropdownData, value: string): DropdownDataOption | undefined => {
    if (isGroupedData(data)) {
        return data.reduce((
            acc: DropdownDataOption[],
            group: DropdownDataGrouped) => acc.concat(group.options), [])
            .find((item: DropdownDataOption) => item.value === value);
    }

    return data.find((item: DropdownDataOption) => item.value === value);
};

export const Dropdown: React.FC<DropdownProps> = ({
    data,
    treeData,
    label,
    placeholder,
    value,
    values,
    isDisabled,
    isLoading = false,
    variant = 'ghost',
    size = 'medium',
    icon,
    hasSearch,
    autoAddSearchLimit = 7,
    searchEmptyText = 'No results found.',
    imageSize,
    onClear,
    onChange,
    onBlur,
    onFocus,
    className,
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [focusData, setFocusData] = useState({focused: false, event: null, lastSent: false});
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const ref: MutableRefObject<HTMLDivElement> = useRef();

    const isTree = Array.isArray(treeData);
    const flatData = useMemo(() => isTree ? flatten(treeData) : data, [treeData, data, isTree]);
    const isEmpty = flatData.length === 0;

    useEffect(() => {
        if (focusData.focused && focusData.event && !focusData.lastSent && onFocus) {
            onFocus(focusData.event);
            setFocusData(p => ({...p, lastSent: true}));
        }
    }, [onFocus, focusData]);

    useEffect(() => {
        if (!focusData.focused && !isOpened && focusData.event && focusData.lastSent && onBlur) {
            onBlur(focusData.event);
            setFocusData(p => ({...p, lastSent: false}));
        }
    }, [onBlur, isOpened, focusData]);

    // Return nothing if `data` isn't an array
    if (!Array.isArray(flatData)) {
        return null;
    }

    const menuMinWidth = 80;
    const anchorPosition = {
        top: 4,
        left: 0
    };
    let menuMaxWidth;
    let menuMaxHeight;

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
        e.stopPropagation();
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

    const isFilled = value || values?.length > 0;

    const cssDropdown = clsx(
        !label && !icon ? 'flexRow_reverse' : 'flexRow_between',
        'alignCenter',
        'moonstone-dropdown',
        `moonstone-${size}`,
        `moonstone-dropdown_${variant}`,
        {
            'moonstone-disabled': (typeof isDisabled === 'undefined' && isEmpty) ? true : isDisabled,
            'moonstone-dropdown_loading': isLoading,
            'moonstone-filled': isFilled,
            'moonstone-opened': isOpened
        }
    );

    const View = isTree ? TreeViewMenu : DropdownMenu;

    return (
        <div
            className={clsx('moonstone-dropdown_container', className)}
            {...props}
        >
            <div
                ref={ref}
                role="listbox"
                aria-label={label || getDataItem(flatData, value)?.label || placeholder}
                aria-disabled={isDisabled || isEmpty}
                aria-busy={isLoading ? true : undefined}
                className={clsx(cssDropdown)}
                tabIndex={0}
                onClick={!isDisabled && !isLoading && handleOpenMenu}
                onKeyUp={e => {
                    if (e.key === 'Enter' && !isDisabled && !isLoading) {
                        handleOpenMenu(e);
                    }
                }}
                onBlur={event => {
                    setFocusData(p => ({...p, focused: false, event}));
                }}
                onFocus={event => {
                    setFocusData(p => ({...p, focused: true, event}));
                }}
            >
                {icon && !isLoading && <icon.type {...icon.props} size="default" className={clsx('moonstone-dropdown_icon')} role="presentation"/>}
                {isLoading && <Loader size="small" className={clsx({'moonstone-dropdown_loaderOverlay': !icon})}/>}
                {!label && values && values.length > 0 ? (
                    <div className="moonstone-dropdown_tags flexFluid flexRow">
                        {values.map(v => {
                            const item = getDataItem(flatData, v);
                            return item && (
                                <Tag key={item.value}
                                     label={item.label}
                                     value={item.value}
                                     size={size}
                                     isDisabled={isDisabled}
                                     role="option"
                                     onClick={e => {
                                         ref.current.focus();
                                         ref.current.blur();
                                         if (!isDisabled) {
                                             handleSelect(e, item);
                                         }
                                     }}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <Typography
                        isNowrap
                        variant={size === 'small' ? 'caption' : 'body'}
                        component="span"
                        className={clsx('flexFluid', 'moonstone-dropdown_label')}
                        title={label}
                        role="option"
                    >
                        {label || getDataItem(flatData, value)?.label || placeholder}
                    </Typography>
                )}
                {onClear && isFilled && !isDisabled && (
                    <Button
                        className="moonstone-baseInput_clearButton flexRow_center alignCenter"
                        variant="ghost"
                        icon={<Cancel/>}
                        aria-label="Reset"
                        onClick={e => {
                            e.stopPropagation();
                            ref.current.focus();
                            ref.current.blur();
                            onClear(e);
                        }}
                    />
                )}
                <ChevronDown className="moonstone-dropdown_chevronDown" role="presentation"/>
            </div>

            {isOpened && (
                <View
                    isDisplayed
                    data={data}
                    treeData={treeData}
                    value={value}
                    values={values}
                    anchorPosition={anchorPosition}
                    minWidth={minWidth}
                    maxWidth={menuMaxWidth}
                    maxHeight={menuMaxHeight}
                    anchorEl={anchorEl}
                    hasSearch={hasSearch}
                    autoAddSearchLimit={autoAddSearchLimit}
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
