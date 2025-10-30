import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import type {CustomDropdownProps} from './CustomDropdown.types';
import {Menu, Button} from '~/components';
import {ChevronDown} from '~/icons';
import '../Dropdown.scss';

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
    label,
    children,
    isDisabled,
    isLoading = false,
    variant = 'ghost',
    size = 'default',
    icon,
    onBlur,
    onFocus,
    className,
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [focusData, setFocusData] = useState({focused: false, event: null, lastSent: false});
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);

    const isEmpty = !children;

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
    const menuMaxWidth = 'auto';
    const menuMaxHeight = '270px';

    return (
        <>
            <Button
                isDisabled={isDisabled}
                isLoading={isLoading}
                variant={variant}
                size={size}
                label={label}
                icon={icon}
                iconEnd={label && <ChevronDown role="presentation"/>}
                aria-label={label}
                aria-disabled={isDisabled || isEmpty}
                aria-busy={isLoading ? true : undefined}
                className={clsx('moonstone-custom-dropdown', {'moonstone-opened': isOpened}, className)}
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
                {...props}
            />

            {isOpened && (
                <Menu
                    isDisplayed
                    style={{padding: 10}}
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
        </>
    );
};

CustomDropdown.displayName = 'CustomDropdown';
