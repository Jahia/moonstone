import React, { useState } from 'react';

import { ControlledTreeView } from './ControlledTreeView';

import type { TreeViewData, UncontrolledTreeViewProps } from './TreeView.types';

const UncontrolledTreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, UncontrolledTreeViewProps> = ({
    defaultOpenedItems = [], onCloseItem, onOpenItem, ...others
}, ref) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const handleOpenItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => [...prevOpenedItems, node.id]);

        if (typeof onOpenItem !== 'undefined') {
            onOpenItem(node);
        }
    };

    const handleCloseItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => prevOpenedItems.filter(item => item !== node.id));
        if (typeof onCloseItem !== 'undefined') {
            onCloseItem(node);
        }
    };

    return (
        <ControlledTreeView
            openedItems={openedItems}
            ref={ref}
            onCloseItem={handleCloseItem}
            onOpenItem={handleOpenItem}
            {...others}
        />
    );
};

export const UncontrolledTreeView = React.forwardRef(UncontrolledTreeViewForwardRef);
