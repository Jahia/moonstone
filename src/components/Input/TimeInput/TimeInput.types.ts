import React from 'react';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {TimeFormat} from '../shared';

export type TimeInputI18n = {
    /** Accessible label for the hours field */
    hours?: string;

    /** Accessible label for the minutes field */
    minutes?: string;
};

type TimeInputVariant = Extract<BaseInputProps['variant'], 'ghost' | 'outlined'>;

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
    'variant' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
> & {
    variant?: TimeInputVariant;

    /**
     * Display format for the time input.
     * When `'12h'`, an AM/PM dropdown is shown to the right of the field.
     * The value emitted by `onChange` is always in 24h format `HH:mm`.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** Accessible labels for the hours and minutes fields */
    i18n?: TimeInputI18n;

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

type ControlledProps = {
    /** Controlled value in 24h format `HH:mm` (e.g. `'14:30'`), or `null`. */
    value: string | null;
    defaultValue?: never;
    onChange: (event: React.SyntheticEvent, value: string | null) => void;
}

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode, in 24h format `HH:mm`, or `null`. */
    defaultValue?: string | null;
}

export type TimeInputProps = BasicTimeInputProps & (ControlledProps | UncontrolledProps);
export type {TimeFormat} from '../shared';
