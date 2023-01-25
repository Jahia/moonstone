import * as React from 'react';

type ControlledProps = {
    /**
     * Opened items ids. Define the component as controlled when it set
     */
    openedItems: string[];
}

type UncontrolledProps = {
    /**
     * Opened items ids by default, (uncontrolled)
     */
    defaultOpenedItems?: string[];
}

type BasicProps = React.ComponentPropsWithRef<'ul'> & {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];

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
     * Trigger by clicking on node.
     * @param {object} node - Access to the current node
     * @param {event} e - Mouse event
     * @param {function} toggleNode - Method to toggle the node open/close is given
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
     * The HTML tag used to render the list (ul)
     */
    component?: string;

    /**
     * The HTML tag used to render the list items (li)
     */
    itemComponent?: string;
};

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

export type TreeViewProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledTreeViewProps = BasicProps & ControlledProps;

export type UncontrolledTreeViewProps = BasicProps & UncontrolledProps;
