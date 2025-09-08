import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type BasicNumberInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'value' | 'defaultValue' | 'onChange' | 'role'> & {
    /**
     * Allows input value to be negative
     * CAUTION: Changing this through a storybook story will break the component
     */
    allowNegative?: boolean;

    /**
     * Step to increase & decrease the value by
     */
    step?: number;

    /**
     * Minimum value allowed
     */
    min?: number;

    /**
     * Maximum value allowed
     */
    max?: number;

    /**
     * Function triggered on change of the input value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type ControlledProps = {
    /**
     * Value to exist in the input field. Define the component as controlled when it set. (Controlled)
     */
    value: string;
}

type UncontrolledProps = {
    /**
     * Default value when the component is rendered (Uncontrolled)
     */
    defaultValue?: string;
}

export type NumberInputProps = BasicNumberInputProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledNumberInputProps = BasicNumberInputProps & ControlledProps;
export type UncontrolledNumberInputProps = BasicNumberInputProps & UncontrolledProps;
