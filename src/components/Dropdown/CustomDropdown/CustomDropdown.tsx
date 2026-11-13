import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { Button, Menu } from '~/components';
import { mergeHandlers, shouldIgnoreKey } from '~/hooks';
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
    const [isFocused, setIsFocused] = useState(false);
    // A blur owed to the consumer but not delivered yet. It sits in a ref because queuing it
    // must not trigger a render, and the event object has to survive until the menu closes:
    // `onBlur` takes the original FocusEvent, and there is none left at that point.
    const pendingBlurEventRef = useRef<React.FocusEvent | null>(null);
    // The contract of the published 2.21.1 (ddf86190): onFocus fires once when focus enters, and onBlur only follows a delivered onFocus
    const isFocusSentRef = useRef(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);

    const isEmpty = !children;

    // Opening the menu moves focus off the trigger; that must not read as leaving the
    // component, so a queued blur is only reported once the menu is closed again.
    useEffect(() => {
        if (isFocused || isOpened || !pendingBlurEventRef.current) {
            return;
        }

        const event = pendingBlurEventRef.current;

        pendingBlurEventRef.current = null;
        if (isFocusSentRef.current) {
            isFocusSentRef.current = false;
            onBlur?.(event);
        }
    }, [isFocused, isOpened, onBlur]);

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
                    setIsFocused(false);
                    pendingBlurEventRef.current = event;
                }}
                onFocus={(event) => {
                    setIsFocused(true);
                    // Focus came back before the menu closed: the queued blur never happened.
                    pendingBlurEventRef.current = null;
                    if (onFocus && !isFocusSentRef.current) {
                        isFocusSentRef.current = true;
                        onFocus(event);
                    }
                }}
                {...mergeHandlers(props, {
                    onClick: (!isDisabled && !isLoading) ? handleOpenMenu : undefined,
                    onKeyDown: (e: React.KeyboardEvent) => {
                        if (e.key === 'ArrowDown' && !isDisabled && !isLoading && !shouldIgnoreKey(e)) {
                            e.preventDefault();
                            handleOpenMenu(e);
                        }
                    },
                })}
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
