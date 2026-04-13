import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from '../Input/shared';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';
import './TimezoneSelector.scss';

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
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
    const selectedTimezone = typeof value === 'undefined' ? timezone : value;

    return (
        <Dropdown
            {...props}
            className={clsx('moonstone-timezoneSelector', className)}
            data={getTimezoneDropdownData(selectedTimezone, referenceDate)}
            value={selectedTimezone ?? ''}
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

TimezoneSelector.displayName = 'TimezoneSelector';
