import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker, type DateRange as DayPickerDateRange} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Menu} from '~/components';
import {Calendar} from '~/icons';
import type {DateTimeInputProps} from './DateTimeInput.types';
import styles from './DateTimeInput.module.scss';
import {TimezoneSelector} from '../../TimezoneSelector/TimezoneSelector';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {
    type DateInputValue,
    formatDateDisplayValue,
    formatDateValueDisplayValue,
    getCurrentDate,
    getCurrentTimeString,
    getCalendarDisabledMatchers,
    getNormalizedDate,
    getNormalizedDateRange,
    getTimezoneReferenceDate,
    isDateRange,
    type DateTimeInputValue
} from '../shared';

type InputValue = DateInputValue | DateTimeInputValue;

const sanitizeDateTimeValue = (
    value: InputValue,
    type: DateTimeInputProps['type'],
    hasTimezone?: boolean
) : InputValue => {
    if (type === 'date') {
        return {
            date: isDateRange(value.date) ? getNormalizedDateRange(value.date) : getNormalizedDate(value.date)
        };
    }

    const sanitizedValue: DateTimeInputValue = {
        date: isDateRange(value.date) ? null : getNormalizedDate(value.date),
        time: 'time' in value ? value.time ?? null : null,
        timezone: 'timezone' in value ? value.timezone ?? null : null
    };

    if (type === 'datetime' && !hasTimezone) {
        sanitizedValue.timezone = null;
    }

    return sanitizedValue;
};

export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps>(({
    value,
    defaultValue,
    onChange,
    type,
    mode = 'single',
    hasTimezone = false,
    timeFormat = '24h',
    minDate,
    maxDate,
    disabledDates,
    disabledDateRanges,
    locale,
    weekStartsOn = 1,
    i18n,
    size,
    variant,
    placeholder,
    className,
    isDisabled,
    isReadOnly,
    focusOnField,
    onBlur,
    onFocus,
    ...props
}, ref) => {
    const isControlled = typeof value !== 'undefined';
    const [dateTimeValue, setDateTimeValue] = useState<InputValue>(
        defaultValue ?
            sanitizeDateTimeValue(defaultValue, type, hasTimezone) :
            type === 'date' ?
                {date: mode === 'range' ? null : getCurrentDate(), time: null, timezone: null} :
                {date: getCurrentDate(), time: getCurrentTimeString(), timezone: null}
    );
    const sanitizedValue = sanitizeDateTimeValue(
        (isControlled ? value : dateTimeValue) as InputValue,
        type,
        hasTimezone
    );
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(
        isDateRange(sanitizedValue.date) ?
            sanitizedValue.date.from || sanitizedValue.date.to || new Date() :
            sanitizedValue.date || new Date()
    );
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const todayDate = getCurrentDate();
    const todayButtonLabel = i18n?.today || formatDateDisplayValue(todayDate, locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(
        isDateRange(sanitizedValue.date) ? null : sanitizedValue.date
    ) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        if (isDateRange(sanitizedValue.date)) {
            if (sanitizedValue.date.from || sanitizedValue.date.to) {
                setDisplayedMonth(sanitizedValue.date.from || sanitizedValue.date.to || new Date());
            }
            return;
        }

        if (sanitizedValue.date) {
            setDisplayedMonth(sanitizedValue.date);
        }
    }, [sanitizedValue.date]);

    const emitChange = (event: React.SyntheticEvent, nextValue: InputValue) => {
        const sanitizedNextValue = sanitizeDateTimeValue(nextValue, type, hasTimezone);

        if (!isControlled) {
            setDateTimeValue(sanitizedNextValue);
        }

        (onChange as ((event: React.SyntheticEvent, value: InputValue) => void) | undefined)?.(event, sanitizedNextValue);
    };

    return (
        <div className={clsx('moonstone-dateTimeInput', styles['moonstone-dateTimeInput'], className)}>
            <BaseInput
                ref={ref}
                {...props}
                readOnly
                containerRef={calendarAnchorRef}
                className={clsx(
                    'moonstone-dateTimeInput_dateField',
                    styles['moonstone-dateTimeInput_dateField'],
                    mode === 'range' && styles['moonstone-dateTimeInput_dateFieldRange'],
                    mode === 'range' && 'moonstone-dateTimeInput_dateFieldRange'
                )}
                value={formatDateValueDisplayValue(sanitizedValue.date, locale)}
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                focusOnField={focusOnField}
                placeholder={placeholder}
                icon={<Calendar aria-hidden/>}
                onBlur={onBlur}
                onFocus={onFocus}
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
            {calendarAnchorRef.current && (
                <Menu
                    isDisplayed={isCalendarOpen}
                    anchorEl={calendarAnchorRef as React.MutableRefObject<HTMLDivElement>}
                    anchorPosition={{top: 4, left: 0}}
                    minWidth={size === 'big' ? '270px' : '235px'}
                    maxWidth="320px"
                    onClose={() => setIsCalendarOpen(false)}
                >
                    <div>
                        {mode === 'range' ? (
                            <DayPicker
                                showOutsideDays
                                classNames={{
                                    ...dayPickerClassNames,
                                    root: clsx(dayPickerClassNames.root, 'moonstone-dateTimeInput_dayPicker', styles['moonstone-dateTimeInput_dayPicker'])
                                }}
                                labels={{
                                    labelNext: () => i18n?.nextMonth || 'Go to the next month',
                                    labelPrevious: () => i18n?.previousMonth || 'Go to the previous month'
                                }}
                                navLayout="around"
                                weekStartsOn={weekStartsOn}
                                month={displayedMonth}
                                disabled={calendarDisabledMatchers}
                                excludeDisabled
                                formatters={locale ? {
                                    formatCaption: (date: Date) => new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(date),
                                    formatDay: (date: Date) => new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(date),
                                    formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date)
                                } : undefined}
                                mode="range"
                                selected={
                                    isDateRange(sanitizedValue.date) && sanitizedValue.date.from ?
                                        sanitizedValue.date as DayPickerDateRange :
                                        undefined
                                }
                                onMonthChange={setDisplayedMonth}
                                onSelect={(
                                    date: DayPickerDateRange | undefined,
                                    _selectedDay,
                                    modifiers,
                                    event
                                ) => {
                                    if (modifiers.disabled) {
                                        return;
                                    }

                                    emitChange(event, {...sanitizedValue, date: getNormalizedDateRange(date)});
                                }}
                            />
                        ) : (
                            <DayPicker
                                showOutsideDays
                                classNames={{
                                    ...dayPickerClassNames,
                                    root: clsx(dayPickerClassNames.root, 'moonstone-dateTimeInput_dayPicker', styles['moonstone-dateTimeInput_dayPicker'])
                                }}
                                labels={{
                                    labelNext: () => i18n?.nextMonth || 'Go to the next month',
                                    labelPrevious: () => i18n?.previousMonth || 'Go to the previous month'
                                }}
                                navLayout="around"
                                weekStartsOn={weekStartsOn}
                                month={displayedMonth}
                                disabled={calendarDisabledMatchers}
                                formatters={locale ? {
                                    formatCaption: (date: Date) => new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(date),
                                    formatDay: (date: Date) => new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(date),
                                    formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date)
                                } : undefined}
                                mode="single"
                                selected={isDateRange(sanitizedValue.date) ? undefined : sanitizedValue.date || undefined}
                                onMonthChange={setDisplayedMonth}
                                onSelect={(date, _selectedDay, modifiers, event) => {
                                    if (modifiers.disabled) {
                                        return;
                                    }

                                    emitChange(event, {...sanitizedValue, date: getNormalizedDate(date)});
                                    setIsCalendarOpen(false);
                                }}
                            />
                        )}
                        <footer className={clsx('moonstone-dateTimeInput_calendarFooter', styles['moonstone-dateTimeInput_calendarFooter'])}>
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButtonLabel}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        emitChange(
                                            event,
                                            {
                                                ...sanitizedValue,
                                                date: mode === 'range' ? {from: todayDate, to: todayDate} : todayDate
                                            }
                                        );
                                        setIsCalendarOpen(false);
                                    }
                                }}
                            />
                        </footer>
                    </div>
                </Menu>
            )}
            {type === 'datetime' && (
                <TimeInput
                    size={size}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    focusOnField={false}
                    timeFormat={timeFormat}
                    value={(sanitizedValue as DateTimeInputValue).time ?? null}
                    i18n={i18n}
                    onChange={(event, timeValue) => {
                        emitChange(event, {...(sanitizedValue as DateTimeInputValue), time: timeValue});
                    }}
                />
            )}
            {type === 'datetime' && hasTimezone && (
                <TimezoneSelector
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant ?? 'outlined'}
                    isDisabled={isDisabled}
                    value={(sanitizedValue as DateTimeInputValue).timezone ?? null}
                    referenceDate={timezoneReferenceDate}
                    onChange={(event, timezoneValue) => {
                        emitChange(event, {...(sanitizedValue as DateTimeInputValue), timezone: timezoneValue});
                    }}
                />
            )}
        </div>
    );
});

DateTimeInput.displayName = 'DateTimeInput';
