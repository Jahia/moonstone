import {BaseDropdownProps} from '../BaseDropdown/BaseDropdown.types';

export type MultipleDropdownProps = {
    values?: string[],
    defaultValues?: string[]
} & BaseDropdownProps
