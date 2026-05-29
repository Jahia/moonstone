import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Dropdown, Menu} from '~/components';
import {useControllableState} from '~/hooks';
import {Calendar} from '~/icons';
import type {DateTimeInputProps} from './DateTimeInput.types';
import type {DropdownProps} from 'react-day-picker';
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
    disabledDates = [],
    disabledDateRanges = [],
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
    ...props
}, ref) => {
    const [rawValue, setRawValue] = useControllableState<DateTimeInputValue>(value, defaultValue ?? {date: null, timezone: null});
    const currentValue = normalizeDateTimeValue(rawValue, type, hasTimezone);
    const selectedDate = currentValue.date;
    const calendarDate = selectedDate ? getNormalizedDate(selectedDate) ?? undefined : undefined;
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(calendarDate || new Date());
    const lastSelectedDateTimestampRef = useRef(calendarDate?.getTime() ?? null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleRef = useCallback((node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
    }, [ref]);
    const todayDate = getCurrentDate();
    const timezoneReferenceDate = getTimezoneReferenceDate(selectedDate) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);
    const startMonth = minDate ? new Date(minDate.getFullYear(), minDate.getMonth(), 1) : new Date(displayedMonth.getFullYear() - 20, 0, 1);
    const endMonth = maxDate ? new Date(maxDate.getFullYear(), maxDate.getMonth(), 1) : new Date(displayedMonth.getFullYear() + 20, 11, 1);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();

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

        setRawValue(nextDateTimeValue);
        onChange?.(event, nextDateTimeValue);
    };

    const openCalendar = () => {
        if (!isDisabled && !isReadOnly) {
            setDisplayedMonth(getCalendarDisplayMonth(selectedDate));
            setIsCalendarOpen(true);
        }
    };

    const withSelectedTime = (day: Date) => new Date(
        day.getFullYear(), day.getMonth(), day.getDate(), selectedDate?.getHours() ?? 0, selectedDate?.getMinutes() ?? 0
    );

    return (
        <div className={clsx(styles.dateTimeInput, className)}>
            <BaseInput
                ref={handleRef}
                {...props}
                readOnly
                className={styles.dateField}
                value={formatDateDisplayValue(currentValue.date, locale)}
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
                            root: clsx(dayPickerClassNames.root, styles.dayPicker)
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
                        selected={calendarDate}
                        onMonthChange={handleMonthChange}
                        onSelect={(date, _selectedDay, modifiers, event) => {
                            if (modifiers.disabled) {
                                return;
                            }

                            const nextDay = getNormalizedDate(date);
                            emitChange(event, {...currentValue, date: nextDay ? withSelectedTime(nextDay) : null});
                            setIsCalendarOpen(false);
                        }}
                    />
                    <footer className={styles.calendarFooter}>
                        <Button
                            variant="ghost"
                            size="default"
                            isDisabled={isTodayDisabled}
                            label={todayButton}
                            onClick={event => {
                                if (!isTodayDisabled) {
                                    emitChange(event, {...currentValue, date: withSelectedTime(todayDate)});
                                    setIsCalendarOpen(false);
                                }
                            }}
                        />
                    </footer>
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
                    onChange={(event, timeValue) => {
                        if (!timeValue) {
                            return;
                        }

                        const base = selectedDate ?? getCurrentDate();
                        const [hours, minutes] = timeValue.split(':').map(Number);
                        const nextDate = new Date(base.getFullYear(), base.getMonth(), base.getDate(), hours, minutes);
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
