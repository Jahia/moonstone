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
    formatTimeString,
    getCurrentDate,
    getCalendarDisabledMatchers,
    getNormalizedDate,
    getTimezoneReferenceDate,
    type DateTimeInputValue
} from '../shared';
import styles from './DateTimeInput.module.scss';

const getDefaultDateTimeValue = (type: DateTimeInputProps['type']): DateTimeInputValue => {
    if (type === 'date') {
        return {date: getCurrentDate(), timezone: null};
    }

    const now = new Date();
    return {date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()), timezone: null};
};

const normalizeDateTimeValue = (
    value: DateTimeInputValue,
    type: DateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const date = value.date instanceof Date && !isNaN(value.date.getTime()) ? value.date : null;

    return {
        date,
        timezone: type === 'date' || !hasTimezone ? null : (value.timezone ?? null)
    } as DateTimeInputValue;
};

const getCalendarDisplayMonth = (value?: Date | null) => {
    const monthDate = getNormalizedDate(value) ?? getCurrentDate();

    return new Date(monthDate.getFullYear(), monthDate.getMonth(), 1, 12);
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
    i18n: {
        today,
        nextMonth = 'Go to the next month',
        previousMonth = 'Go to the previous month',
        ...timeInputI18n
    } = {},
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
    const [uncontrolledValue, setUncontrolledValue] = useState(() => defaultValue ?? getDefaultDateTimeValue(type));
    const sourceValue = isControlled ? value : uncontrolledValue;
    const currentValue = normalizeDateTimeValue(sourceValue, type, hasTimezone);
    const selectedDate = currentValue.date;
    const calendarDate = selectedDate ? getNormalizedDate(selectedDate) : null;
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(calendarDate || new Date());
    const lastSelectedDateTimestampRef = useRef(calendarDate?.getTime() ?? null);
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const todayDate = getCurrentDate();
    const todayButtonLabel = today || formatDateDisplayValue(todayDate, locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(selectedDate) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        const calendarDateTimestamp = calendarDate?.getTime() ?? null;

        if (calendarDate && calendarDateTimestamp !== lastSelectedDateTimestampRef.current) {
            lastSelectedDateTimestampRef.current = calendarDateTimestamp;
            setDisplayedMonth(calendarDate);
        }
    }, [calendarDate]);

    const handleMonthChange = (month: Date) => {
        if (
            month.getFullYear() !== displayedMonth.getFullYear() ||
            month.getMonth() !== displayedMonth.getMonth()
        ) {
            setDisplayedMonth(month);
        }
    };

    const emitChange = (event: React.SyntheticEvent, nextValue: DateTimeInputValue) => {
        const nextDateTimeValue = normalizeDateTimeValue(nextValue, type, hasTimezone);

        if (!isControlled) {
            setUncontrolledValue(nextDateTimeValue);
        }

        onChange?.(event, nextDateTimeValue);
    };

    return (
        <div className={clsx(styles.dateTimeInput, className)}>
            <div ref={calendarAnchorRef}>
                <BaseInput
                ref={ref}
                {...props}
                readOnly
                className={styles.dateField}
                value={formatDateDisplayValue(currentValue.date, locale)}
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
                        setDisplayedMonth(getCalendarDisplayMonth(selectedDate));
                        setIsCalendarOpen(true);
                    }
                }}
                onKeyUp={event => {
                    if ((event.key === 'Enter' || event.key === ' ') && !isDisabled && !isReadOnly) {
                        setDisplayedMonth(getCalendarDisplayMonth(selectedDate));
                        setIsCalendarOpen(true);
                    }
                }}
            />
            </div>
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
                                root: clsx(dayPickerClassNames.root, styles.dayPicker)
                            }}
                            labels={{
                                labelNext: () => nextMonth,
                                labelPrevious: () => previousMonth
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
                            selected={calendarDate ?? undefined}
                            onMonthChange={handleMonthChange}
                            onSelect={(date, _selectedDay, modifiers, event) => {
                                if (modifiers.disabled) {
                                    return;
                                }

                                const nextDay = getNormalizedDate(date);
                                const nextDate = nextDay ? new Date(
                                    nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate(), selectedDate?.getHours() ?? 0, selectedDate?.getMinutes() ?? 0
                                ) : null;
                                emitChange(event, {...currentValue, date: nextDate});
                                setIsCalendarOpen(false);
                            }}
                        />
                        <footer className={styles.calendarFooter}>
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButtonLabel}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        const nextDate = new Date(
                                            todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), selectedDate?.getHours() ?? 0, selectedDate?.getMinutes() ?? 0
                                        );
                                        emitChange(event, {...currentValue, date: nextDate});
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
                    value={selectedDate ? formatTimeString(selectedDate) : null}
                    i18n={timeInputI18n}
                    onChange={(event, timeValue) => {
                        const base = selectedDate ?? getCurrentDate();
                        const nextDate = timeValue ? (() => {
                            const [hours, minutes] = timeValue.split(':').map(Number);
                            return new Date(base.getFullYear(), base.getMonth(), base.getDate(), hours, minutes);
                        })() : new Date(base.getFullYear(), base.getMonth(), base.getDate());
                        emitChange(event, {...currentValue, date: nextDate});
                    }}
                />
            )}
            {type === 'datetime' && hasTimezone && (
                <TimezoneSelector
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant ?? 'outlined'}
                    isDisabled={isDisabled}
                    value={currentValue.timezone ?? null}
                    referenceDate={timezoneReferenceDate}
                    onChange={(event, timezoneValue) => {
                        emitChange(event, {...currentValue, timezone: timezoneValue});
                    }}
                />
            )}
        </div>
    );
});

DateTimeInput.displayName = 'DateTimeInput';
