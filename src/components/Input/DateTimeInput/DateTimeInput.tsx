import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Button, Menu} from '~/components';
import {Calendar} from '~/icons';
import {layout} from '~/globals/css-utils';
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
import './DateTimeInput.scss';

const getDefaultDateTimeValue = (type: DateTimeInputProps['type']): DateTimeInputValue => type === 'date' ?
    {date: getCurrentDate(), time: null, timezone: null} :
    {date: getCurrentDate(), time: getCurrentTimeString(), timezone: null};

const normalizeDateTimeValue = (
    value: DateTimeInputValue,
    type: DateTimeInputProps['type'],
    hasTimezone?: boolean
) => {
    const nextValue: DateTimeInputValue = {
        date: getNormalizedDate(value.date),
        time: value.time ?? null,
        timezone: value.timezone ?? null
    };

    if (type === 'date') {
        nextValue.time = null;
        nextValue.timezone = null;
    }

    if (type === 'datetime' && !hasTimezone) {
        nextValue.timezone = null;
    }

    return nextValue;
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
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState(() => getCalendarDisplayMonth(selectedDate));
    const calendarAnchorRef = useRef<HTMLDivElement>(null);
    const todayDate = getCurrentDate();
    const todayButtonLabel = today || formatDateDisplayValue(todayDate, locale);
    const timezoneReferenceDate = getTimezoneReferenceDate(selectedDate) ?? undefined;
    const calendarDisabledMatchers = getCalendarDisabledMatchers(minDate, maxDate, disabledDates, disabledDateRanges);
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);

    useEffect(() => {
        if (isCalendarOpen) {
            setDisplayedMonth(getCalendarDisplayMonth(selectedDate));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    const emitChange = (event: React.SyntheticEvent, nextValue: DateTimeInputValue) => {
        const nextDateTimeValue = normalizeDateTimeValue(nextValue, type, hasTimezone);

        if (!isControlled) {
            setUncontrolledValue(nextDateTimeValue);
        }

        onChange?.(event, nextDateTimeValue);
    };

    return (
        <div className={clsx('moonstone-dateTimeInput', className)}>
            <BaseInput
                ref={ref}
                {...props}
                readOnly
                containerRef={calendarAnchorRef}
                className="moonstone-dateTimeInput_dateField"
                value={formatDateDisplayValue(selectedDate, locale)}
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
            {calendarAnchorRef.current && (
                <Menu
                    isDisplayed={isCalendarOpen}
                    anchorEl={calendarAnchorRef as React.MutableRefObject<HTMLDivElement>}
                    anchorPosition={{top: 4, left: 0}}
                    minWidth={size === 'big' ? '270px' : '235px'}
                    maxWidth="320px"
                    onClose={() => setIsCalendarOpen(false)}
                >
                    <DayPicker
                        showOutsideDays
                        classNames={{
                            ...dayPickerClassNames,
                            root: clsx(dayPickerClassNames.root, 'moonstone-dateTimeInput_dayPicker')
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
                        selected={selectedDate ?? undefined}
                        onMonthChange={month => setDisplayedMonth(getCalendarDisplayMonth(month))}
                        onSelect={(date, _selectedDay, modifiers, event) => {
                            if (modifiers.disabled) {
                                return;
                            }

                            emitChange(event, {...currentValue, date: getNormalizedDate(date)});
                            setIsCalendarOpen(false);
                        }}
                    />
                    <footer className={clsx('moonstone-dateTimeInput_calendarFooter', 'flexRow_center', layout.flexRow_center)}>
                        <Button
                            variant="ghost"
                            size="default"
                            isDisabled={isTodayDisabled}
                            label={todayButtonLabel}
                            onClick={event => {
                                if (!isTodayDisabled) {
                                    emitChange(event, {...currentValue, date: todayDate});
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
                    value={currentValue.time ?? null}
                    i18n={timeInputI18n}
                    onChange={(event, timeValue) => {
                        emitChange(event, {...currentValue, time: timeValue});
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
