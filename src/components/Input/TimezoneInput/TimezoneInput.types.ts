import React from 'react';
import type {DateTimeInputLabels} from '../shared/dateTime.types';

type BaseTimezoneInputProps = {
    className?: string;

    /** Text displayed when no timezone is selected */
    placeholder?: string;

    variant?: 'ghost' | 'outlined';
    size?: 'small' | 'medium';
    isDisabled?: boolean;

    /**
     * When `true`, shows a clear button that calls `onChange` with `null`.
     */
    isClearable?: boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;

    /**
     * Restricts the timezones available in the selector.
     * When omitted, all IANA timezones supported by the browser are available.
     * Example: `['UTC', 'Europe/Paris', 'America/Toronto']`
     */
    allowedTimezones?: string[];

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
     * Fired on every selection change, including when the value is cleared.
     *
     * @param event - Originating React event
     * @param value - Selected IANA timezone identifier (e.g. `'Europe/Paris'`), or `null` when cleared
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
