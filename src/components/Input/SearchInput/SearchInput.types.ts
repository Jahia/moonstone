import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type SearchInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'role' | 'role'>

