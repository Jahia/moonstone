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
    isReadonly?: boolean;
    isDisabled?: boolean;
    className?: string;
    typographyOptions?: object;
    treeItemProps?: TreeItemProps;
};

type TreeItemProps = {
    style: object
}

type BasicTreeViewProps = {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];
    /**
     * Selected items' ids
     */
    selectedItems?: string[];
    /**
     * IDs of the highlighted items
     */
    highlightedItems?: string[];
    /**
     * Show checkbox for selected items
     */
    showCheckbox?: boolean;
    /**
     * Trigger by clicking on node.
     * In the parameters, access to the current node, event, and a method to toggle the node open/close is given.
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
     * Whether the component should use reversed colors, it useful with dark background
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
    /**
     * Adds padding even if data is flat
     */
    padFlatData?: boolean
};

type ControlledProps = {
    /**
     * Opened items ids. If set, component is controlled
     */
    openedItems: string[];
    /**
     * Trigger on opening node
     */
    onOpenItem: (node: TreeViewData, e?: React.MouseEvent) => void;
    /**
     * Trigger on opening node
     */
    onCloseItem: (node: TreeViewData, e?: React.MouseEvent) => void;
}

type UncontrolledProps = {
    /**
     * Opened items ids by default, when uncontrolled
     */
    defaultOpenedItems?: string[];
    /**
     * Trigger on opening node
     */
    onOpenItem?: (node: TreeViewData, e?: React.MouseEvent) => void;
    /**
     * Trigger on opening node
     */
    onCloseItem?: (node: TreeViewData, e?: React.MouseEvent) => void;
}

export type TreeViewProps = BasicTreeViewProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledTreeViewProps = BasicTreeViewProps & ControlledProps;
export type UncontrolledTreeViewProps = BasicTreeViewProps & UncontrolledProps;
