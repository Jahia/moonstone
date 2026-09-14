import React, {useState} from 'react';
import clsx from 'clsx';
import {autoUpdate, flip, FloatingPortal, offset, shift, useDismiss, useFloating, useInteractions, useMergeRefs} from '@floating-ui/react';
import {dateMatchModifiers, DayPicker} from '@daypicker/react';
import dayPickerClassNames from '@daypicker/react/style.module.css';
import {Temporal} from 'temporal-polyfill';
import {Button, Dropdown, Typography} from '~/components';
import {Calendar} from '~/icons';
import type {DropdownProps} from '@daypicker/react';
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
    getWeekStartsOn,
    parseDateInput
} from './calendarHelpers';
import {
    assembleValue,
    getPlainDate,
    getPlainTime,
    getTimeZone,
    parseValue
} from './dateTimeValue';
import type {ControlledDateTimeInputProps} from './DateTimeInput.types';
import baseInputStyles from '../BaseInput/BaseInput.module.scss';
import styles from './DateTimeInput.module.scss';

// Options outside `startMonth`/`endMonth` arrive already flagged as disabled.
const toDropdownData = (options: DropdownProps['options']) => (options ?? []).map(option => ({
    label: option.label,
    value: String(option.value),
    isDisabled: option.disabled
}));

const getCaptionLayout = (hasMultipleMonths: boolean, hasMultipleYears: boolean) => {
    if (hasMultipleMonths) {
        return hasMultipleYears ? 'dropdown' : 'dropdown-months';
    }

    return hasMultipleYears ? 'dropdown-years' : 'label';
};

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
    onBlur,
    autoComplete = 'off',
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
    const [draft, setDraft] = useState<string | null>(null);
    const [displayedMonth, setDisplayedMonth] = useState(() => getDisplayMonth(selectedDate));
    // The zone to apply while no date exists yet (so a pre-date zone choice isn't lost).
    // Once a date is picked the value carries its own zone, which takes precedence.
    const [fallbackZone, setFallbackZone] = useState(() => getTimeZone(currentValue) ?? getSystemTimeZone());
    const currentTimeZone = getTimeZone(currentValue) ?? fallbackZone;

    const {refs, floatingStyles, context} = useFloating({
        open: isCalendarOpen,
        onOpenChange: setIsCalendarOpen,
        placement: 'bottom-start',
        transform: false,
        middleware: [offset(4), flip({padding: 8}), shift({padding: 8})],
        whileElementsMounted: autoUpdate
    });
    // Escape is handled on `fieldsRow` below, not by floating-ui's `document` listener, which the
    // consumer's Modal also uses. `FloatingTree` would scope it, but Modal doesn't render one.
    const {getFloatingProps} = useInteractions([useDismiss(context, {escapeKey: false})]);
    const fieldRef = useMergeRefs([refs.setReference, ref]);

    const minPlainDate = toPlainDate(minDate);
    const maxPlainDate = toPlainDate(maxDate);
    const calendarDisabledMatchers = getCalendarDisabledMatchers({minDate, maxDate, disabledDates, disabledDateRanges, disabledDaysOfWeek});
    const todayDate = plainDateToDate(getTodayPlainDate());
    const isTodayUnavailable = dateMatchModifiers(todayDate, calendarDisabledMatchers);
    const isTodayDisabled = isDisabled || isReadOnly || isTodayUnavailable;
    // Anchored on the selection, not the displayed month, so the range doesn't slide while navigating.
    const referenceYear = (selectedDate ?? getTodayPlainDate()).year;
    const startMonth = getMonthStart(minPlainDate, referenceYear - 50, 0);
    const endMonth = getMonthStart(maxPlainDate, referenceYear + 50, 11);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();
    const hasMultipleMonths = startMonth.getTime() !== endMonth.getTime();

    const clampToRange = (month: Date) => {
        if (month < startMonth) {
            return startMonth;
        }

        return month > endMonth ? endMonth : month;
    };

    const captionLayout = getCaptionLayout(hasMultipleMonths, hasMultipleYears);

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
        }).format(new Date((currentValue as Temporal.ZonedDateTime).epochMilliseconds)) :
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
        setDraft(null);
        const {plainDate = selectedDate, plainTime = selectedTime, timeZone = currentTimeZone} = change;
        onChange?.(event, assembleValue(plainDate, plainTime, timeZone, type));
    };

    const clearValue = (event: React.SyntheticEvent) => {
        emitChange(event, {plainDate: null});
        setFallbackZone(getSystemTimeZone());
    };

    const commitDraft = (event: React.SyntheticEvent) => {
        if (draft === null) {
            return;
        }

        setDraft(null);

        if (draft.trim() === '') {
            clearValue(event);
            return;
        }

        const typedDate = parseDateInput(draft, resolvedLocale, dateFormat);

        if (typedDate && !dateMatchModifiers(plainDateToDate(typedDate), calendarDisabledMatchers)) {
            emitChange(event, {plainDate: typedDate});
        }
    };

    const openCalendar = () => {
        if (!isDisabled && !isReadOnly) {
            refs.setPositionReference(refs.domReference.current?.closest(`.${baseInputStyles['moonstone-baseInput']}`) ?? null);
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
            <div
                className={styles.fieldsRow}
                onKeyDown={event => {
                    if (event.key === 'Escape' && isCalendarOpen) {
                        event.stopPropagation();
                        setIsCalendarOpen(false);
                    }
                }}
            >
                <BaseInput
                    ref={fieldRef}
                    {...props}
                    className={styles.dateField}
                    value={draft ?? formatPlainDate(selectedDate, resolvedLocale, dateFormat)}
                    size={size}
                    variant={variant}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    autoComplete={autoComplete}
                    icon={<Calendar aria-hidden/>}
                    onChange={event => setDraft(event.target.value)}
                    onClear={event => {
                        event.stopPropagation();
                        clearValue(event);
                    }}
                    onClick={openCalendar}
                    onBlur={event => {
                        commitDraft(event);
                        onBlur?.(event);
                    }}
                    onKeyDown={event => {
                        // Only on an untouched field — once a draft exists Space is a character; keydown runs before insertion.
                        if (event.key === ' ' && draft === null) {
                            event.preventDefault();
                            openCalendar();
                        }
                    }}
                    onKeyUp={event => {
                        if (event.key === 'Enter') {
                            if (draft === null) {
                                openCalendar();
                            } else {
                                commitDraft(event);
                                setIsCalendarOpen(false);
                            }
                        }
                    }}
                />
                {isCalendarOpen && (
                    <FloatingPortal>
                        <div
                            ref={refs.setFloating}
                            className={styles.calendarPopover}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <DayPicker
                                data-testid="calendar"
                                classNames={{
                                    /* eslint-disable camelcase -- DayPicker classnames are its public API */
                                    ...dayPickerClassNames,
                                    root: clsx(dayPickerClassNames.root, styles.calendar),
                                    month_caption: clsx(dayPickerClassNames.month_caption, styles.calendarHeader),
                                    month_grid: clsx(dayPickerClassNames.month_grid, styles.calendarGrid),
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
                                    MonthsDropdown: (dropdownProps: DropdownProps) => (
                                        <Dropdown
                                            size="medium"
                                            variant="ghost"
                                            hasSearch={false}
                                            data={toDropdownData(dropdownProps.options)}
                                            value={String(dropdownProps.value ?? '')}
                                            onChange={(_e, item) => {
                                                setDisplayedMonth(clampToRange(new Date(displayedMonth.getFullYear(), Number(item.value), 1)));
                                            }}
                                        />
                                    ),
                                    YearsDropdown: (dropdownProps: DropdownProps) => (
                                        <Dropdown
                                            size="medium"
                                            variant="ghost"
                                            data={toDropdownData(dropdownProps.options)}
                                            value={String(dropdownProps.value ?? '')}
                                            onChange={(_e, item) => {
                                                setDisplayedMonth(clampToRange(new Date(Number(item.value), displayedMonth.getMonth(), 1)));
                                            }}
                                        />
                                    )
                                }}
                                labels={{
                                    labelNext: () => i18nLabels.nextMonth,
                                    labelPrevious: () => i18nLabels.previousMonth
                                }}
                                captionLayout={captionLayout}
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
                                            emitChange(event, {plainDate: getTodayPlainDate()});
                                            setIsCalendarOpen(false);
                                        }}
                                    />
                                )}
                                onMonthChange={handleMonthChange}
                                onSelect={(date, _selectedDay, modifiers, event) => {
                                    if (modifiers.disabled) {
                                        return;
                                    }

                                    // Re-clicking the selected day is DayPicker's deselect; keep the value.
                                    if (date) {
                                        emitChange(event, {plainDate: dateToPlainDate(date)});
                                    }

                                    setIsCalendarOpen(false);
                                }}
                            />
                        </div>
                    </FloatingPortal>
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
                            // With no date, a cleared time or an unavailable today has nothing to emit.
                            if (selectedDate === null && (time === null || isTodayUnavailable)) {
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

                            // With no date yet, just remember the zone; it applies once a date is picked.
                            if (selectedDate) {
                                emitChange(event, {timeZone: zone});
                            }
                        }}
                    />
                )}
            </div>
            {showLocalTime && (
                <Typography component="span" variant="caption" className={styles.localTimeConversion}>
                    {i18nLabels.localTime}: {localTimeFormatted}
                </Typography>
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
