import React, {useState} from 'react';
import {UncontrolledTreeViewProps} from './UncontrolledTreeView.types';
import {TreeViewData} from './TreeView.types';
import {ControlledTreeView} from './ControlledTreeView';

const UncontrolledTreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, UncontrolledTreeViewProps> = ({defaultOpenedItems = [], onCloseItem, onOpenItem, ...others}, ref) => {
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

    return <ControlledTreeView ref={ref} openedItems={openedItems} onOpenItem={handleOpenItem} onCloseItem={handleCloseItem} {...others}/>;
};

export const UncontrolledTreeView = React.forwardRef(UncontrolledTreeViewForwardRef);
