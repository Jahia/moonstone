import React, {useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {Menu, MenuItem, SearchInput, Separator} from '~/components';
import {onAccessibleClick} from '~/hooks';
import {ChevronDown, Language} from '~/icons';
import {BaseInput} from '../BaseInput';
import {getTimezoneDisplayLabel, getTimezoneMenuGroups} from '../shared/dateTime.utils';
import type {ControlledTimezoneInputProps} from './TimezoneInput.types';
import './TimezoneInput.scss';

const getBaseInputSize = (size: ControlledTimezoneInputProps['size']) => size === 'medium' ? 'big' : 'default';

export const ControlledTimezoneInput: React.FC<ControlledTimezoneInputProps> = ({
    value,
    allowedTimezones,
    referenceDate,
    isClearable,
    placeholder,
    labels,
    size = 'small',
    variant = 'outlined',
    className,
    isDisabled = false,
    onBlur,
    onFocus,
    onChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    // Minimal state for the focused CSS class only — does not drive any logic.
    const [isFocusedState, setIsFocusedState] = useState(false);

    const anchorRef = useRef<HTMLDivElement>(null);

    // Kept in sync with `isOpen` state but updated synchronously (before React re-renders).
    // This lets event handlers (handleBlur) read the correct value immediately,
    // before the state update has been flushed — avoiding the need for useEffect.
    const isOpenRef = useRef(false);

    // Stores a blur event that occurred while the menu was open, so it can be
    // forwarded to `onBlur` when the menu eventually closes.
    const pendingBlurEventRef = useRef<React.FocusEvent<HTMLInputElement> | null>(null);

    // Tracks whether `onFocus` has been emitted, to avoid firing it again when
    // the trigger regains focus after the search input loses it.
    const isFocusedRef = useRef(false);

    const menuMinWidth = `${Math.max(anchorRef.current?.offsetWidth ?? 0, 260)}px`;

    // Memoised to avoid recomputing offset labels for potentially hundreds of
    // timezones on every render. Only recalculates when inputs actually change.
    const menuGroups = useMemo(() => getTimezoneMenuGroups({
        allowedTimezones,
        selectedTimezone: value,
        searchValue,
        referenceDate
    }), [allowedTimezones, value, searchValue, referenceDate]);

    const firstOption = menuGroups[0]?.options[0];
    const visibleValue = getTimezoneDisplayLabel(value, referenceDate);
    const resolvedPlaceholder = placeholder || labels?.timezone;

    const handleOpen = (event: React.MouseEvent | React.KeyboardEvent) => {
        if (isDisabled) {
            return;
        }

        event.stopPropagation();
        setSearchValue('');
        isOpenRef.current = true;
        setIsOpen(true);
    };

    const handleClose = () => {
        setSearchValue('');
        isOpenRef.current = false;
        setIsOpen(false);

        // If the trigger blurred while the menu was open, fire the deferred onBlur now.
        if (pendingBlurEventRef.current) {
            onBlur?.(pendingBlurEventRef.current);
            pendingBlurEventRef.current = null;
        }
    };

    const handleSelection = (event: React.MouseEvent | React.KeyboardEvent, nextValue: string) => {
        if (nextValue !== value && typeof onChange === 'function') {
            onChange(event, nextValue);
        }

        handleClose();
    };

    const handleClear = isClearable ? (event: React.MouseEvent) => {
        event.stopPropagation();
        onChange?.(event, null);
    } : undefined;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        // Clear any pending blur — the component is focused again.
        pendingBlurEventRef.current = null;

        if (!isFocusedRef.current) {
            isFocusedRef.current = true;
            setIsFocusedState(true);
            onFocus?.(event);
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        isFocusedRef.current = false;
        setIsFocusedState(false);

        if (!isOpenRef.current) {
            // Menu is not open: emit onBlur immediately.
            onBlur?.(event);
        } else {
            // Menu is open (e.g. focus moved to the search input): defer onBlur
            // until the menu closes so the consumer sees it as a single blur.
            pendingBlurEventRef.current = event;
        }
    };

    const handleTriggerKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
            event.preventDefault();
            handleOpen(event);
        }
    };

    const handleSearchKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && firstOption) {
            handleSelection(event, firstOption.value);
        }
    };

    return (
        <div ref={anchorRef} className={clsx('moonstone-timezoneInput', className)}>
            <BaseInput
                isReadOnly
                className={clsx('moonstone-timezoneInput_trigger', {
                    'moonstone-opened': isOpen,
                    'moonstone-focused': isFocusedState
                })}
                value={visibleValue}
                size={getBaseInputSize(size)}
                variant={variant}
                isDisabled={isDisabled}
                isShowClearButton={Boolean(isClearable)}
                placeholder={resolvedPlaceholder}
                icon={<Language aria-hidden/>}
                postfixComponents={[
                    <ChevronDown
                        key="chevron"
                        aria-hidden
                        className={clsx('moonstone-timezoneInput_chevron', {
                            'moonstone-opened': isOpen
                        })}
                    />
                ]}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                onClick={handleOpen}
                onClear={handleClear}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyUp={handleTriggerKeyUp}
            />
            {isOpen && (
                <Menu
                    isDisplayed
                    anchorEl={anchorRef}
                    anchorPosition={{top: 4, left: 0}}
                    minWidth={menuMinWidth}
                    maxWidth="360px"
                    maxHeight="340px"
                    className="moonstone-timezoneInput_menu"
                    onClose={handleClose}
                >
                    <div className="moonstone-timezoneInput_menuContent">
                        <div className="moonstone-timezoneInput_menuSearch">
                            <SearchInput
                                focusOnField
                                value={searchValue}
                                variant="outlined"
                                onChange={event => setSearchValue(event.target.value)}
                                onKeyUp={handleSearchKeyUp}
                                onClear={() => setSearchValue('')}
                            />
                        </div>
                        <div className="moonstone-timezoneInput_groups">
                            {menuGroups.map((group, index) => (
                                <div key={group.groupLabel} className="moonstone-timezoneInput_group">
                                    {index > 0 && (
                                        <Separator/>
                                    )}
                                    <MenuItem variant="title" label={group.groupLabel}/>
                                    {group.options.map(option => (
                                        <li
                                            key={option.value}
                                            aria-selected={option.value === value}
                                            className={clsx(
                                                'moonstone-menuItem',
                                                'moonstone-timezoneInput_option',
                                                {
                                                    'moonstone-selected': option.value === value
                                                }
                                            )}
                                            {...onAccessibleClick({
                                                onClick: event => handleSelection(event, option.value),
                                                role: 'option'
                                            })}
                                        >
                                            <div className="moonstone-timezoneInput_optionContent">
                                                <span className="moonstone-timezoneInput_optionLabel">{option.cityLabel}</span>
                                                <span className="moonstone-timezoneInput_optionOffset">{option.offsetLabel}</span>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </Menu>
            )}
        </div>
    );
};

ControlledTimezoneInput.displayName = 'ControlledTimezoneInput';
