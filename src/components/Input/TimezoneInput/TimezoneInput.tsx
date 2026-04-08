import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from '../shared';
import type {TimezoneInputProps} from './TimezoneInput.types';
import './TimezoneInput.scss';

export const TimezoneInput: React.FC<TimezoneInputProps> = ({
    value,
    defaultValue,
    referenceDate,
    placeholder,
    size,
    variant,
    className,
    isDisabled,
    onChange,
    ...props
}) => {
    const [timezone, setTimezone] = useState(defaultValue ?? null);
    const ValueTimezone = typeof value === 'undefined' ? timezone : value;

    return (
        <Dropdown
            {...props}
            className={clsx('moonstone-timezoneInput', className)}
            data={getTimezoneDropdownData(ValueTimezone, referenceDate)}
            value={ValueTimezone ?? ''}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            placeholder={placeholder}
            icon={<Language aria-hidden/>}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                if (typeof value === 'undefined') {
                    setTimezone(item.value ?? null);
                }

                onChange?.(event, item.value ?? null);
            }}
        />
    );
};

TimezoneInput.displayName = 'TimezoneInput';
