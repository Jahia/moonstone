import React from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from '../shared/dateTime.utils';
import type {ControlledTimezoneInputProps} from './TimezoneInput.types';
import './TimezoneInput.scss';

export const ControlledTimezoneInput: React.FC<ControlledTimezoneInputProps> = ({
    value,
    referenceDate,
    placeholder,
    labels,
    size = 'small',
    variant = 'outlined',
    className,
    isDisabled = false,
    isReadOnly = false,
    onBlur,
    onFocus,
    onChange,
    ...props
}) => {
    return (
        <Dropdown
            {...props}
            className={clsx('moonstone-timezoneInput', className)}
            data={getTimezoneDropdownData(value, referenceDate)}
            value={value ?? ''}
            size={size}
            variant={variant}
            isDisabled={isDisabled || isReadOnly}
            placeholder={placeholder || labels?.timezone}
            icon={<Language aria-hidden/>}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                onChange?.(event, item.value ?? null);
            }}
        />
    );
};

ControlledTimezoneInput.displayName = 'ControlledTimezoneInput';
