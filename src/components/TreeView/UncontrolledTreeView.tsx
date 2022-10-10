import React, {useState} from 'react';
import {UncontrolledTreeViewProps} from './UncontrolledTreeView.types';
import {TreeViewData} from './TreeView.types';
import {ControlledTreeView} from './ControlledTreeView';

const UncontrolledTreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, UncontrolledTreeViewProps> = ({defaultOpenedItems = [], ...others}, ref) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const onOpenItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => [...prevOpenedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => prevOpenedItems.filter(item => item !== node.id));
    };

    return <ControlledTreeView ref={ref} openedItems={openedItems} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

export const UncontrolledTreeView = React.forwardRef(UncontrolledTreeViewForwardRef);
