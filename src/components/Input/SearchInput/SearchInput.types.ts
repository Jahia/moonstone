import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type SearchInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'role' | 'variant' | 'filterFunction' | 'allowDecimal' | 'allowNegative'> & {
    variant?: 'outlined' | 'ghost';
};
