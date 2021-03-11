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
    onClickItem?: (...args: any[]) => void;

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem?: (...args: any[]) => void;

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem?: (...args: any[]) => void;

    /**
     * Reverse color useful for context with dark background
     */
    isReversed?: boolean;
};

