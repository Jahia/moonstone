import {TreeViewData} from './TreeView.types';

export type ControlledTreeViewProps = {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];

    /**
     * Opened items' ids
     */
    openedItems?: string[];

    /**
     * Selected items' ids
     */
    selectedItems?: string[];

    /**
     * Trigger on opening node
     */
    onOpenItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Trigger on opening node
     */
    onCloseItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Trigger by clicking on node
     */
    onClickItem?: (node: TreeViewData, e?: React.MouseEvent, toggleNode?: (e: React.MouseEvent) => void) => void;

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed?: boolean;
};

