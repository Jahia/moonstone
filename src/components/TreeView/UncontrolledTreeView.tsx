import React, {useState} from 'react';
import type {UncontrolledTreeViewProps} from './TreeView.types';
import {TreeViewData} from './TreeView.types';
import {ControlledTreeView} from './ControlledTreeView';

export const UncontrolledTreeView = React.forwardRef((
    {
        defaultOpenedItems = [],
        onOpenItem,
        onCloseItem,
        ...props
    }: UncontrolledTreeViewProps,
    ref: React.Ref<HTMLUListElement>
) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const handleOnOpenItem = (node: TreeViewData, e: React.MouseEvent) => {
        setOpenedItems(prevOpenedItems => [...prevOpenedItems, node.id]);
        if (typeof onOpenItem !== 'undefined') {
            onOpenItem(node, e);
        }
    };

    const handleOnCloseItem = (node: TreeViewData, e: React.MouseEvent) => {
        setOpenedItems(prevOpenedItems => prevOpenedItems.filter(item => item !== node.id));
        if (typeof onOpenItem !== 'undefined') {
            onCloseItem(node, e);
        }
    };

    return <ControlledTreeView ref={ref} openedItems={openedItems} onOpenItem={handleOnOpenItem} onCloseItem={handleOnCloseItem} {...props}/>;
});
