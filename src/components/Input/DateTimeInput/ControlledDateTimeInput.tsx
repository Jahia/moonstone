import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Menu} from '~/components';
import {Calendar} from '~/icons';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {TimezoneInput} from '../TimezoneInput/TimezoneInput';
import {
    createDateTimeInputValue,
    formatDateDisplayValue,
    formatDateString,
    getCalendarDisabledMatchers,
    getTimezoneReferenceDate,
    parseDateString
} from '../shared';
import type {DateTimeInputValue} from '../shared';
import type {DateTimeInputProps} from './DateTimeInput.types';
import './DateTimeInput.scss';

type ControlledDateTimeInputProps = Extract<DateTimeInputProps, {value: DateTimeInputValue}>;

const sanitizeDateTimeValue = (
    value: DateTimeInputValue,
    type: ControlledDateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const sanitizedValue = createDateTimeInputValue(value);

    if (type === 'date') {
        sanitizedValue.time = null;
        sanitizedValue.timezone = null;
    }

    if (type === 'datetime' && !hasTimezone) {
        sanitizedValue.timezone = null;
    }

    return sanitizedValue;
};

export const ControlledDateTimeInput = React.forwardRef<HTMLInputElement, ControlledDateTimeInputProps>(({
    type,
    hasTimezone = false,
    timeFormat = '24h',
    value,
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
    onChange,
    onBlur,
    onFocus,
    ...props
}, ref) => {
    const sanitizedValue = sanitizeDateTimeValue(value, type, hasTimezone);
    const selectedDate = parseDateString(sanitizedValue.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(parseDateString(sanitizedValue.date) || new Date());
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const now = new Date();
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayButtonLabel = i18n?.today || formatDateDisplayValue(formatDateString(todayDate), locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(sanitizedValue.date) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        const selectedMonth = parseDateString(sanitizedValue.date);

        if (selectedMonth) {
            setDisplayedMonth(selectedMonth);
        }
    }, [sanitizedValue.date]);

    const emitChange = (event: React.SyntheticEvent, dateTimeValue: DateTimeInputValue) => {
        onChange(event, sanitizeDateTimeValue(dateTimeValue, type, hasTimezone));
    };

    return (
        <div className={clsx('moonstone-dateTimeInput', className)}>
            <BaseInput
                ref={ref}
                {...props}
                containerRef={calendarAnchorRef}
                className="moonstone-dateTimeInput_dateField"
                isReadOnly
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
                    anchorEl={calendarAnchorRef}
                    anchorPosition={{top: 4, left: 0}}
                    minWidth={size === 'big' ? '270px' : '235px'}
                    maxWidth="340px"
                    className="moonstone-dateTimeInput_calendarMenu"
                    onClose={() => setIsCalendarOpen(false)}
                >
                    <div className="moonstone-dateTimeInput_calendar">
                        <DayPicker
                            classNames={dayPickerClassNames}
                            labels={{
                                labelNext: () => i18n?.nextMonth || 'Go to the next month',
                                labelPrevious: () => i18n?.previousMonth || 'Go to the previous month'
                            }}
                            showOutsideDays
                            navLayout="around"
                            weekStartsOn={weekStartsOn}
                            month={displayedMonth}
                            disabled={calendarDisabledMatchers}
                            formatters={locale ? {
                                formatCaption: (date: Date) => new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(date),
                                formatDay: (date: Date) => new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(date),
                                formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date)
                            } : undefined}
                            onMonthChange={setDisplayedMonth}
                            mode="single"
                            selected={selectedDate ?? undefined}
                            onSelect={(date, _selectedDay, modifiers, event) => {
                                if (modifiers.disabled) {
                                    return;
                                }

                                emitChange(event, {...sanitizedValue, date: date ? formatDateString(date) : null});
                                setIsCalendarOpen(false);
                            }}
                        />
                        <footer className="moonstone-dateTimeInput_calendarFooter">
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButtonLabel}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        emitChange(event, {...sanitizedValue, date: formatDateString(todayDate)});
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
                    className="moonstone-dateTimeInput_timeField"
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
                <TimezoneInput
                    className="moonstone-dateTimeInput_timezoneField"
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    value={sanitizedValue.timezone ?? null}
                    referenceDate={timezoneReferenceDate}
                    placeholder={i18n?.timezone}
                    i18n={i18n}
                    onChange={(event, timezoneValue) => {
                        emitChange(event, {...sanitizedValue, timezone: timezoneValue});
                    }}
                />
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
