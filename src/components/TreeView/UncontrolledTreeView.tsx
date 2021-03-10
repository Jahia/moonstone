import React, {useState} from 'react';
import {UncontrolledTreeViewProps} from './UncontrolledTreeView.types';
import {TreeViewData} from './TreeView.types';
import {ControlledTreeView} from './ControlledTreeView';

export const UncontrolledTreeView: React.FC<UncontrolledTreeViewProps> = ({defaultOpenedItems, ...others}) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const onOpenItem = (node: TreeViewData) => {
        // TODO: need to rename shadowed variable name 'openedItems'
        // tslint:disable-next-line:no-shadowed-variable
        setOpenedItems(openedItems => [...openedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        // TODO: need to rename shadowed variable name 'openedItems'
        // tslint:disable-next-line:no-shadowed-variable
        setOpenedItems(openedItems => openedItems.filter(item => item !== node.id));
    };

    return <ControlledTreeView openedItems={openedItems} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

UncontrolledTreeView.defaultProps = {
    onClickItem: () => undefined,
    onDoubleClickItem: () => undefined,
    onContextMenuItem: () => undefined,
    defaultOpenedItems: [],
    selectedItems: [],
    isReversed: false
};

