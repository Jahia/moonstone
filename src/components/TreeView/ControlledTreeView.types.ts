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
    onOpenItem?: () => {};

    /**
     * Trigger on opening node
     */
    onCloseItem?: () => {};

    /**
     * Trigger by clicking on node
     */
    onClickItem?: () => {};

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem?: () => {};

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem?: () => {};

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed?: boolean;
};

