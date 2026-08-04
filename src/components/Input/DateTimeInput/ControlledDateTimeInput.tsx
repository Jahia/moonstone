import React, {useCallback, useState} from 'react';
import clsx from 'clsx';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Temporal} from 'temporal-polyfill';
import {Button, Dropdown, Menu, Typography} from '~/components';
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
    getMonthStart,
    getWeekStartsOn
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
    disabledDaysOfWeek,
    locale,
    dateFormat,
    weekStartsOn,
    i18n,
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

    // Resolve to a single locale: passing `undefined` through would disable the calendar
    // formatters and force getWeekStartsOn's Monday fallback, so only the text field would localize.
    const resolvedLocale = locale ?? new Intl.DateTimeFormat().resolvedOptions().locale;

    const i18nLabels = {
        todayButton: 'Today',
        nextMonth: 'Go to the next month',
        previousMonth: 'Go to the previous month',
        localTime: 'Your local time',
        ...i18n
    };

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
    const calendarDisabledMatchers = getCalendarDisabledMatchers({minDate, maxDate, disabledDates, disabledDateRanges, disabledDaysOfWeek});
    const todayDate = plainDateToDate(getTodayPlainDate());
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);
    const startMonth = getMonthStart(minPlainDate, displayedMonth.getFullYear() - 20, 0);
    const endMonth = getMonthStart(maxPlainDate, displayedMonth.getFullYear() + 20, 11);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();

    const systemTimeZone = getSystemTimeZone();
    const showLocalTime =
        type === 'zonedDateTime' &&
        selectedDate !== null &&
        selectedTime !== null &&
        currentTimeZone !== systemTimeZone &&
        currentValue instanceof Temporal.ZonedDateTime;

    const localTimeFormatted = showLocalTime ?
        new Intl.DateTimeFormat(resolvedLocale, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: timeFormat === '12h',
            timeZone: systemTimeZone
        }).format(new Date((currentValue as Temporal.ZonedDateTime).withTimeZone(systemTimeZone).epochMilliseconds)) :
        null;

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
                className={styles.dateField}
                value={formatPlainDate(selectedDate, resolvedLocale, dateFormat)}
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                icon={<Calendar aria-hidden/>}
                // No-op: calendar-driven, not typed into. Avoids the controlled-input warning
                onChange={() => undefined}
                // The date is the value's spine, so clearing it clears the whole value: emit null
                // (time goes with it) and reset the pre-date zone fallback. Reported via onChange(null).
                onClear={event => {
                    emitChange(event, {plainDate: null});
                    setFallbackZone(getSystemTimeZone());
                }}
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
                    position="absolute"
                    onClose={() => setIsCalendarOpen(false)}
                >
                    <DayPicker
                        animate
                        data-testid="calendar"
                        classNames={{
                            /* eslint-disable camelcase -- react-day-picker classnames are its public API */
                            ...dayPickerClassNames,
                            root: clsx(dayPickerClassNames.root, styles.calendar),
                            month_caption: clsx(dayPickerClassNames.month_caption, styles.calendarHeader),
                            dropdowns: clsx(dayPickerClassNames.dropdowns, styles.calendarDropdowns),
                            button_next: clsx(dayPickerClassNames.button_next, styles.calendarNextButton),
                            button_previous: clsx(dayPickerClassNames.button_previous, styles.calendarPreviousButton),
                            weekday: clsx(dayPickerClassNames.weekday, styles.calendarWeekday),
                            today: styles.calendarToday,
                            selected: styles.calendarSelectedDate,
                            disabled: styles.calendarDisabledDate,
                            day_button: clsx(dayPickerClassNames.day_button, styles.calendarDayButton),
                            footer: styles.calendarFooter
                            /* eslint-enable camelcase */
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
                            labelNext: () => i18nLabels.nextMonth,
                            labelPrevious: () => i18nLabels.previousMonth
                        }}
                        captionLayout={hasMultipleYears ? 'dropdown-years' : 'label'}
                        navLayout="around"
                        weekStartsOn={weekStartsOn ?? getWeekStartsOn(resolvedLocale)}
                        month={displayedMonth}
                        startMonth={startMonth}
                        endMonth={endMonth}
                        disabled={calendarDisabledMatchers}
                        formatters={{
                            formatCaption: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, {month: 'long', year: 'numeric'}).format(date),
                            formatMonthDropdown: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, {month: 'long'}).format(date),
                            formatDay: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, {day: 'numeric'}).format(date),
                            formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, {weekday: 'short'}).format(date)
                        }}
                        mode="single"
                        selected={selectedDate ? plainDateToDate(selectedDate) : undefined}
                        footer={(
                            <Button
                                variant="ghost"
                                size="default"
                                isDisabled={isTodayDisabled}
                                label={i18nLabels.todayButton}
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
                    value={selectedTime}
                    onChange={(event, time) => {
                        // Clearing the time with no date is a no-op; otherwise a null time
                        // assembles to midnight (and the controlled field then shows 00:00).
                        if (time === null && selectedDate === null) {
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
                    isReadOnly={isReadOnly}
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
            {showLocalTime && (
                <Typography component="span" variant="caption" className={styles.localTimeConversion}>
                    {i18nLabels.localTime}: {localTimeFormatted}
                </Typography>
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
