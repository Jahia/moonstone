import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout, reset} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {
    formatTimeInputValue,
    getCurrentTimeString,
    isValidPartialTimeInputValue,
    parseCanonicalTime,
    parseTimeInputValue
} from '../shared';
import type {Meridiem, TimeInputProps} from './TimeInput.types';
import styles from './TimeInput.module.scss';

const meridiemOptions: DropdownDataOption[] = [
    {label: 'AM', value: 'AM'},
    {label: 'PM', value: 'PM'}
];

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(({
    value,
    defaultValue,
    timeFormat = '24h',
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    onChange,
    ...props
}, ref) => {
    const [timeValue, setTimeValue] = useState<string | null>(() => typeof defaultValue === 'undefined' ? getCurrentTimeString() : defaultValue);
    const [inputValue, setInputValue] = useState('');
    const [meridiem, setMeridiem] = useState<Meridiem>(() => parseCanonicalTime(
        typeof value === 'undefined' ?
            (typeof defaultValue === 'undefined' ? getCurrentTimeString() : defaultValue) :
            value,
        '12h'
    ).meridiem);
    const canonicalTimeValue = typeof value === 'undefined' ? timeValue : value;

    useEffect(() => {
        const parsedTime = parseCanonicalTime(canonicalTimeValue, timeFormat);
        setInputValue(
            parsedTime.hours && parsedTime.minutes ?
                `${parsedTime.hours}:${parsedTime.minutes}` :
                ''
        );
        setMeridiem(parsedTime.meridiem);
    }, [canonicalTimeValue, timeFormat]);

    const emitChange = (event: React.SyntheticEvent, formattedInputValue: string, selectedMeridiem: Meridiem) => {
        const parsedTimeValue = parseTimeInputValue(formattedInputValue, timeFormat, selectedMeridiem);

        if (formattedInputValue !== '' && parsedTimeValue === null) {
            return;
        }

        if (typeof value === 'undefined') {
            setTimeValue(parsedTimeValue);
        }

        onChange?.(event, parsedTimeValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedInputValue = formatTimeInputValue(event.target.value);

        if (!isValidPartialTimeInputValue(formattedInputValue, timeFormat)) {
            return;
        }

        setInputValue(formattedInputValue);
        emitChange(event, formattedInputValue, meridiem);
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
                className={timeFormat === '12h' ? styles.field_12h : undefined}
                value={inputValue}
                size={size}
                variant={variant}
                placeholder={props.placeholder ?? 'HH:MM'}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
                onChange={handleInputChange}
            />
            {timeFormat === '12h' && (
                <Dropdown
                    data={meridiemOptions}
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
