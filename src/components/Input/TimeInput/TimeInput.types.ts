import React from 'react';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';

/** Time display format */
export type TimeFormat = '24h' | '12h';

/** AM/PM indicator used in 12-hour time format */
export type Meridiem = 'AM' | 'PM';

export type TimeInputMeridiemDropdownProps = Omit<DropdownProps,
    'data' |
    'treeData' |
    'value' |
    'values' |
    'onChange' |
    'size' |
    'variant' |
    'isDisabled'
> & Omit<React.ComponentPropsWithoutRef<'div'>, keyof DropdownProps>;

type BasicTimeInputProps = Omit<BaseInputProps,
    'isShowClearButton' |
    'defaultValue' |
    'onChange' |
    'onClear' |
    'icon' |
    'role' |
    'min' |
    'max' |
    'step' |
    'variant' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
> & {
    variant?: DropdownProps['variant'];

    /**
     * Display format for the time input.
     * When `'12h'`, an AM/PM dropdown is shown to the right of the field.
     * The value emitted by `onChange` is always in 24h format `HH:mm`.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** Initial value in uncontrolled mode, in 24h format `HH:mm`, or `null`. */
    defaultValue?: string | null;

    /**
     * Fired when a complete time value is entered (all 4 digits filled),
     * or when the field is emptied.
     * The value is always in 24h format `HH:mm`, or `null` when empty.
     *
     * @param event - Originating React event
     * @param value - Time string in `HH:mm` format (e.g. `'14:30'`), or `null`
     */
    onChange?: (event: React.SyntheticEvent, value: string | null) => void;

    /** Additional props forwarded to the internal AM/PM dropdown in 12h mode. */
    meridiemDropdownProps?: TimeInputMeridiemDropdownProps;
}

export type TimeInputProps = BasicTimeInputProps;
