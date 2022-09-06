import type {DropdownMenuProps} from './DropdownMenu.types';
import type {TreeViewProps} from '~/components/TreeView/TreeView.types';

export type DropdownMenuTreeProps = {
    handleSelect: DropdownMenuProps['handleSelect'];
    selectedValues?: DropdownMenuProps['selectedValues'];
    openedBySearch?: string[];
    selectedNodesId: string[];
    isMultiple?: boolean
} & TreeViewProps
