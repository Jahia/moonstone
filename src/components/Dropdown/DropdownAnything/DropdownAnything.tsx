/* eslint-disable complexity */
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import '../Dropdown.scss';

import type {
    DropdownAnythingProps
} from './DropdownAnything.types';
import {Menu} from '~/components';
import {Button, Loader, Typography} from '~/components';
import {Cancel, ChevronDown} from '~/icons';

export const DropdownAnything: React.FC<DropdownAnythingProps> = ({
    label,
    placeholder,
    value,
    children,
    isDisabled,
    isLoading = false,
    variant = 'ghost',
    size = 'medium',
    icon,
    onClear,
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

    const isEmpty = !children;
    const isFilled = value !== undefined && value !== null;

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

    const handleCloseMenu = () => {
        setIsOpened(false);
        setAnchorEl(null);
    };

    // ---
    // CSS classes
    // ---
    const menuMinWidth = 80;
    const anchorPosition = {
        top: 4,
        left: 0
    };
    const menuMaxWidth = '250px';
    const menuMaxHeight = '270px';

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

    return (
        <div
            className={clsx('moonstone-dropdown_container', className)}
            {...props}
        >
            <div
                ref={ref}
                role="listbox"
                aria-label={label || placeholder}
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
                {(value || label || placeholder) &&
                    <Typography
                        isNowrap
                        variant={size === 'small' ? 'caption' : 'body'}
                        component="span"
                        className={clsx('flexFluid', 'moonstone-dropdown_label')}
                        title={value || label || placeholder}
                        role="option"
                    >
                        {value || label || placeholder}
                    </Typography>}
                {onClear && !isDisabled && (
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
                <Menu
                    isDisplayed
                    style={{padding: 10, overflow: 'auto'}}
                    anchorPosition={anchorPosition}
                    minWidth={minWidth}
                    maxWidth={menuMaxWidth}
                    maxHeight={menuMaxHeight}
                    anchorEl={anchorEl}
                    onClose={handleCloseMenu}
                >
                    {children}
                </Menu>
            )}
        </div>
    );
};

DropdownAnything.displayName = 'DropdownAnything';
