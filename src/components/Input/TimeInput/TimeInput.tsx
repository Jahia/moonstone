import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {filterTimeInputValue, getTimeDisplayParts, parseTimeInputValue, toPlainTime} from '../shared';
import type {Meridiem, TimeInputProps} from './TimeInput.types';
import styles from './TimeInput.module.scss';

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(({
    defaultValue,
    timeFormat = '24h',
    placeholder = 'HH:MM',
    meridiemDropdownProps,
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    onChange,
    ...props
}, ref) => {
    // Display text is owned here, not delegated to BaseInput: an incomplete entry must
    // stay editable without emitting, which a controlled BaseInput can't express. In 12h
    // mode the meridiem belongs to the same in-progress input — it can't be derived until
    // the digits and the AM/PM choice together form a complete time.
    const [inputValue, setInputValue] = useState(() => {
        const {hours, minutes} = getTimeDisplayParts(toPlainTime(defaultValue), timeFormat);
        return hours && minutes ? `${hours}:${minutes}` : '';
    });
    const [meridiem, setMeridiem] = useState<Meridiem>(() => getTimeDisplayParts(toPlainTime(defaultValue), timeFormat).meridiem);

    // Emits only a complete, valid time; a partial or rejected entry never fires onChange.
    const emitChange = (event: React.SyntheticEvent, displayValue: string, selectedMeridiem: Meridiem) => {
        const value = parseTimeInputValue(displayValue, timeFormat, selectedMeridiem);

        if (value !== null) {
            onChange?.(event, value);
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
        <div className={clsx(styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
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
                    {...meridiemDropdownProps}
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
