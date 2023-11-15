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
     * ID of the highlighted item. Cannot have selected items at the same time.
     */
    highlightedItem?: string;

    /**
     * Show checkbox for selected items
     */
    showCheckbox?: boolean;

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

    /**
     * Component used for the list (ul)
     */
    component?: string;

    /**
     * Component used for every item (li)
     */
    itemComponent?: string;

    /**
     * TreeView row sizes
     */
    size?: 'small' | 'default';
};

