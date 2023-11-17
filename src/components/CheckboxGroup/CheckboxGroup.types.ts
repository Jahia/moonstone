import * as React from 'react';
import {CheckboxItemProps} from './CheckboxItem/CheckboxItem.types';

export type CheckboxGroupProps = {
    /**
     * Set the same name to all CheckboxItem
     */
    name: string;

    /**
     * CheckboxItem component
     */
    children: React.ReactElement<CheckboxItemProps>[];

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function triggered on change of all CheckboxItems. That function is not replaced the onChange function set on a CheckboxItem, In that case both functions will be executed.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Whether the checkboxes should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the checkboxes can be selected but not changed by the user
     */
    isReadOnly?: boolean;
}

export type CheckboxGroupContextProps = {
    /**
     * Checkboxes' name
     */
    name: string;

    /**
     * Function triggered on change of the checkboxes
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Whether all CheckboxItems should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether all CheckboxItems should be read-only
     */
    isReadOnly?: boolean;
}

