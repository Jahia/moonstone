import {TreeViewData} from './TreeView.types';

export type UncontrolledTreeViewProps = {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];

    /**
     * Opened items' ids
     */
    defaultOpenedItems?: string[];

    /**
     * Selected items' ids
     */
    selectedItems?: string[];

    /**
     * Trigger by clicking on node
     */
    onClickItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem?: (node: TreeViewData, e?: React.MouseEvent) => void;

    /**
     * Reverse color useful for context with dark background
     */
    isReversed?: boolean;
};

