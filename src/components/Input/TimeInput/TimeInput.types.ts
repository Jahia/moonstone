import React from 'react';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';

/** Time display format */
export type TimeFormat = '24h' | '12h';

/** AM/PM indicator used in 12-hour time format */
export type Meridiem = 'AM' | 'PM';

export type TimeInputI18n = {
    /** Hours label */
    hours?: string;

    /** Minutes label */
    minutes?: string;
};

type BasicTimeInputProps = Omit<BaseInputProps,
    'isShowClearButton' |
    'value' |
    'defaultValue' |
    'onChange' |
    'onClear' |
    'icon' |
    'role' |
    'min' |
    'max' |
    'step' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
> & {
    /**
     * Display format for the time input.
     * When `'12h'`, an AM/PM dropdown is shown to the right of the field.
     * The value emitted by `onChange` is always in 24h format `HH:mm`.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** Time input labels */
    i18n?: TimeInputI18n;

    /** Controlled value in 24h format `HH:mm` (e.g. `'14:30'`), or `null`. */
    value?: string | null;

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
}

export type TimeInputProps = BasicTimeInputProps;
