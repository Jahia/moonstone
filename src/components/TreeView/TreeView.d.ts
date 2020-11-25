import * as React from 'react';

export interface TreeViewData {
    id: string;
    label: string;
    iconStart?: any;
    iconEnd?: any;
    hasChildren?: boolean;
    isClosable?: boolean;
    children?: TreeViewData[];
    isLoading?: boolean;
    className?: string;
    typographyOptions?: object;
    treeItemProps?: object;
}

export interface TreeViewProps {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];
    /**
     * Opened items ids. If set, component is controlled
     */
    openedItems?: any[];
    /**
     * Opened items ids by default, when uncontrolled
     */
    defaultOpenedItems?: any[];
    /**
     * Selected items' ids
     */
    selectedItems?: any[];
    /**
     * Trigger on opening node
     */
    onOpenItem?: (...args: any[])=>any;
    /**
     * Trigger on opening node
     */
    onCloseItem?: (...args: any[])=>any;
    /**
     * Trigger by clicking on node.
     * In the parameters, access to the current node, event, and a method to toggle the node open/close is given.
     */
    onClickItem?: (...args: any[])=>any;
    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem?: (...args: any[])=>any;
    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem?: (...args: any[])=>any;
    /**
     * Reverse color usefull for context with dark background
     */
    isReversed?: boolean;
}

export const TreeView: React.SFC<TreeViewProps>;

