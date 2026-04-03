import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {BaseInput} from '../BaseInput';
import {
    formatTimeInputValue,
    getCurrentTimeString,
    isValidPartialTimeInputValue,
    type Meridiem,
    parseCanonicalTime,
    parseTimeInputValue
} from '../shared';
import type {TimeInputProps} from './TimeInput.types';
import './TimeInput.scss';

const meridiemOptions: DropdownDataOption[] = [
    {label: 'AM', value: 'AM'},
    {label: 'PM', value: 'PM'}
];

const getDropdownSize = (size: TimeInputProps['size']) => size === 'big' ? 'medium' : 'small';

const getInputAriaLabel = (labels: TimeInputProps['labels']) => {
    const ariaLabel = [labels?.hours, labels?.minutes].filter(Boolean).join(' ');
    return ariaLabel || undefined;
};

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(({
    value,
    defaultValue,
    timeFormat = '24h',
    size = 'default',
    variant = 'outlined',
    placeholder = 'HH:MM',
    className,
    labels,
    isDisabled = false,
    isReadOnly = false,
    focusOnField = false,
    onBlur,
    onFocus,
    onChange,
    ...props
}, ref) => {
    const isControlled = typeof value !== 'undefined';
    const [timeValue, setTimeValue] = useState(typeof defaultValue === 'undefined' ? getCurrentTimeString() : defaultValue);
    const [inputValue, setInputValue] = useState('');
    const [meridiem, setMeridiem] = useState<Meridiem>('AM');
    const canonicalTimeValue = isControlled ? value : timeValue;

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

        if (!isControlled) {
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
        <div
            className={clsx('moonstone-timeInput', className, {
                'moonstone-timeInput_12h': timeFormat === '12h'
            })}
        >
            <BaseInput
                ref={ref}
                {...props}
                className="moonstone-timeInput_field"
                inputClassName="moonstone-timeInput_input"
                iconClassName="moonstone-timeInput_icon"
                value={inputValue}
                size={size}
                variant={variant}
                focusOnField={focusOnField}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                placeholder={placeholder}
                aria-label={getInputAriaLabel(labels)}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={handleInputChange}
            />
            {timeFormat === '12h' && (
                <Dropdown
                    className="moonstone-timeInput_meridiem"
                    data={meridiemOptions}
                    value={meridiem}
                    size={getDropdownSize(size)}
                    variant={variant}
                    isDisabled={isDisabled || isReadOnly}
                    onChange={handleMeridiemChange}
                />
            )}
        </div>
    );
});

TimeInput.displayName = 'TimeInput';
