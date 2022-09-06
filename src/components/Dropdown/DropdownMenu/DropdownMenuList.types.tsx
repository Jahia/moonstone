import type {DropdownMenuProps} from './DropdownMenu.types';

export type DropdownMenuListProps = {
    data: DropdownMenuProps['data'] | [];
    handleSelect: DropdownMenuProps['handleSelect'];
    handleKeyPress: DropdownMenuProps['handleKeyPress'];
    selectedValues?: DropdownMenuProps['selectedValues'];
    imageSize?: DropdownMenuProps['imageSize'];
}
