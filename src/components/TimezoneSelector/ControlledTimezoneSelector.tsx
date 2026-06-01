import React from 'react';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from '../Input/shared';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';

type ControlledTimezoneSelectorProps = Extract<TimezoneSelectorProps, {value: string | null}>;

export const ControlledTimezoneSelector: React.FC<ControlledTimezoneSelectorProps> = ({
    value,
    referenceDate,
    placeholder,
    size,
    variant = 'outlined',
    className,
    isDisabled,
    onChange,
    ...props
}) => {
    return (
        <Dropdown
            {...props}
            className={className}
            data={getTimezoneDropdownData(value, referenceDate)}
            value={value}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            placeholder={placeholder}
            icon={<Language aria-hidden/>}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                onChange(event, item.value ?? null);
            }}
        />
    );
};

ControlledTimezoneSelector.displayName = 'ControlledTimezoneSelector';