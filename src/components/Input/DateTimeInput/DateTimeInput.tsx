import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {Temporal} from 'temporal-polyfill';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Dropdown, Menu} from '~/components';
import {Calendar} from '~/icons';
import type {DateTimeInputProps} from './DateTimeInput.types';
import type {DropdownProps} from 'react-day-picker';
import {TimezoneSelector} from '../../TimezoneSelector/TimezoneSelector';
import {BaseInput} from '../BaseInput';
import {TimeInput} from '../TimeInput';
import {
    formatDateDisplayValue,
    formatTimeString,
    fromCalendarDate,
    getCalendarDisabledMatchers,
    getTimezoneReferenceDate,
    toCalendarDate,
    type DateTimeInputValue
} from '../shared';
import styles from './DateTimeInput.module.scss';

const normalizeDateTimeValue = (
    value: DateTimeInputValue,
    type: DateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const date = value.date instanceof Temporal.PlainDateTime ? value.date : null;

    return {
        date,
        timezone: type === 'date' || !hasTimezone ? null : (value.timezone ?? null)
    } as DateTimeInputValue;
};

// DayPicker drives its month navigation with a native `Date`; we build it
// from the selected day (or today) pinned to the first of the month.
const getCalendarDisplayMonth = (value?: Temporal.PlainDate | null) =>
    toCalendarDate((value ?? Temporal.Now.plainDateISO()).with({day: 1}));

// DayPicker month range is native `Date`. Without explicit min/max we open a
// ±20-year window around the displayed month.
const getMonthRange = (displayedMonth: Date, minDate?: Temporal.PlainDate, maxDate?: Temporal.PlainDate) => ({
    startMonth: minDate ? toCalendarDate(minDate.with({day: 1})) : new Date(displayedMonth.getFullYear() - 20, 0, 1),
    endMonth: maxDate ? toCalendarDate(maxDate.with({day: 1})) : new Date(displayedMonth.getFullYear() + 20, 11, 1)
});

export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps>(({
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
    timeInputProps,
    timezoneSelectorProps,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = useState<DateTimeInputValue>(defaultValue ?? {date: null, timezone: null});
    const currentValue = normalizeDateTimeValue(internalValue, type, hasTimezone);
    const selectedDay = currentValue.date?.toPlainDate() ?? null;
    const selectedDayKey = selectedDay?.toString() ?? null;
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    // DayPicker owns its month navigation as a native `Date`.
    const [displayedMonth, setDisplayedMonth] = useState(() => getCalendarDisplayMonth(selectedDay));
    const lastSelectedDayKeyRef = useRef(selectedDayKey);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleRef = useCallback((node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
    }, [ref]);
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const {startMonth, endMonth} = getMonthRange(displayedMonth, minDate, maxDate);
    // DayPicker evaluates the matchers against a native `Date`.
    const isTodayDisabled = isDisabled || isReadOnly ||
        dateMatchModifiers(toCalendarDate(Temporal.Now.plainDateISO()), calendarDisabledMatchers);

    useEffect(() => {
        if (selectedDayKey && selectedDayKey !== lastSelectedDayKeyRef.current) {
            lastSelectedDayKeyRef.current = selectedDayKey;
            setDisplayedMonth(getCalendarDisplayMonth(Temporal.PlainDate.from(selectedDayKey)));
        }
    }, [selectedDayKey]);

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

        setInternalValue(nextDateTimeValue);
        onChange?.(event, nextDateTimeValue);
    };

    const openCalendar = () => {
        if (!isDisabled && !isReadOnly) {
            setDisplayedMonth(getCalendarDisplayMonth(selectedDay));
            setIsCalendarOpen(true);
        }
    };

    // Combines a picked calendar day with the currently selected time (midnight when none).
    const withSelectedTime = (day: Temporal.PlainDate) => day.toPlainDateTime(currentValue.date?.toPlainTime());

    return (
        <div className={clsx(styles.dateTimeInput, className)}>
            <BaseInput
                ref={handleRef}
                {...props}
                className={styles.dateField}
                value={formatDateDisplayValue(selectedDay, locale)}
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
                        captionLayout={startMonth.getFullYear() === endMonth.getFullYear() ? 'label' : 'dropdown-years'}
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
                        selected={selectedDay ? toCalendarDate(selectedDay) : undefined}
                        footer={(
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={todayButton}
                                onClick={event => {
                                    if (!isTodayDisabled) {
                                        emitChange(event, {...currentValue, date: withSelectedTime(Temporal.Now.plainDateISO())});
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

                            // `date` comes back from DayPicker as a native `Date`.
                            const nextDay = date ? withSelectedTime(fromCalendarDate(date)) : null;
                            emitChange(event, {...currentValue, date: nextDay});
                            setIsCalendarOpen(false);
                        }}
                    />
                </Menu>
            )}
            {type === 'datetime' && (
                <TimeInput
                    {...timeInputProps}
                    size={size}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    focusOnField={false}
                    timeFormat={timeFormat}
                    defaultValue={currentValue.date ? formatTimeString(currentValue.date) : null}
                    onChange={(event, timeValue) => {
                        if (!timeValue) {
                            if (selectedDay) {
                                emitChange(event, {...currentValue, date: selectedDay.toPlainDateTime()});
                            }

                            return;
                        }

                        const day = selectedDay ?? Temporal.Now.plainDateISO();
                        emitChange(event, {...currentValue, date: day.toPlainDateTime(Temporal.PlainTime.from(timeValue))});
                    }}
                />
            )}
            {type === 'datetime' && hasTimezone && (
                <TimezoneSelector
                    {...timezoneSelectorProps}
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant ?? 'outlined'}
                    isDisabled={isDisabled}
                    value={currentValue.timezone ?? null}
                    referenceDate={getTimezoneReferenceDate(selectedDay) ?? undefined}
                    onChange={(event, timezoneValue) => {
                        emitChange(event, {...currentValue, timezone: timezoneValue});
                    }}
                />
            )}
        </div>
    );
});

DateTimeInput.displayName = 'DateTimeInput';
