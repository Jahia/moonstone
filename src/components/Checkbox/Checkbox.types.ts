import {ControlledCheckboxProps} from './ControlledCheckbox.types';
import {UncontrolledCheckboxProps} from './UncontrolledCheckbox.types';

export type CheckboxProps = {
    /**
     * False by default; controls whether the Checkbox is uncontrolled
     */
    isUncontrolled?: boolean;
} & (UncontrolledCheckboxProps | ControlledCheckboxProps);
