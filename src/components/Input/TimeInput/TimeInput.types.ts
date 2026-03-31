import React from 'react';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {DateTimeInputLabels, TimeFormat} from '../shared/dateTime.types';

type BasicTimeInputProps = Omit<BaseInputProps,
    'value' |
    'defaultValue' |
    'onChange' |
    'onBlur' |
    'onFocus' |
    'onClear' |
    'placeholder' |
    'prefixComponents' |
    'postfixComponents' |
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
    variant?: 'ghost' | 'outlined';

    /**
     * Display format for the time input.
     * When `'12h'`, an AM/PM dropdown is shown to the right of the field.
     * The value emitted by `onChange` is always in 24h format `HH:mm`.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** I18n labels for the hours, minutes and meridiem fields */
    labels?: Pick<DateTimeInputLabels, 'hours' | 'minutes' | 'meridiem'>;

    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;

    /**
     * Fired when a complete time value is entered (all 4 digits filled).
     * The value is always in 24h format `HH:mm`, or `null` if incomplete.
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
}

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode, in 24h format `HH:mm`, or `null`. */
    defaultValue?: string | null;
}

export type TimeInputProps = BasicTimeInputProps & (ControlledProps | UncontrolledProps);
export type ControlledTimeInputProps = BasicTimeInputProps & ControlledProps;
export type UncontrolledTimeInputProps = BasicTimeInputProps & UncontrolledProps;
export type {DateTimeInputLabels, TimeFormat} from '../shared/dateTime.types';
