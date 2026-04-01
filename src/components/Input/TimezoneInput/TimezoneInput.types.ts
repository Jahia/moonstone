import React from 'react';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {DateTimeInputLabels} from '../shared/dateTime.types';

type BaseTimezoneInputProps = Omit<BaseInputProps,
    'isShowClearButton' |
    'value' |
    'defaultValue' |
    'onChange' |
    'onClear' |
    'size' |
    'icon' |
    'role' |
    'focusOnField' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
> & {
    variant?: 'ghost' | 'outlined';
    size?: 'small' | 'medium';
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;

    /**
     * Reference date used to compute UTC offset labels (e.g. `'UTC +02:00'`).
     * Defaults to today when omitted.
     * Pass a specific date when the timezone selector is used in a future/past context
     * to ensure DST offsets are displayed correctly.
     */
    referenceDate?: Date | null;

    /** I18n label for the selector placeholder */
    labels?: Pick<DateTimeInputLabels, 'timezone'>;

    /**
     * Fired on every selection change.
     *
     * @param event - Originating React event
     * @param value - Selected IANA timezone identifier (e.g. `'Europe/Paris'`)
     */
    onChange?: (event: React.SyntheticEvent, value: string | null) => void;
}

type ControlledProps = {
    /** Controlled value: IANA timezone identifier (e.g. `'Europe/Paris'`), or `null`. */
    value: string | null;
    defaultValue?: never;
}

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode: IANA timezone identifier, or `null`. */
    defaultValue?: string | null;
}

export type TimezoneInputProps = BaseTimezoneInputProps & (ControlledProps | UncontrolledProps);
export type ControlledTimezoneInputProps = BaseTimezoneInputProps & ControlledProps;
export type UncontrolledTimezoneInputProps = BaseTimezoneInputProps & UncontrolledProps;
export type {DateTimeInputLabels} from '../shared/dateTime.types';
