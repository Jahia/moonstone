import React from 'react';
import type {Temporal} from 'temporal-polyfill';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';

type BaseTimezoneSelectorProps = Omit<DropdownProps,
    'data' |
    'treeData' |
    'value' |
    'values' |
    'onChange' |
    'onClear' |
    'icon'
> & {
    /**
     * Reference date used to compute the UTC offsets shown in the timezone list (offsets
     * vary with DST). Accepts a `Temporal.PlainDate` or an ISO date string. Defaults to
     * today when omitted.
     */
    referenceDate?: Temporal.PlainDate | string | null;

    /**
     * Renders the selector as read-only.
     */
    isReadOnly?: boolean;
}

export type ControlledTimezoneSelectorProps = BaseTimezoneSelectorProps & {
    /** Controlled value: IANA timezone identifier (e.g. `'Europe/Paris'`), or `null`. */
    value: string | null;
    defaultValue?: never;
    onChange: (event: React.SyntheticEvent, value: string | null) => void;
}

export type UncontrolledTimezoneSelectorProps = BaseTimezoneSelectorProps & {
    value?: never;
    /** Initial value in uncontrolled mode: IANA timezone identifier, or `null`. */
    defaultValue?: string | null;

    /**
     * Fired on every selection change.
     *
     * @param event - Originating React event
     * @param value - Selected IANA timezone identifier (e.g. `'Europe/Paris'`)
     */
    onChange?: (event: React.SyntheticEvent, value: string | null) => void;
}

export type TimezoneSelectorProps = ControlledTimezoneSelectorProps | UncontrolledTimezoneSelectorProps;
