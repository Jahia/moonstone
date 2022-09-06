import {BaseDropdownProps} from './BaseDropdown/BaseDropdown.types';

export type DropdownProps = {
    defaultSelectedItem?: {label:string, value: string | undefined}
    label: string,
    value?: string
} & BaseDropdownProps
