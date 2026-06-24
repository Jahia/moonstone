import React, {useCallback, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Temporal} from 'temporal-polyfill';
import {Button, Dropdown, Menu} from '~/components';
import {Calendar} from '~/icons';
import type {DropdownProps} from 'react-day-picker';
import {TimezoneSelector} from '../../TimezoneSelector/TimezoneSelector';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {
    dateToPlainDate,
    getSystemTimeZone,
    getTodayPlainDate,
    plainDateToDate,
    toPlainDate
} from '../utils/temporal';
import {
    formatPlainDate,
    getCalendarDisabledMatchers,
    getDisplayMonth,
    getMonthStart
} from './calendarHelpers';
import {
    assembleValue,
    getPlainDate,
    getPlainTime,
    getTimeZone,
    parseValue
} from './dateTimeValue';
import type {ControlledDateTimeInputProps} from './DateTimeInput.types';
import styles from './DateTimeInput.module.scss';

export const ControlledDateTimeInput = React.forwardRef<HTMLInputElement, ControlledDateTimeInputProps>(({
    value,
    onChange,
    type,
    timeFormat = '24h',
    minDate,
    maxDate,
    disabledDates,
    disabledDateRanges,
    locale,
    weekStartsOn = 1,
    i18n: {
        todayButton = 'Today',
        nextMonth = 'Go to the next month',
        previousMonth = 'Go to the previous month'
    } = {},
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    timeInputProps,
    timezoneSelectorProps,
    ...props
}, ref) => {
    const currentValue = parseValue(value, type);
    const selectedDate = getPlainDate(currentValue);
    const selectedTime = getPlainTime(currentValue);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(() => getDisplayMonth(selectedDate));
    // The zone to apply while no date exists yet (so a pre-date zone choice isn't lost).
    // Once a date is picked the value carries its own zone, which takes precedence.
    const [fallbackZone, setFallbackZone] = useState(() => getTimeZone(currentValue) ?? getSystemTimeZone());
    const currentTimeZone = getTimeZone(currentValue) ?? fallbackZone;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleRef = useCallback((node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
    }, [ref]);

    const minPlainDate = toPlainDate(minDate);
    const maxPlainDate = toPlainDate(maxDate);
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const todayDate = plainDateToDate(getTodayPlainDate());
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);
    const startMonth = getMonthStart(minPlainDate, displayedMonth.getFullYear() - 20, 0);
    const endMonth = getMonthStart(maxPlainDate, displayedMonth.getFullYear() + 20, 11);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();

    // This component holds no value state: it derives display from `value` and reports the next
    // value via `onChange`. onChange drives the value — never the reverse. (Uncontrolled: the
    // wrapper does setValue + the consumer's onChange. Controlled: the consumer updates `value`.)
    // Each handler passes only the dimension it changed; the rest fall back to the current
    // value's parts, so emitChange always reports one complete, canonical value.
    const emitChange = (
        event: React.SyntheticEvent,
        change: {plainDate?: Temporal.PlainDate | null; plainTime?: Temporal.PlainTime | null; timeZone?: string} = {}
    ) => {
        const {plainDate = selectedDate, plainTime = selectedTime, timeZone = currentTimeZone} = change;
        onChange?.(event, assembleValue(plainDate, plainTime, timeZone, type));
    };

    const openCalendar = () => {
        if (!isDisabled && !isReadOnly) {
            setDisplayedMonth(getDisplayMonth(selectedDate));
            setIsCalendarOpen(true);
        }
    };

    const handleMonthChange = (month: Date) => {
        if (
            month.getFullYear() !== displayedMonth.getFullYear() ||
            month.getMonth() !== displayedMonth.getMonth()
        ) {
            setDisplayedMonth(month);
        }
    };

    return (
        <div className={clsx(styles.dateTimeInput, className)}>
            <BaseInput
                ref={handleRef}
                {...props}
                readOnly
                className={styles.dateField}
                value={formatPlainDate(selectedDate, locale)}
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                icon={<Calendar aria-hidden/>}
                onClick={openCalendar}
                onKeyUp={event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        openCalendar();
                    }
                }}
            />
            {inputRef.current && (
                <Menu
                    isDisplayed={isCalendarOpen}
                    anchorEl={inputRef as React.MutableRefObject<HTMLElement>}
                    anchorPosition={{top: 4, left: 0}}
                    minWidth={size === 'big' ? '270px' : '235px'}
                    maxWidth="320px"
                    onClose={() => setIsCalendarOpen(false)}
                >
                    <DayPicker
                        showOutsideDays
                        classNames={{
                            ...dayPickerClassNames,
                            root: clsx(dayPickerClassNames.root, styles.dayPicker),
                            footer: styles.calendarFooter
                        }}
                        components={{
                            YearsDropdown: (dropdownProps: DropdownProps) => (
                                <Dropdown
                                    size="medium"
                                    variant="ghost"
                                    data={(dropdownProps.options ?? []).map(opt => ({
                                        label: opt.label,
                                        value: String(opt.value),
                                        isDisabled: opt.disabled
                                    }))}
                                    value={String(dropdownProps.value ?? '')}
                                    onChange={(_e, item) => {
                                        setDisplayedMonth(new Date(Number(item.value), displayedMonth.getMonth(), 1));
                                    }}
                                />
                            )
                        }}
                        labels={{
                            labelNext: () => nextMonth,
                            labelPrevious: () => previousMonth
                        }}
                        captionLayout={hasMultipleYears ? 'dropdown-years' : 'label'}
                        navLayout="around"
                        weekStartsOn={weekStartsOn}
                        month={displayedMonth}
                        startMonth={startMonth}
                        endMonth={endMonth}
                        disabled={calendarDisabledMatchers}
                        formatters={locale ? {
                            formatCaption: (date: Date) => new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(date),
                            formatDay: (date: Date) => new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(date),
                            formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date)
                        } : undefined}
                        mode="single"
                        selected={selectedDate ? plainDateToDate(selectedDate) : undefined}
                        footer={(
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButton}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        emitChange(event, {plainDate: getTodayPlainDate()});
                                        setIsCalendarOpen(false);
                                    }
                                }}
                            />
                        )}
                        onMonthChange={handleMonthChange}
                        onSelect={(date, _selectedDay, modifiers, event) => {
                            if (modifiers.disabled) {
                                return;
                            }

                            emitChange(event, {plainDate: date ? dateToPlainDate(date) : null});
                            setIsCalendarOpen(false);
                        }}
                    />
                </Menu>
            )}
            {type !== 'date' && (
                <TimeInput
                    {...timeInputProps}
                    size={size}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    focusOnField={false}
                    timeFormat={timeFormat}
                    defaultValue={selectedTime}
                    onChange={(event, time) => {
                        if (!time) {
                            if (selectedDate) {
                                emitChange(event, {plainTime: null});
                            }

                            return;
                        }

                        emitChange(event, {plainDate: selectedDate ?? getTodayPlainDate(), plainTime: time});
                    }}
                />
            )}
            {type === 'zonedDateTime' && (
                <TimezoneSelector
                    {...timezoneSelectorProps}
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant ?? 'outlined'}
                    isDisabled={isDisabled}
                    value={currentTimeZone}
                    referenceDate={selectedDate}
                    onChange={(event, nextZone) => {
                        const zone = nextZone ?? currentTimeZone;
                        setFallbackZone(zone);

                        // With no date yet there is nothing complete to emit; just remember
                        // the chosen zone so it applies once a date is picked.
                        if (selectedDate) {
                            emitChange(event, {timeZone: zone});
                        }
                    }}
                />
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
