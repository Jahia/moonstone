import React from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from './timezoneHelpers';
import {toPlainDate} from '../Input/utils/temporal';
import type {ControlledTimezoneSelectorProps} from './TimezoneSelector.types';
import styles from "./TimezoneSelector.module.scss";

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
            className={clsx(styles.timezoneSelector, className)}
            data={getTimezoneDropdownData(value, toPlainDate(referenceDate))}
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
