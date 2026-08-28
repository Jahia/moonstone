import React, {useMemo} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Language} from '~/icons';
import {getTimezoneDropdownData} from './timezoneHelpers';
import {toPlainDate} from '../Input/utils/temporal';
import type {ControlledTimezoneSelectorProps} from './TimezoneSelector.types';
import styles from './TimezoneSelector.module.scss';

export const ControlledTimezoneSelector: React.FC<ControlledTimezoneSelectorProps> = ({
    value,
    referenceDate,
    placeholder,
    size,
    variant = 'outlined',
    className,
    isDisabled,
    isReadOnly,
    onChange,
    ...props
}) => {
    // Keyed on the ISO string: the parent may recreate an equal `referenceDate` on every render,
    // and rebuilding the full catalog (~400 zones) per render is measurable.
    const referenceDateKey = toPlainDate(referenceDate)?.toString() ?? null;
    const data = useMemo(() => getTimezoneDropdownData(value, toPlainDate(referenceDateKey)), [value, referenceDateKey]);

    return (
        <Dropdown
            {...props}
            className={clsx(styles.timezoneSelector, className)}
            data={data}
            value={value}
            size={size}
            variant={variant}
            isDisabled={isDisabled || isReadOnly}
            placeholder={placeholder}
            icon={<Language aria-hidden/>}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                onChange(event, item.value ?? null);
            }}
        />
    );
};

ControlledTimezoneSelector.displayName = 'ControlledTimezoneSelector';
