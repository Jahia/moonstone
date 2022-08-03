import React, {useState} from 'react';
import {UncontrolledTreeViewProps} from './UncontrolledTreeView.types';
import {TreeViewData} from './TreeView.types';
import {ControlledTreeView} from './ControlledTreeView';

export const UncontrolledTreeView: React.FC<UncontrolledTreeViewProps> = ({defaultOpenedItems = [], ...others}) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const onOpenItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => [...prevOpenedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        setOpenedItems(prevOpenedItems => prevOpenedItems.filter(item => item !== node.id));
    };

    return <ControlledTreeView openedItems={openedItems} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};
