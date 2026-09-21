import { dateMatchModifiers, DayPicker, useDayPicker } from '@daypicker/react';
import { autoUpdate, flip, FloatingPortal, offset, shift, useDismiss, useFloating, useInteractions, useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

import { TimezoneSelector } from '../../TimezoneSelector/TimezoneSelector';
import { BaseInput } from '../BaseInput';
import { TimeInput } from '../TimeInput';
import {
    dateToPlainDate,
    getSystemTimeZone,
    getTodayPlainDate,
    isValidTimeZone,
    plainDateToDate,
    toPlainDate,
} from '../utils/temporal';
import {
    formatPlainDate,
    getCalendarDisabledMatchers,
    getDisplayMonth,
    getMonthStart,
    getWeekStartsOn,
    parseDateInput,
} from './calendarHelpers';
import {
    assembleValue,
    getPlainDate,
    getPlainTime,
    parseValue,
} from './dateTimeValue';
import { Button, Dropdown, Typography } from '~/components';
import { layout } from '~/globals/css-utils';
import { Calendar } from '~/icons';

import type { ControlledDateTimeInputProps } from './DateTimeInput.types';
import type { DropdownProps } from '@daypicker/react';
import type { Temporal } from 'temporal-polyfill';

import baseInputStyles from '../BaseInput/BaseInput.module.scss';
import styles from './DateTimeInput.module.scss';
import dayPickerClassNames from '@daypicker/react/style.module.css';

// Options outside `startMonth`/`endMonth` arrive already flagged as disabled.
const toDropdownData = (options: DropdownProps['options']) => (options ?? []).map(option => ({
    label: option.label,
    value: String(option.value),
    isDisabled: option.disabled,
}));

const getCaptionLayout = (hasMultipleMonths: boolean, hasMultipleYears: boolean) => {
    if (hasMultipleMonths) {
        return hasMultipleYears ? 'dropdown' : 'dropdown-months';
    }

    return hasMultipleYears ? 'dropdown-years' : 'label';
};

// DayPicker renders these itself, so they must be stable module-level components;
// `useDayPicker` gives them the displayed month and a `goToMonth` already clamped
// to `startMonth`/`endMonth`, which notifies us through `onMonthChange`.
const MonthsDropdown = ({ options, value }: DropdownProps) => {
    const { months, goToMonth } = useDayPicker();

    return (
        <Dropdown
            hasSearch={false}
            data={toDropdownData(options)}
            size="medium"
            value={String(value ?? '')}
            variant="ghost"
            onChange={(_e, item) => {
                goToMonth(new Date(months[0].date.getFullYear(), Number(item.value), 1));
            }}
        />
    );
};

const YearsDropdown = ({ options, value }: DropdownProps) => {
    const { months, goToMonth } = useDayPicker();

    return (
        <Dropdown
            data={toDropdownData(options)}
            size="medium"
            value={String(value ?? '')}
            variant="ghost"
            onChange={(_e, item) => {
                goToMonth(new Date(Number(item.value), months[0].date.getMonth(), 1));
            }}
        />
    );
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
    defaultTimezone,
    onBlur,
    autoComplete = 'off',
    ...props
}, ref) => {
    const currentValue = parseValue(value, type);
    // Display-only: the zone an instant is shown in. It never reaches the value.
    const [displayedZone, setDisplayedZone] = useState(() => (isValidTimeZone(defaultTimezone) ? defaultTimezone : getSystemTimeZone()));
    const selectedDate = getPlainDate(currentValue, displayedZone);
    const selectedTime = getPlainTime(currentValue, displayedZone);

    // Resolve to a single locale: passing `undefined` through would disable the calendar
    // formatters and force getWeekStartsOn's Monday fallback, so only the text field would localize.
    const resolvedLocale = locale ?? new Intl.DateTimeFormat().resolvedOptions().locale;

    const i18nLabels = {
        todayButton: 'Today',
        nextMonth: 'Go to the next month',
        previousMonth: 'Go to the previous month',
        timezone: 'Timezone',
        ...i18n,
    };

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [draft, setDraft] = useState<string | null>(null);
    const [displayedMonth, setDisplayedMonth] = useState(() => getDisplayMonth(selectedDate));

    const { refs, floatingStyles, context } = useFloating({
        open: isCalendarOpen,
        onOpenChange: setIsCalendarOpen,
        placement: 'bottom-start',
        transform: false,
        middleware: [offset(4), flip({ padding: 8 }), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });
    // Escape is handled on `fieldsRow` below, not by floating-ui's `document` listener, which the
    // consumer's Modal also uses. `FloatingTree` would scope it, but Modal doesn't render one.
    const { getFloatingProps } = useInteractions([useDismiss(context, { escapeKey: false })]);
    const fieldRef = useMergeRefs([refs.setReference, ref]);

    const minPlainDate = toPlainDate(minDate);
    const maxPlainDate = toPlainDate(maxDate);
    const calendarDisabledMatchers = getCalendarDisabledMatchers({
        minDate,
        maxDate,
        disabledDates,
        disabledDateRanges,
        disabledDaysOfWeek,
    });
    const todayDate = plainDateToDate(getTodayPlainDate());
    const isTodayUnavailable = dateMatchModifiers(todayDate, calendarDisabledMatchers);
    const isTodayDisabled = isDisabled || isReadOnly || isTodayUnavailable;
    // Anchored on the selection, not the displayed month, so the range doesn't slide while navigating.
    const referenceYear = (selectedDate ?? getTodayPlainDate()).year;
    const startMonth = getMonthStart(minPlainDate, referenceYear - 50, 0);
    const endMonth = getMonthStart(maxPlainDate, referenceYear + 50, 11);
    const hasMultipleYears = startMonth.getFullYear() !== endMonth.getFullYear();
    const hasMultipleMonths = startMonth.getTime() !== endMonth.getTime();

    const captionLayout = getCaptionLayout(hasMultipleMonths, hasMultipleYears);

    // This component holds no value state: it derives display from `value` and reports the next
    // value via `onChange`. onChange drives the value — never the reverse. (Uncontrolled: the
    // wrapper does setValue + the consumer's onChange. Controlled: the consumer updates `value`.)
    // Each handler passes only the dimension it changed; the rest fall back to the current
    // value's parts, so emitChange always reports one complete, canonical value.
    const emitChange = (
        event: React.SyntheticEvent,
        change: { plainDate?: Temporal.PlainDate | null;
            plainTime?: Temporal.PlainTime | null; } = {},
    ) => {
        setDraft(null);
        const { plainDate = selectedDate, plainTime = selectedTime } = change;
        onChange?.(event, assembleValue(plainDate, plainTime, displayedZone, type));
    };

    const clearValue = (event: React.SyntheticEvent) => emitChange(event, { plainDate: null });

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
            emitChange(event, { plainDate: typedDate });
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
            month.getFullYear() !== displayedMonth.getFullYear()
            || month.getMonth() !== displayedMonth.getMonth()
        ) {
            setDisplayedMonth(month);
        }
    };

    return (
        <div className={clsx(styles.dateTimeInput, className)}>
            <div
                className={styles.fieldsRow}
                onKeyDown={(event) => {
                    if (event.key === 'Escape' && isCalendarOpen) {
                        event.stopPropagation();
                        setIsCalendarOpen(false);
                    }
                }}
            >
                <BaseInput
                    ref={fieldRef}
                    {...props}
                    isDisabled={isDisabled}
                    isReadOnly={isReadOnly}
                    autoComplete={autoComplete}
                    className={styles.dateField}
                    icon={<Calendar aria-hidden/>}
                    size={size}
                    value={draft ?? formatPlainDate(selectedDate, resolvedLocale, dateFormat)}
                    variant={variant}
                    onBlur={(event) => {
                        commitDraft(event);
                        onBlur?.(event);
                    }}
                    onChange={event => setDraft(event.target.value)}
                    onClear={(event) => {
                        event.stopPropagation();
                        clearValue(event);
                    }}
                    onClick={openCalendar}
                    onKeyDown={(event) => {
                        // Only on an untouched field — once a draft exists Space is a character; keydown runs before insertion.
                        if (event.key === ' ' && draft === null) {
                            event.preventDefault();
                            openCalendar();
                        }
                    }}
                    onKeyUp={(event) => {
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
                            className={styles.calendarPopover}
                            ref={refs.setFloating}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <DayPicker
                                disabled={calendarDisabledMatchers}
                                captionLayout={captionLayout}
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
                                    footer: styles.calendarFooter,
                                    /* eslint-enable camelcase */
                                }}
                                components={{
                                    MonthsDropdown,
                                    YearsDropdown,
                                }}
                                data-testid="calendar"
                                endMonth={endMonth}
                                footer={(
                                    <Button
                                        isDisabled={isTodayDisabled}
                                        label={i18nLabels.todayButton}
                                        size="default"
                                        variant="ghost"
                                        onClick={(event) => {
                                            emitChange(event, { plainDate: getTodayPlainDate() });
                                            setIsCalendarOpen(false);
                                        }}
                                    />
                                )}
                                formatters={{
                                    formatCaption: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, {
                                        month: 'long',
                                        year: 'numeric',
                                    }).format(date),
                                    formatMonthDropdown: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, { month: 'long' }).format(date),
                                    formatDay: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, { day: 'numeric' }).format(date),
                                    formatWeekdayName: (date: Date) => new Intl.DateTimeFormat(resolvedLocale, { weekday: 'short' }).format(date),
                                }}
                                labels={{
                                    labelNext: () => i18nLabels.nextMonth,
                                    labelPrevious: () => i18nLabels.previousMonth,
                                }}
                                mode="single"
                                month={displayedMonth}
                                navLayout="around"
                                selected={selectedDate ? plainDateToDate(selectedDate) : undefined}
                                startMonth={startMonth}
                                weekStartsOn={weekStartsOn ?? getWeekStartsOn(resolvedLocale)}
                                onMonthChange={handleMonthChange}
                                onSelect={(date, _selectedDay, modifiers, event) => {
                                    if (modifiers.disabled) {
                                        return;
                                    }

                                    // Re-clicking the selected day is DayPicker's deselect; keep the value.
                                    if (date) {
                                        emitChange(event, { plainDate: dateToPlainDate(date) });
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
                        isDisabled={isDisabled}
                        isReadOnly={isReadOnly}
                        focusOnField={false}
                        size={size}
                        timeFormat={timeFormat}
                        value={selectedTime}
                        variant={variant}
                        onChange={(event, time) => {
                            // With no date, a cleared time or an unavailable today has nothing to emit.
                            if (selectedDate === null && (time === null || isTodayUnavailable)) {
                                return;
                            }

                            emitChange(event, {
                                plainDate: selectedDate ?? getTodayPlainDate(),
                                plainTime: time,
                            });
                        }}
                    />
                )}
            </div>
            {type === 'zonedDateTime' && currentValue !== null && (
                <div className={clsx(layout.flexRow_nowrap, layout.alignCenter)}>
                    <Typography className={styles.timezoneLabel} component="span" variant="caption">
                        {i18nLabels.timezone}:
                    </Typography>
                    <TimezoneSelector
                        {...timezoneSelectorProps}
                        referenceDate={selectedDate}
                        size="small"
                        value={displayedZone}
                        variant="ghost"
                        // Display only: the instant doesn't move, so nothing is emitted.
                        onChange={(_event, nextZone) => setDisplayedZone(nextZone ?? displayedZone)}
                    />
                </div>
            )}
        </div>
    );
});

ControlledDateTimeInput.displayName = 'ControlledDateTimeInput';
