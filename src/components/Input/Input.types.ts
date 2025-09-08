import type {BaseInputProps} from './BaseInput/BaseInput.types';

export type InputProps = Omit<BaseInputProps,
    'prefixComponents' |
    'isShowClearButton' |
    'isShowTriggerButton' |
    'triggerButtonIcon' |
    'variant'
> & {
    /**
     * Which icon to use at the beginning of the input
     * @deprecatedValues 'text' and 'search' use specific component instead
     */
    variant?: 'text' | 'search' | 'outlined' | 'ghost';
};
