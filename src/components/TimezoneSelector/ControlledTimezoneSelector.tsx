import clsx from 'clsx';
import React, { useMemo } from 'react';

import { toPlainDate } from '../Input/utils/temporal';
import { getTimezoneDropdownData } from './timezoneHelpers';
import { Dropdown } from '~/components';
import { Language } from '~/icons';

import type { ControlledTimezoneSelectorProps } from './TimezoneSelector.types';
import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

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
    // Keyed on the ISO string: the parent may recreate an equal `referenceDate` every render.
    const referenceDateKey = toPlainDate(referenceDate)?.toString() ?? null;
    const data = useMemo(() => getTimezoneDropdownData(value, toPlainDate(referenceDateKey)), [value, referenceDateKey]);

    return (
        <Dropdown
            {...props}
            isDisabled={isDisabled || isReadOnly}
            className={clsx(styles.timezoneSelector, className)}
            data={data}
            icon={<Language aria-hidden/>}
            placeholder={placeholder}
            size={size}
            value={value}
            variant={variant}
            onChange={(event: React.MouseEvent, item: DropdownDataOption) => {
                onChange(event, item.value ?? null);
            }}
        />
    );
};

ControlledTimezoneSelector.displayName = 'ControlledTimezoneSelector';
