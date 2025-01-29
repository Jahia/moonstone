import React, {MutableRefObject, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import './Dropdown.scss';

import type {
    DropdownDataOption,
    DropdownProps,
    HandleSelect
} from './Dropdown.types';
import {DropdownMenu, TreeViewMenu} from '~/components/Dropdown';
import {Tag} from '../Tag';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';
import {Button, Typography} from '~/components';
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

export const Dropdown: React.FC<DropdownProps> = ({
    data,
    treeData,
    label,
    placeholder,
    value,
    values,
    isDisabled,
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
    const flatData: DropdownDataOption[] = useMemo(() => isTree ? flatten(treeData) : data, [treeData, data, isTree]);
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

    const handleKeyUp = (e: React.KeyboardEvent, item: DropdownDataOption) => {
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
            'moonstone-filled': isFilled,
            'moonstone-opened': isOpened
        }
    );

    const View = isTree ? TreeViewMenu : DropdownMenu;

    return (
        <div
            className={clsx('moonstone-dropdown_container', className)}
            {...props}
            onKeyUp={e => {
                if (e.key === 'Enter') {
                    handleOpenMenu(e);
                }
            }}
        >
            <div
                ref={ref}
                role="dropdown"
                className={clsx(cssDropdown)}
                tabIndex={0}
                onClick={handleOpenMenu}
                onKeyUp={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') {
                        handleSelect(e);
                    }
                }}
                onBlur={event => {
                    setFocusData(p => ({...p, focused: false, event}));
                }}
                onFocus={event => {
                    setFocusData(p => ({...p, focused: true, event}));
                }}
            >
                {
                    icon &&
                    <icon.type {...icon.props} size="default" className={clsx('moonstone-dropdown_icon')}/>
                }
                {!label && values && values.length > 0 ? (
                    <div className="moonstone-dropdown_tags flexFluid flexRow">
                        {values.map(v => {
                            const item = flatData.find(i => i.value === v);
                            return item && (
                                <Tag key={item.value}
                                     label={item.label}
                                     value={item.value}
                                     size={size}
                                     onClick={e => {
                                         ref.current.focus();
                                         ref.current.blur();
                                         handleSelect(e, item);
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
                    >
                        {label || flatData.find(i => i.value === value)?.label || placeholder}
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
                <ChevronDown className="moonstone-dropdown_chevronDown"/>
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
                    handleKeyUp={handleKeyUp}
                    handleSelect={handleSelect}
                    imageSize={imageSize}
                    onClose={handleCloseMenu}
                />
            )}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';
