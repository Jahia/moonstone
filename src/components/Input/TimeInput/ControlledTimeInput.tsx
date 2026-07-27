import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {Temporal} from 'temporal-polyfill';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {toPlainTime} from '../utils/temporal';
import {
    formatTimeInput,
    getMeridiem,
    getTimeSegments,
    parseTimeInput,
    splitTime,
    stepTimeSegment,
    type TimeSegment
} from './timeHelpers';
import type {ControlledTimeInputProps} from './TimeInput.types';
import styles from './TimeInput.module.scss';

export const ControlledTimeInput = React.forwardRef<HTMLInputElement, ControlledTimeInputProps>(({
    value,
    onChange,
    timeFormat = '24h',
    placeholder = 'HH:MM',
    meridiemDropdownProps,
    size,
    variant = 'outlined',
    className,
    isDisabled,
    isReadOnly,
    ...props
}, ref) => {
    const time = toPlainTime(value);
    const {hour, minute} = splitTime(time, timeFormat);
    // 12h only — its presence is the mode signal. `undefined` in 24h; an empty 12h field is AM.
    const meridiem = timeFormat === '12h' ? (time ? getMeridiem(time) : 'AM') : undefined;

    // `draft` holds the raw text while editing (a partial entry like "14:3" isn't a valid time
    // yet); `null` means "show the stored value". Committing on blur completes the draft, so a
    // partial entry never emits and the field otherwise mirrors the stored value.
    const [draft, setDraft] = useState<string | null>(null);
    const displayValue = draft ?? (hour && minute ? `${hour}:${minute}` : '');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleRef = useCallback((node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
    }, [ref]);

    // The segment to reselect after an Arrow step: the controlled re-render would otherwise drop
    // the caret to the field's end, losing the segment being stepped.
    const pendingTimeSegment = useRef<TimeSegment | null>(null);
    useLayoutEffect(() => {
        if (pendingTimeSegment.current && inputRef.current) {
            const {start, end} = getTimeSegments(inputRef.current.value)[pendingTimeSegment.current];
            inputRef.current.setSelectionRange(start, end);
            pendingTimeSegment.current = null;
        }
    });

    // A meridiem means 12h (and carries it into the parse); its absence means 24h.
    const parseTime = (text: string) =>
        meridiem ? parseTimeInput(text, '12h', meridiem) : parseTimeInput(text, '24h');

    const emitChange = (event: React.SyntheticEvent, next: Temporal.PlainTime | null) => {
        setDraft(null);
        onChange(event, next);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = inputRef.current;
        if (!input || isDisabled || isReadOnly) {
            return;
        }

        const segments = getTimeSegments(displayValue);

        // Left/Right jump between segments (no value change).
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            const {start, end} = segments[event.key === 'ArrowLeft' ? 'hour' : 'minute'];
            input.setSelectionRange(start, end);
            return;
        }

        // Up/Down step the caret's segment immediately; an empty field seeds midnight.
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const caretIndex = input.selectionStart ?? displayValue.length;
            const segment: TimeSegment = caretIndex > segments.hour.end ? 'minute' : 'hour';
            const base = parseTime(displayValue) ?? time;
            const next = base ?
                stepTimeSegment(base, segment, event.key === 'ArrowUp' ? 1 : -1, timeFormat) :
                Temporal.PlainTime.from('00:00');

            pendingTimeSegment.current = segment;
            emitChange(event, next);
        }
    };

    return (
        <div className={clsx(styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
            <BaseInput
                ref={handleRef}
                {...props}
                value={displayValue}
                className={timeFormat === '12h' ? styles.field_12h : undefined}
                size={size}
                variant={variant}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
                onChange={event => setDraft(formatTimeInput(event.target.value, timeFormat))}
                onKeyDown={handleKeyDown}
                onBlur={event => {
                    if (draft !== null) {
                        emitChange(event, parseTime(draft));
                    }
                }}
            />
            {meridiem && (
                <Dropdown
                    {...meridiemDropdownProps}
                    className={clsx(styles.meridiemDropdown, meridiemDropdownProps?.className)}
                    data={[{label: 'AM', value: 'AM'}, {label: 'PM', value: 'PM'}]}
                    value={meridiem}
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant}
                    isDisabled={isDisabled || isReadOnly}
                    onChange={(event: React.SyntheticEvent, item?: DropdownDataOption) => {
                        if (item?.value === 'AM' || item?.value === 'PM') {
                            emitChange(event, parseTimeInput(displayValue, '12h', item.value));
                        }
                    }}
                />
            )}
        </div>
    );
});

ControlledTimeInput.displayName = 'ControlledTimeInput';
