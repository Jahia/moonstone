import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {toPlainTime} from '../utils/temporal';
import {completeTimeInput, filterTimeInputValue, splitTime} from './timeHelpers';
import type {ControlledTimeInputProps, Meridiem} from './TimeInput.types';
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
    const {hours, minutes, meridiem} = splitTime(toPlainTime(value), timeFormat);

    // `draft` holds the raw text while editing (a partial entry like "14:3" isn't a valid time
    // yet); `null` means "show the stored value". Committing on blur completes the draft, so a
    // partial entry never emits and the field otherwise mirrors the stored value.
    const [draft, setDraft] = useState<string | null>(null);
    const displayValue = draft ?? (hours && minutes ? `${hours}:${minutes}` : '');

    const emitChange = (event: React.SyntheticEvent, text: string, selectedMeridiem: Meridiem) => {
        setDraft(null);
        onChange(event, completeTimeInput(text, timeFormat, selectedMeridiem));
    };

    return (
        <div className={clsx(styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
            <BaseInput
                ref={ref}
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
                onChange={event => setDraft(filterTimeInputValue(event.target.value, timeFormat))}
                onBlur={event => {
                    if (draft !== null) {
                        emitChange(event, draft, meridiem);
                    }
                }}
            />
            {timeFormat === '12h' && (
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
                            emitChange(event, displayValue, item.value);
                        }
                    }}
                />
            )}
        </div>
    );
});

ControlledTimeInput.displayName = 'ControlledTimeInput';
