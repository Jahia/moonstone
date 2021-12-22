import * as React from 'react';

export type TreeViewData = {
    id: string;
    label: string;
    value?: string;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    hasChildren?: boolean;
    isClosable?: boolean;
    children?: TreeViewData[];
    isLoading?: boolean;
    isDisabled?: boolean;
    className?: string;
    typographyOptions?: object;
    treeItemProps?: object;
};

export type TreeViewProps = {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];
    /**
     * Opened items ids. If set, component is controlled
     */
    openedItems?: string[];
    /**
     * Opened items ids by default, when uncontrolled
     */
    defaultOpenedItems?: string[];
    /**
     * Selected items' ids
     */
    selectedItems?: string[];
    /**
     * Trigger on opening node
     */
    onOpenItem?: (...args: any[]) => void;
    /**
     * Trigger on opening node
     */
    onCloseItem?: (...args: any[]) => void;
    /**
     * Trigger by clicking on node.
     * In the parameters, access to the current node, event, and a method to toggle the node open/close is given.
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
     * Reverse color usefull for context with dark background
     */
    isReversed?: boolean;
};

