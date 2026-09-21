import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Temporal } from 'temporal-polyfill';

import { BaseInput } from '../BaseInput';
import { toPlainTime } from '../utils/temporal';
import {
    formatTimeInput,
    getMeridiem,
    getTimeSegments,
    parseTimeInput,
    splitTime,
    stepTimeSegment,
    type TimeSegment,
} from './timeHelpers';
import { Dropdown } from '~/components';
import { layout } from '~/globals/css-utils';
import { Clock } from '~/icons';

import type { ControlledTimeInputProps } from './TimeInput.types';
import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

import styles from './TimeInput.module.scss';

export const ControlledTimeInput = React.forwardRef<HTMLInputElement, ControlledTimeInputProps>(({
    value,
    onChange,
    timeFormat = '24h',
    placeholder = 'hh:mm',
    meridiemDropdownProps,
    size,
    variant = 'outlined',
    className,
    isDisabled,
    isReadOnly,
    ...props
}, ref) => {
    const time = toPlainTime(value);
    const { hour, minute } = splitTime(time, timeFormat);
    // 12h only — its presence is the mode signal. `undefined` in 24h; an empty 12h field is AM.
    const meridiem = timeFormat === '12h' ? (time ? getMeridiem(time) : 'AM') : undefined;

    // `draft` holds the raw text while editing (a partial entry like "14:3" isn't a valid time
    // yet); `null` means "show the stored value". Committing on blur completes the draft, so a
    // partial entry never emits and the field otherwise mirrors the stored value.
    const [draft, setDraft] = useState<string | null>(null);
    const displayValue = draft ?? (hour && minute ? `${hour}:${minute}` : '');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleRef = useMergeRefs([inputRef, ref]);

    // The segment to reselect after an Arrow step: the controlled re-render would otherwise drop
    // the caret to the field's end, losing the segment being stepped.
    const pendingTimeSegment = useRef<TimeSegment | null>(null);
    useLayoutEffect(() => {
        if (pendingTimeSegment.current && inputRef.current) {
            const { start, end } = getTimeSegments(inputRef.current.value)[pendingTimeSegment.current];
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
            const { start, end } = segments[event.key === 'ArrowLeft' ? 'hour' : 'minute'];
            input.setSelectionRange(start, end);
            return;
        }

        // Up/Down step the caret's segment immediately; an empty field seeds midnight.
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const caretIndex = input.selectionStart ?? displayValue.length;
            const segment: TimeSegment = caretIndex > segments.hour.end ? 'minute' : 'hour';
            const base = parseTime(displayValue) ?? time;
            const next = base
                ? stepTimeSegment(base, segment, event.key === 'ArrowUp' ? 1 : -1, timeFormat)
                : Temporal.PlainTime.from('00:00');

            pendingTimeSegment.current = segment;
            emitChange(event, next);
        }
    };

    return (
        <div className={clsx(styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
            <BaseInput
                ref={handleRef}
                {...props}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
                className={timeFormat === '12h' ? styles.field_12h : undefined}
                icon={<Clock aria-hidden/>}
                inputMode="numeric"
                placeholder={placeholder}
                size={size}
                value={displayValue}
                variant={variant}
                onBlur={(event) => {
                    if (draft !== null) {
                        emitChange(event, parseTime(draft));
                    }
                }}
                onChange={event => setDraft(formatTimeInput(event.target.value, timeFormat))}
                onKeyDown={handleKeyDown}
            />
            {meridiem && (
                <Dropdown
                    {...meridiemDropdownProps}
                    isDisabled={isDisabled || isReadOnly}
                    className={clsx(styles.meridiemDropdown, meridiemDropdownProps?.className)}
                    data={[{
                        label: 'AM',
                        value: 'AM',
                    }, {
                        label: 'PM',
                        value: 'PM',
                    }]}
                    size={size === 'big' ? 'medium' : 'small'}
                    value={meridiem}
                    variant={variant}
                    onChange={(event: React.SyntheticEvent, item?: DropdownDataOption) => {
                        // An empty field has no time to re-emit.
                        if (displayValue && (item?.value === 'AM' || item?.value === 'PM')) {
                            emitChange(event, parseTimeInput(displayValue, '12h', item.value));
                        }
                    }}
                />
            )}
        </div>
    );
});

ControlledTimeInput.displayName = 'ControlledTimeInput';
