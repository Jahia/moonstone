import {ControlledCheckboxProps} from './ControlledCheckbox.types';
import {UncontrolledCheckboxProps} from './UncontrolledCheckbox.types';

export type CheckboxProps = {
    /**
     * Variant of the checkbox
     */
    variant?: 'controlled' | 'uncontrolled';
} & (UncontrolledCheckboxProps | ControlledCheckboxProps);
