import React from 'react';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {useControllableState} from '~/hooks';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from '../Input/shared';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
    value,
    defaultValue = null,
    referenceDate,
    placeholder,
    size,
    variant = 'outlined',
    className,
    isDisabled,
    onChange,
    ...props
}) => {
    const [selectedTimezone, setTimezone] = useControllableState(value, defaultValue);

    return (
        <Dropdown
            {...props}
            className={className}
            data={getTimezoneDropdownData(selectedTimezone, referenceDate)}
            value={selectedTimezone}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            placeholder={placeholder}
            icon={<Language aria-hidden/>}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                setTimezone(item.value ?? null);
                onChange?.(event, item.value ?? null);
            }}
        />
    );
};

TimezoneSelector.displayName = 'TimezoneSelector';
