import React from 'react';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';
import type {DateTimeInputI18n} from '../shared';

type BaseTimezoneInputProps = Omit<DropdownProps,
    'data' |
    'treeData' |
    'value' |
    'values' |
    'onChange' |
    'icon'
> & {
    /** I18n label for the selector placeholder */
    i18n?: Pick<DateTimeInputI18n, 'timezone'>;

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
    onChange: (event: React.SyntheticEvent, value: string | null) => void;
}

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode: IANA timezone identifier, or `null`. */
    defaultValue?: string | null;
}

export type TimezoneInputProps = BaseTimezoneInputProps & (ControlledProps | UncontrolledProps);
export type {DateTimeInputI18n} from '../shared';
