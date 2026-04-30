import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Menu} from '~/components';
import {Calendar} from '~/icons';
import type {DateTimeInputProps} from './DateTimeInput.types';
import {TimezoneSelector} from '../../TimezoneSelector/TimezoneSelector';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {
    formatDateDisplayValue,
    getCurrentDate,
    getCurrentTimeString,
    getCalendarDisabledMatchers,
    getNormalizedDate,
    getTimezoneReferenceDate,
    type DateTimeInputValue
} from '../shared';
import styles from './DateTimeInput.module.scss';

const sanitizeDateTimeValue = (
    value: DateTimeInputValue,
    type: DateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const sanitizedValue: DateTimeInputValue = {
        date: getNormalizedDate(value.date),
        time: value.time ?? null,
        timezone: value.timezone ?? null
    };

    if (type === 'date') {
        sanitizedValue.time = null;
        sanitizedValue.timezone = null;
    }

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
    const [dateTimeValue, setDateTimeValue] = useState(
        defaultValue ?
            sanitizeDateTimeValue(defaultValue, type, hasTimezone) :
            type === 'date' ?
                {date: getCurrentDate(), time: null, timezone: null} :
                {date: getCurrentDate(), time: getCurrentTimeString(), timezone: null}
    );
    const sanitizedValue = sanitizeDateTimeValue(isControlled ? value : dateTimeValue, type, hasTimezone);
    const selectedDate = sanitizedValue.date;
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(sanitizedValue.date || new Date());
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const todayDate = getCurrentDate();
    const todayButtonLabel = i18n?.today || formatDateDisplayValue(todayDate, locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(sanitizedValue.date) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        if (sanitizedValue.date) {
            setDisplayedMonth(sanitizedValue.date);
        }
    }, [sanitizedValue.date]);

    const emitChange = (event: React.SyntheticEvent, nextValue: DateTimeInputValue) => {
        const sanitizedNextValue = sanitizeDateTimeValue(nextValue, type, hasTimezone);

        if (!isControlled) {
            setDateTimeValue(sanitizedNextValue);
        }

        onChange?.(event, sanitizedNextValue);
    };

    return (
        <div className={clsx(['moonstone-dateTimeInput', styles['moonstone-dateTimeInput']], className)}>
            <BaseInput
                ref={ref}
                {...props}
                readOnly
                containerRef={calendarAnchorRef}
                className={clsx('moonstone-dateTimeInput_dateField', styles['moonstone-dateTimeInput_dateField'])}
                value={formatDateDisplayValue(sanitizedValue.date, locale)}
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
                            selected={selectedDate ?? undefined}
                            onMonthChange={setDisplayedMonth}
                            onSelect={(date, _selectedDay, modifiers, event) => {
                                if (modifiers.disabled) {
                                    return;
                                }

                                emitChange(event, {...sanitizedValue, date: getNormalizedDate(date)});
                                setIsCalendarOpen(false);
                            }}
                        />
                        <footer className={clsx('moonstone-dateTimeInput_calendarFooter', styles['moonstone-dateTimeInput_calendarFooter'])}>
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButtonLabel}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        emitChange(event, {...sanitizedValue, date: todayDate});
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
                    value={sanitizedValue.time ?? null}
                    i18n={i18n}
                    onChange={(event, timeValue) => {
                        emitChange(event, {...sanitizedValue, time: timeValue});
                    }}
                />
            )}
            {type === 'datetime' && hasTimezone && (
                <TimezoneSelector
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant ?? 'outlined'}
                    isDisabled={isDisabled}
                    value={sanitizedValue.timezone ?? null}
                    referenceDate={timezoneReferenceDate}
                    onChange={(event, timezoneValue) => {
                        emitChange(event, {...sanitizedValue, timezone: timezoneValue});
                    }}
                />
            )}
        </div>
    );
});

DateTimeInput.displayName = 'DateTimeInput';
