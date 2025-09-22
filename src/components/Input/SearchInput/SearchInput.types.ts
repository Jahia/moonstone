import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type SearchInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'role' | 'role' | 'variant' | 'hasFilteredValue' | 'allowDecimal' | 'allowNegative'> & {
 variant?: 'outlined' | 'ghost';
};

