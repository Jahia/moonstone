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

/** Props common to both modes. */
type TimeInputSharedProps = Omit<BaseInputProps,
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
    variant?: DropdownProps['variant'];

    /**
     * Display format for the time input.
     * When `'12h'`, an AM/PM dropdown is shown to the right of the field.
     * `timeFormat` only affects display; the emitted `Temporal.PlainTime` is unaffected.
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** Additional props forwarded to the internal AM/PM dropdown in 12h mode. */
    meridiemDropdownProps?: TimeInputMeridiemDropdownProps;
};

/**
 * Fired when the entry is committed (on blur, completed to a valid time; or via the AM/PM
 * dropdown). A partial entry is never emitted; an emptied field emits `null`.
 */
type TimeInputOnChange = (event: React.SyntheticEvent, value: Temporal.PlainTime | null) => void;

/** A time value the component accepts: a `Temporal.PlainTime`, an ISO string, or `null`. */
type TimeValue = Temporal.PlainTime | string | null;

/** Controlled: `value` + `onChange` required; the field always displays `value`. */
export type ControlledTimeInputProps = TimeInputSharedProps & {
    value: TimeValue;
    onChange: TimeInputOnChange;
    defaultValue?: never;
};

/** Uncontrolled: `defaultValue` seeds the field; the component owns its state afterwards. */
export type UncontrolledTimeInputProps = TimeInputSharedProps & {
    value?: never;
    defaultValue?: TimeValue;
    onChange?: TimeInputOnChange;
};

export type TimeInputProps = ControlledTimeInputProps | UncontrolledTimeInputProps;
