import React from 'react';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';

type BaseTimezoneSelectorProps = Omit<DropdownProps,
    'data' |
    'treeData' |
    'value' |
    'values' |
    'onChange' |
    'icon'
> & {
    /** Reference date used to compute UTC offsets in the timezone list. Defaults to today when omitted. */
    referenceDate?: Date | null;
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
