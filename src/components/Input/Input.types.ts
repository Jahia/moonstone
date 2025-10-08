import type {BaseInputProps} from './BaseInput/BaseInput.types';

export type InputProps = Omit<BaseInputProps,
    'prefixComponents' |
    'isShowClearButton' |
    'isShowTriggerButton' |
    'triggerButtonIcon' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
>;
