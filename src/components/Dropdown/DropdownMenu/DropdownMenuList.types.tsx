import type {DropdownMenuProps} from './DropdownMenu.types';

export type DropdownMenuListProps = {
    data: DropdownMenuProps['data'] | [];
    handleSelect: DropdownMenuProps['handleSelect'];
    handleKeyPress: DropdownMenuProps['handleKeyPress'];
    value?: DropdownMenuProps['value'];
    imageSize?: DropdownMenuProps['imageSize'];
    multipleValues?: string[];
}
