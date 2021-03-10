import React from 'react';
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
    onOpenItem?: (...args: any[]) => void;

    /**
     * Trigger on opening node
     */
    onCloseItem?: (...args: any[]) => void;

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
     * Reverse color usefull for context with dark background
     */
    isReversed?: boolean;
};

