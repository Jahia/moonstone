import type {BasicCheckboxProps} from '~/components/Checkbox/Checkbox.types';

type BasicCheckboxItemProps = Omit<BasicCheckboxProps, 'size' | 'id'> & {
    /**
     * Identifier added to the input element
     */
    id: string;

    /**
     * Checkbox description
     */
    description?: string;

    /**
     * Checkbox label
     */
    label: string;
}

type ControlledProps = {
    /**
     * Whether the checkbox should be checked. Must be used with onChange function to update the checked state (controlled)
     */
    checked: boolean;

    /**
     * Function triggered on change of the checkboxItem value
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;
}

type UncontrolledProps = {
    /**
     * Whether the checkbox should be checked by default. (uncontrolled)
     */
    defaultChecked?: boolean;

    /**
     * Function triggered on change of the checkboxItem value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;
}

export type CheckboxItemProps = BasicCheckboxItemProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledCheckboxItemProps = BasicCheckboxItemProps & ControlledProps;
export type UncontrolledCheckboxItemProps = BasicCheckboxItemProps & UncontrolledProps;
