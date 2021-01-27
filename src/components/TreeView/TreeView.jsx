import React from 'react';
import PropTypes from 'prop-types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

export const TreeView = ({openedItems, defaultOpenedItems, onOpenItem, onCloseItem, data, ...others}) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} data={data} {...others}/>;
    }

    return <ControlledTreeView openedItems={openedItems} data={data} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

TreeView.propTypes = {
    /**
     * Data to generate the tree
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        iconStart: PropTypes.nodes,
        iconEnd: PropTypes.nodes,
        hasChildren: PropTypes.bool,
        isClosable: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool,
        className: PropTypes.string,
        typographyOptions: PropTypes.object,
        treeItemProps: PropTypes.object
    })).isRequired,

    /**
     * Opened items ids. If set, component is controlled
     */
    openedItems: PropTypes.array,

    /**
     * Opened items ids by default, when uncontrolled
     */
    defaultOpenedItems: PropTypes.array,

    /**
     * Selected items' ids
     */
    selectedItems: PropTypes.array,

    /**
     * Trigger on opening node
     */
    onOpenItem: PropTypes.func,

    /**
     * Trigger on opening node
     */
    onCloseItem: PropTypes.func,

    /**
     * Trigger by clicking on node.
     * In the parameters, access to the current node, event, and a method to toggle the node open/close is given.
     */
    onClickItem: PropTypes.func,

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem: PropTypes.func,

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem: PropTypes.func,

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed: PropTypes.bool
};

TreeView.defaultProps = {
    onClickItem: () => {},
    onDoubleClickItem: () => {},
    onContextMenuItem: () => {},
    openedItems: undefined,
    defaultOpenedItems: [],
    selectedItems: [],
    isReversed: false
};

TreeView.displayName = 'TreeView';
