import React from 'react';
import clsx from 'clsx';
import './TreeView.scss';
import type {ControlledTreeViewProps} from './TreeView.types';
import {TreeViewData} from './TreeView.types';

import {Loading, ChevronDown, ChevronRight, CheckboxChecked, CheckboxUnchecked} from '~/icons';
import {Typography} from '~/components/Typography';

// Manage treeView_item's icon
const displayIcon = (icon: React.ReactElement, size: string, className: string, parentHasIconStart = false) => {
    if (!icon && !parentHasIconStart) {
        return;
    }

    return (
        <i className={clsx('flexRow', 'alignCenter', className)}>
            {icon &&
            <icon.type {...icon.props} size={size}/>}
        </i>
    );
};

// Manage if we display icon or loading
const displayIconOrLoading = (icon: React.ReactElement, isLoading: boolean) => {
    const i = isLoading ? <Loading size="big" className="moonstone-icon_isLoading"/> : icon;

    return displayIcon(i, 'default', 'moonstone-treeView_itemIconEnd');
};

export const ControlledTreeView = React.forwardRef((
    {
        data,
        openedItems = [],
        selectedItems = [],
        showCheckbox = false,
        onClickItem = () => undefined,
        onDoubleClickItem = () => undefined,
        onContextMenuItem = () => undefined,
        onOpenItem = () => undefined,
        onCloseItem = () => undefined,
        isReversed = false,
        component = 'ul',
        itemComponent = 'li',
        size = 'default',
        ...props
    }: ControlledTreeViewProps,
    ref: React.Ref<HTMLUListElement>
) => {
    const isFlatData = data.filter(item => item.children && item.children.length > 0).length === 0;

    function generateLevelJSX(nodeData: TreeViewData[], depth: number, parentHasIconStart: boolean): React.ReactNode[] {
        return nodeData.map(node => {
            const hasChild = Boolean(node.hasChildren || (node.children && node.children.length !== 0));
            const hasIconStart = Boolean(node.iconStart);
            const isClosable = Boolean(node.isClosable !== false);
            const isOpen = Boolean(openedItems.includes(node.id)) || !isClosable;
            const isLoading = Boolean(node.isLoading);
            const isSelected = Boolean(selectedItems.includes(node.id));

            // ---
            // Manage clicks events
            // ---
            const toggleNode = (e: React.MouseEvent) => {
                if (isOpen) {
                    onCloseItem(node, e);
                } else {
                    onOpenItem(node, e);
                }
            };

            const handleNodeClick = (e: React.MouseEvent) => {
                if (onClickItem.length === 0) {
                    toggleNode(e);
                }

                onClickItem(node, e, toggleNode);
            };

            const handleNodeDoubleClick = (e: React.MouseEvent) => {
                onDoubleClickItem(node, e);
            };

            const handleNodeContextMenu = (e: React.MouseEvent) => {
                onContextMenuItem(node, e);
            };

            // ---
            // Define CSS treeView_item classes
            // ---
            const cssTreeViewItem = clsx(
                'flexRow_between',
                'alignCenter',
                'moonstone-treeView_item',
                {
                    'moonstone-small': size === 'small',
                    'moonstone-selected': isSelected && !showCheckbox,
                    'moonstone-reversed': isReversed,
                    'moonstone-disabled': node.isDisabled
                }
            );

            return [
                React.createElement(
                    itemComponent,
                    {
                        role: 'treeitem',
                        'aria-expanded': isOpen,
                        key: `${depth}-${node.id}`,
                        style: {'--treeItem-depth': depth},
                        ...node.treeItemProps
                    },
                    <div className={cssTreeViewItem}>
                        {/* Icon arrow */}
                        {isClosable && hasChild && (
                            <div
                                className={clsx('flexRow', 'alignCenter', 'moonstone-treeView_itemToggle')}
                                onClick={toggleNode}
                            >
                                {isOpen ? <ChevronDown size={size}/> : <ChevronRight size={size}/>}
                            </div>
                        )}
                        {!isFlatData && !hasChild &&
                            <div className={clsx('flexRow', 'alignCenter', 'moonstone-treeView_itemToggle')}/>}

                        {/* TreeViewItem */}
                        <div
                            className={clsx('flexRow_nowrap', 'alignCenter', 'flexFluid', 'moonstone-treeView_itemLabel', node.className)}
                            onClick={node.isDisabled ? undefined : handleNodeClick}
                            onDoubleClick={handleNodeDoubleClick}
                            onContextMenu={handleNodeContextMenu}
                        >
                            {showCheckbox ?
                                (isSelected ? <CheckboxChecked className="moonstone-treeView_itemIconStart" role="checkbox" color="blue"/> : <CheckboxUnchecked className="moonstone-treeView_itemIconStart" role="checkbox"/>) :
                                (displayIcon(node.iconStart, 'small', 'moonstone-treeView_itemIconStart', parentHasIconStart))}
                            <Typography isNowrap
                                        className={clsx('flexFluid')}
                                        component="span"
                                        variant={size === 'default' ? 'body' : 'caption'}
                                        {...node.typographyOptions}
                            >
                                {node.label}
                            </Typography>
                            {displayIconOrLoading(node.iconEnd, isLoading)}
                        </div>
                    </div>
                ),
                ...((isOpen && node.children) ? generateLevelJSX(node.children, isClosable ? (depth + 1) : depth, hasIconStart) : [])
            ];
        });
    }

    // TreeView component
    return React.createElement(component, {ref, role: 'tree', ...props}, generateLevelJSX(data, 0, false));
});
