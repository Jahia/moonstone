import type {DropdownMenuProps} from './DropdownMenu.types';
import type {DropdownDataTree} from '../Dropdown.types';
import type {TreeViewProps} from '~/components/TreeView/TreeView.types';

export type DropdownMenuTreeProps = {
    handleSelect: DropdownMenuProps['handleSelect'];
    value?: DropdownMenuProps['value'];
    openedBySearch?: string[]
    selectedNodes: DropdownDataTree[];
} & TreeViewProps
