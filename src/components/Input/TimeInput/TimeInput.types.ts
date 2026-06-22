import React from 'react';
import type {Temporal} from 'temporal-polyfill';
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
> & Omit<React.ComponentPropsWithoutRef<'div'>, keyof DropdownProps> & Record<string, unknown>;

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
     * `timeFormat` only affects display; the emitted `Temporal.PlainTime` is unaffected.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /**
     * Initial value in uncontrolled mode. Accepts a `Temporal.PlainTime`, an ISO time
     * string (e.g. `'14:30'`), or `null`.
     */
    defaultValue?: Temporal.PlainTime | string | null;

    /**
     * Fired when a complete time value is entered (all 4 digits filled),
     * or when the field is emptied.
     *
     * @param event - Originating React event
     * @param value - The entered time as a `Temporal.PlainTime`, or `null` when empty
     */
    onChange?: (event: React.SyntheticEvent, value: Temporal.PlainTime | null) => void;

    /** Additional props forwarded to the internal AM/PM dropdown in 12h mode. */
    meridiemDropdownProps?: TimeInputMeridiemDropdownProps;
}

export type TimeInputProps = BasicTimeInputProps;
