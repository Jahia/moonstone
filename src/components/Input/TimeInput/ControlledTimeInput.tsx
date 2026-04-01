import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {BaseInput} from '../BaseInput';
import {
    formatTimeInputValue,
    isValidPartialTimeInputValue,
    parseCanonicalTime,
    parseTimeInputValue
} from '../shared/dateTime.utils';
import type {Meridiem} from '../shared/dateTime.types';
import type {ControlledTimeInputProps} from './TimeInput.types';
import './TimeInput.scss';

const meridiemOptions: DropdownDataOption[] = [
    {label: 'AM', value: 'AM'},
    {label: 'PM', value: 'PM'}
];

const getDropdownSize = (size: ControlledTimeInputProps['size']) => size === 'big' ? 'medium' : 'small';

const getInputAriaLabel = (labels: ControlledTimeInputProps['labels']): string | undefined => {
    const nextLabel = [labels?.hours, labels?.minutes].filter(Boolean).join(' ');
    return nextLabel || undefined;
};

export const ControlledTimeInput = React.forwardRef<HTMLInputElement, ControlledTimeInputProps>(({
    value,
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
    const [inputValue, setInputValue] = useState('');
    const [meridiem, setMeridiem] = useState<Meridiem>('AM');
    const ariaLabel = getInputAriaLabel(labels);

    useEffect(() => {
        const nextValue = parseCanonicalTime(value, timeFormat);
        setInputValue(
            nextValue.hours && nextValue.minutes ?
                `${nextValue.hours}:${nextValue.minutes}` :
                ''
        );
        setMeridiem(nextValue.meridiem);
    }, [value, timeFormat]);

    const triggerChange = (event: React.SyntheticEvent, nextValue: string) => {
        const parsedValue = parseTimeInputValue(nextValue, timeFormat, meridiem);

        if (typeof onChange === 'function' && (nextValue === '' || parsedValue !== null)) {
            onChange(event, parsedValue);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = formatTimeInputValue(event.target.value);

        if (!isValidPartialTimeInputValue(nextValue, timeFormat)) {
            return;
        }

        setInputValue(nextValue);
        triggerChange(event, nextValue);
    };

    const handleMeridiemChange = (event: React.SyntheticEvent, item?: DropdownDataOption) => {
        const nextMeridiem = item?.value === 'PM' ? 'PM' : 'AM';
        setMeridiem(nextMeridiem);

        const parsedValue = parseTimeInputValue(inputValue, timeFormat, nextMeridiem);

        if (typeof onChange === 'function' && (inputValue === '' || parsedValue !== null)) {
            onChange(event, parsedValue);
        }
    };

    return (
        <div
            className={clsx('moonstone-timeInput', className, {
                'moonstone-timeInput_12h': timeFormat === '12h'
            })}
            onBlur={onBlur}
            onFocus={onFocus}
        >
            <BaseInput
                ref={ref}
                {...props}
                className="moonstone-timeInput_field"
                value={inputValue}
                size={size}
                variant={variant}
                focusOnField={focusOnField}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                placeholder={placeholder || 'HH:MM'}
                aria-label={ariaLabel}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
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
                    placeholder={labels?.meridiem}
                    onChange={handleMeridiemChange}
                />
            )}
        </div>
    );
});

ControlledTimeInput.displayName = 'ControlledTimeInput';
