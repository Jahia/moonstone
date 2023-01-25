import React from 'react';
import {TreeViewProps} from './TreeView.types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

export const TreeView = React.forwardRef((
    {
        openedItems,
        defaultOpenedItems,
        onOpenItem,
        onCloseItem,
        data,
        ...others
    }: TreeViewProps,
    ref: React.Ref<HTMLUListElement>
) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} data={data} {...others}/>;
    }

    return <ControlledTreeView ref={ref} openedItems={openedItems} data={data} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
});

TreeView.displayName = 'TreeView';
