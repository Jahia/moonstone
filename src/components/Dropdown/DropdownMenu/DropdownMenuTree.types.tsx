import type {DropdownMenuProps} from './DropdownMenu.types';
import type {TreeViewProps, TreeViewData} from '~/components/TreeView/TreeView.types';

export type DropdownMenuTreeProps = {
    handleSelect: DropdownMenuProps['handleSelect'];
    value?: DropdownMenuProps['value'];
    openedBySearch?: string[]
    selectedNodes: TreeViewData[];
} & TreeViewProps
