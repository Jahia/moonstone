import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout, reset} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {filterTimeInputValue, parseCanonicalTime, parseTimeInputValue} from '../shared';
import type {Meridiem, TimeFormat, TimeInputProps} from './TimeInput.types';
import styles from './TimeInput.module.scss';

/** Converts a canonical 24h `HH:mm` value into the `HH:MM` string shown in the field. */
const toDisplayValue = (canonicalValue: string | null | undefined, timeFormat: TimeFormat) => {
    const {hours, minutes} = parseCanonicalTime(canonicalValue, timeFormat);
    return hours && minutes ? `${hours}:${minutes}` : '';
};

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(({
    defaultValue,
    timeFormat = '24h',
    placeholder = 'HH:MM',
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    onChange,
    ...props
}, ref) => {
    // Display is owned here, not delegated to BaseInput: incomplete entries must stay editable
    // without emitting, and a controlled BaseInput would freeze on a value that never updates.
    const [inputValue, setInputValue] = useState(() => toDisplayValue(defaultValue, timeFormat));
    const [meridiem, setMeridiem] = useState<Meridiem>(() => parseCanonicalTime(defaultValue, '12h').meridiem);

    // Emits only a complete, valid time; a partial or rejected entry never fires onChange.
    const emitChange = (event: React.SyntheticEvent, displayValue: string, selectedMeridiem: Meridiem) => {
        const canonicalValue = parseTimeInputValue(displayValue, timeFormat, selectedMeridiem);

        if (canonicalValue !== null) {
            onChange?.(event, canonicalValue);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterTimeInputValue(event.target.value, timeFormat);

        setInputValue(filteredValue);

        // Clearing the field emits null; an incomplete or invalid entry emits nothing.
        if (event.target.value === '') {
            onChange?.(event, null);
            return;
        }

        emitChange(event, filteredValue, meridiem);
    };

    const handleMeridiemChange = (event: React.SyntheticEvent, item?: DropdownDataOption) => {
        if (item?.value !== 'AM' && item?.value !== 'PM') {
            return;
        }

        setMeridiem(item.value);
        emitChange(event, inputValue, item.value);
    };

    return (
        <div className={clsx(reset, styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
            <BaseInput
                ref={ref}
                {...props}
                value={inputValue}
                className={timeFormat === '12h' ? styles.field_12h : undefined}
                size={size}
                variant={variant}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
                onChange={handleInputChange}
            />
            {timeFormat === '12h' && (
                <Dropdown
                    data={[{label: 'AM', value: 'AM'}, {label: 'PM', value: 'PM'}]}
                    value={meridiem}
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant}
                    isDisabled={isDisabled || isReadOnly}
                    onChange={handleMeridiemChange}
                />
            )}
        </div>
    );
});

TimeInput.displayName = 'TimeInput';
