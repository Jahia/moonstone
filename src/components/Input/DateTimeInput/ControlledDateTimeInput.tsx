import React, {useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import {Button, Menu} from '~/components';
import {Calendar} from '~/icons';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {ControlledTimezoneInput} from '../TimezoneInput/ControlledTimezoneInput';
import type {DateTimeInputValue} from '../shared/dateTime.types';
import {
    createDateTimeInputValue,
    formatDateDisplayValue,
    formatDateString,
    getCalendarDisabledMatchers,
    getNormalizedDateTime,
    getTimezoneReferenceDate,
    parseDateString
} from '../shared/dateTime.utils';
import type {ControlledDateTimeInputProps} from './DateTimeInput.types';
import './DateTimeInput.scss';
import 'react-day-picker/style.css';

const getDropdownSize = (size: ControlledDateTimeInputProps['size']) => size === 'big' ? 'medium' : 'small';

const sanitizeValueForConfiguration = (
    value: DateTimeInputValue,
    type: ControlledDateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const nextValue = createDateTimeInputValue(value);

    if (type === 'date') {
        nextValue.time = null;
    }

    if (type === 'time') {
        nextValue.date = null;
    }

    if (!hasTimezone) {
        nextValue.timezone = null;
    }

    return nextValue;
};

export const ControlledDateTimeInput = React.forwardRef<HTMLInputElement, ControlledDateTimeInputProps>(({
    type,
    hasTimezone = false,
    timeFormat = '24h',
    value,
    allowedTimezones,
    minDate,
    maxDate,
    disabledDates,
    disabledDateRanges,
    locale,
    weekStartsOn = 1,
    labels,
    size = 'default',
    variant = 'outlined',
    placeholder,
    className,
    isDisabled = false,
    isReadOnly = false,
    focusOnField = false,
    onChange,
    onBlur,
    onFocus,
    ...props
}, ref) => {
    const sanitizedValue = sanitizeValueForConfiguration(value, type, hasTimezone);
    const dateValueForCalendar = sanitizedValue.date;
    const selectedDate = parseDateString(sanitizedValue.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(parseDateString(dateValueForCalendar) || new Date());
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const todayDateString = formatDateString(new Date());
    const todayDate = parseDateString(todayDateString) ?? new Date();
    const todayButtonLabel = labels?.today || formatDateDisplayValue(todayDateString, locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(sanitizedValue.date) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        const nextDate = parseDateString(dateValueForCalendar);

        if (nextDate) {
            setDisplayedMonth(nextDate);
        }
    }, [dateValueForCalendar]);

    const emitChange = (event: React.SyntheticEvent, nextValue: DateTimeInputValue) => {
        if (typeof onChange !== 'function') {
            return;
        }

        const formattedValue = sanitizeValueForConfiguration(nextValue, type, hasTimezone);
        onChange(event, {
            value: formattedValue,
            date: getNormalizedDateTime(type, formattedValue)
        });
    };

    const handleDateSelection = (date: Date | undefined, event: React.SyntheticEvent) => {
        emitChange(event, {...sanitizedValue, date: date ? formatDateString(date) : null});
        setIsCalendarOpen(false);
    };

    const formatters = useMemo(() => locale ? {
        formatCaption: (date: Date) => new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(date),
        formatDay: (date: Date) => new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(date),
        formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date)
    } : undefined, [locale]);

    const commonDayPickerProps = {
        showOutsideDays: true,
        navLayout: 'around' as const,
        weekStartsOn,
        month: displayedMonth,
        disabled: calendarDisabledMatchers,
        formatters,
        onMonthChange: setDisplayedMonth
    };

    const triggerDisplayValue = formatDateDisplayValue(sanitizedValue.date, locale);

    return (
        <div
            className={clsx('moonstone-dateTimeInput', className)}
            onBlur={onBlur}
            onFocus={onFocus}
            {...props}
        >
            {type !== 'time' && (
                <div ref={calendarAnchorRef} className="moonstone-dateTimeInput_dateField">
                    <BaseInput
                        ref={ref}
                        isReadOnly
                        value={triggerDisplayValue}
                        size={size}
                        variant={variant}
                        isDisabled={isDisabled}
                        focusOnField={focusOnField}
                        placeholder={placeholder}
                        icon={<Calendar aria-hidden/>}
                        onClick={() => {
                            if (!isDisabled && !isReadOnly) {
                                setIsCalendarOpen(true);
                            }
                        }}
                        onKeyUp={event => {
                            if ((event.key === 'Enter' || event.key === ' ') && !isDisabled && !isReadOnly) {
                                setIsCalendarOpen(true);
                            }
                        }}
                    />
                    {isCalendarOpen && calendarAnchorRef.current && (
                        <Menu
                            isDisplayed
                            anchorEl={calendarAnchorRef}
                            anchorPosition={{top: 4, left: 0}}
                            minWidth={size === 'big' ? '320px' : '280px'}
                            maxWidth="340px"
                            className="moonstone-dateTimeInput_calendarMenu"
                            onClose={() => setIsCalendarOpen(false)}
                        >
                            <div className="moonstone-dateTimeInput_calendar">
                                <DayPicker
                                    {...commonDayPickerProps}
                                    mode="single"
                                    selected={selectedDate ?? undefined}
                                    onSelect={(date, _selectedDay, modifiers, event) => {
                                        if (modifiers.disabled) {
                                            return;
                                        }

                                        handleDateSelection(date, event);
                                    }}
                                />
                                <div className="moonstone-dateTimeInput_calendarFooter">
                                    <Button
                                        variant="ghost"
                                        size="default"
                                        isDisabled={isTodayDisabled}
                                        label={todayButtonLabel}
                                        onClick={event => {
                                            if (!isTodayDisabled) {
                                                handleDateSelection(todayDate, event);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </Menu>
                    )}
                </div>
            )}
            {type !== 'date' && (
                <TimeInput
                    className="moonstone-dateTimeInput_timeField"
                    size={size}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    focusOnField={focusOnField && type === 'time'}
                    timeFormat={timeFormat}
                    value={sanitizedValue.time ?? null}
                    labels={labels}
                    onChange={(event, nextTime) => {
                        emitChange(event, {...sanitizedValue, time: nextTime});
                    }}
                />
            )}
            {hasTimezone && type !== 'time' && (
                <ControlledTimezoneInput
                    className="moonstone-dateTimeInput_timezoneField"
                    size={getDropdownSize(size)}
                    variant={variant}
                    isDisabled={isDisabled || isReadOnly}
                    value={sanitizedValue.timezone ?? null}
                    allowedTimezones={allowedTimezones}
                    referenceDate={timezoneReferenceDate}
                    placeholder={labels?.timezone}
                    labels={labels}
                    onChange={(event, nextTimezone) => {
                        emitChange(event, {...sanitizedValue, timezone: nextTimezone});
                    }}
                />
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
