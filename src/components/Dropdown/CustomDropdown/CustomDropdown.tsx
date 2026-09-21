import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { Button, Menu } from '~/components';
import { ChevronDown } from '~/icons';

import type { CustomDropdownProps } from './CustomDropdown.types';

import styles from './CustomDropdown.module.scss';

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
    const [focusData, setFocusData] = useState({
        focused: false,
        event: null,
        lastSent: false,
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);

    const isEmpty = !children;

    useEffect(() => {
        if (focusData.focused && focusData.event && !focusData.lastSent && onFocus) {
            onFocus(focusData.event);
            setFocusData(p => ({
                ...p,
                lastSent: true,
            }));
        }
    }, [onFocus, focusData]);

    useEffect(() => {
        if (!focusData.focused && !isOpened && focusData.event && focusData.lastSent && onBlur) {
            onBlur(focusData.event);
            setFocusData(p => ({
                ...p,
                lastSent: false,
            }));
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
        left: 0,
    };
    const menuMaxWidth = 'auto';
    const menuMaxHeight = '270px';

    return (
        <>
            <Button
                isDisabled={isDisabled}
                isLoading={isLoading}
                aria-busy={isLoading ? true : undefined}
                aria-disabled={isDisabled || isEmpty}
                aria-label={label}
                className={clsx(
                    ['moonstone-custom-dropdown-button', styles['moonstone-custom-dropdown-button']],
                    isOpened && ['moonstone-opened', styles['moonstone-opened']],
                    className,
                )}
                icon={icon}
                iconEnd={label && <ChevronDown role="presentation"/>}
                label={label}
                size={size}
                tabIndex={0}
                variant={variant}
                onBlur={(event) => {
                    setFocusData(p => ({
                        ...p,
                        focused: false,
                        event,
                    }));
                }}
                onClick={(!isDisabled && !isLoading) ? handleOpenMenu : undefined}
                onFocus={(event) => {
                    setFocusData(p => ({
                        ...p,
                        focused: true,
                        event,
                    }));
                }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter' && !isDisabled && !isLoading) {
                        handleOpenMenu(e);
                    }
                }}
                {...props}
            />

            {isOpened && (
                <Menu
                    isDisplayed
                    anchorEl={anchorEl}
                    anchorPosition={anchorPosition}
                    className={clsx('moonstone-custom-dropdown-menu', styles['moonstone-custom-dropdown-menu'])}
                    maxHeight={menuMaxHeight}
                    maxWidth={menuMaxWidth}
                    minWidth={minWidth}
                    onClose={handleCloseMenu}
                >
                    {children}
                </Menu>
            )}
        </>
    );
};

CustomDropdown.displayName = 'CustomDropdown';
