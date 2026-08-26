import React, {useState} from 'react';
import clsx from 'clsx';
import {autoUpdate, flip, FloatingPortal, offset, shift, size as floatingSize, useDismiss, useFloating, useInteractions, useMergeRefs} from '@floating-ui/react';
import type {SizeOptions} from '@floating-ui/react';
import {dateMatchModifiers, DayPicker} from 'react-day-picker';
import dayPickerClassNames from 'react-day-picker/style.module.css';
import {Temporal} from 'temporal-polyfill';
import {Button, Dropdown, Typography} from '~/components';
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
import styles from './DateTimeInput.module.scss';

// Both header dropdowns render identically; only the value they write back differs.
// `getMonthOptions`/`getYearOptions` already flag the options outside `startMonth`/`endMonth`,
// so `minDate`/`maxDate` are honoured without any extra work here.
const toDropdownData = (options: DropdownProps['options']) => (options ?? []).map(option => ({
    label: option.label,
    value: String(option.value),
    isDisabled: option.disabled
}));

// A caption control is a dropdown only in its matching `dropdown*` layout, and plain text
// otherwise: `dropdown-years` is exactly why the month currently renders as a `<span>`. So the
// month select appears strictly when asked for, and the default header stays untouched.
const getCaptionLayout = (isShowMonthDropdown: boolean, hasMultipleYears: boolean) => {
    if (isShowMonthDropdown) {
        return hasMultipleYears ? 'dropdown' : 'dropdown-months';
    }

    return hasMultipleYears ? 'dropdown-years' : 'label';
};

const capCalendarHeight: SizeOptions['apply'] = ({availableHeight, elements}) => {
    elements.floating.style.maxHeight = `${availableHeight}px`;
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
    isShowMonthDropdown,
    isError,
    i18n,
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    timeInputProps,
    timezoneSelectorProps,
    fallbackTimeZone,
    onBlur,
    onInvalidInput,
    ...props
}, ref) => {
    const currentValue = parseValue(value, type, fallbackTimeZone);
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
        middleware: [offset(4), flip({padding: 8}), shift({padding: 8}), floatingSize({padding: 8, apply: capCalendarHeight})], whileElementsMounted: autoUpdate
    });
    const {getFloatingProps} = useInteractions([useDismiss(context)]);
    const fieldRef = useMergeRefs([refs.setReference, ref]);

    const minPlainDate = toPlainDate(minDate);
    const maxPlainDate = toPlainDate(maxDate);
    const calendarDisabledMatchers = getCalendarDisabledMatchers({minDate, maxDate, disabledDates, disabledDateRanges, disabledDaysOfWeek});
    const todayDate = plainDateToDate(getTodayPlainDate());
    const isTodayDisabled = isDisabled || isReadOnly || dateMatchModifiers(todayDate, calendarDisabledMatchers);
    // Anchored on the selected date (today when there is none), not on the displayed month:
    // deriving the range from `displayedMonth` made the window slide along with navigation, so
    // jumping to 2046 turned it into 2026-2066 and dropped the years already visited.
    const referenceYear = (selectedDate ?? getTodayPlainDate()).year;
    const startMonth = getMonthStart(minPlainDate, referenceYear - 50, 0);
    const endMonth = getMonthStart(maxPlainDate, referenceYear + 50, 11);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();
    const captionLayout = getCaptionLayout(Boolean(isShowMonthDropdown), hasMultipleYears);

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
            return;
        }

        // Unreadable, or readable but unavailable: same outcome for the value (nothing is
        // emitted, the field falls back to the stored date) but the consumer now hears about it.
        onInvalidInput?.(event, draft);
    };

    const openCalendar = () => {
        if (!isDisabled && !isReadOnly) {
            refs.setPositionReference(refs.domReference.current?.closest('.moonstone-baseInput') ?? null);
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
                ref={fieldRef}
                {...props}
                className={clsx(styles.dateField, isError && styles.dateFieldError)}
                value={draft ?? formatPlainDate(selectedDate, resolvedLocale, dateFormat)}
                aria-invalid={isError || undefined}
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
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
                    // Escape closes the calendar and stops there. `useDismiss` would do the
                    // closing, but it listens on `document` — and so does the consumer's Modal,
                    // through its own `useDismiss`. Two listeners on the same node means
                    // `stopPropagation` from one cannot spare the other, so a single Escape would
                    // close the calendar and the Modal around it. React attaches events at the
                    // root, below `document`, so stopping here keeps the key from reaching either.
                    if (event.key === 'Escape' && isCalendarOpen) {
                        event.stopPropagation();
                        setIsCalendarOpen(false);
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

                    // Space only opens, and only while nothing has been typed: a date pattern can
                    // use spaces as separators (`30 03 2026`), so it has to stay a plain character
                    // as soon as the field holds a draft.
                    if (event.key === ' ' && draft === null) {
                        openCalendar();
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
                                MonthsDropdown: (dropdownProps: DropdownProps) => (
                                    <Dropdown
                                        size="medium"
                                        variant="ghost"
                                        hasSearch={false}
                                        data={toDropdownData(dropdownProps.options)}
                                        value={String(dropdownProps.value ?? '')}
                                        onChange={(_e, item) => {
                                            setDisplayedMonth(new Date(displayedMonth.getFullYear(), Number(item.value), 1));
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
                                            setDisplayedMonth(new Date(Number(item.value), displayedMonth.getMonth(), 1));
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
