import clsx from 'clsx';
import React from 'react';

import { Loader, Typography } from '~/components';
import { icons, layout } from '~/globals/css-utils.js';
import { getInitialIndex, mergeHandlers, onTreeItemKeys, rovingItemProps, useRovingTabIndex } from '~/hooks';
import { CheckboxChecked, CheckboxUnchecked, ChevronDown, ChevronRight } from '~/icons';

import type { ControlledTreeViewProps, TreeViewData } from './TreeView.types';

import styles from './TreeView.module.scss';

// Manage treeView_item's icon
const displayIcon = (icon: React.ReactElement, size: 'small' | 'default' | 'big', className?: string, parentHasIconStart = false) => {
    if (!icon && !parentHasIconStart) {
        return;
    }

    return (
        <i
            className={clsx(
                ['flexRow', layout.flexRow],
                ['alignCenter', layout.alignCenter],
                className,
            )}
        >
            {icon
                && (
                    <icon.type
                        {...icon.props}
                        className={clsx(`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`], icon.props.className)}
                        size={size}
                    />
                )}
        </i>
    );
};

const ControlledTreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, ControlledTreeViewProps> = (
    {
        data,
        openedItems,
        selectedItems = [],
        highlightedItems = [],
        showCheckbox = false,
        onClickItem,
        onDoubleClickItem,
        onContextMenuItem,
        onOpenItem,
        onCloseItem,
        isReversed = false,
        component = 'ul',
        itemComponent = 'li',
        size = 'default',
        isPadVirtualizedRow = false,
        className,
        ...props
    }, ref) => {
    const isFlatData = data.filter(item => item.children && item.children.length > 0).length === 0;
    const rovingTabIndex = useRovingTabIndex();

    // The rendered nodes, in DOM order
    const collectVisibleNodes = (nodeData: TreeViewData[]): TreeViewData[] => nodeData.flatMap(node => [
        node,
        ...((openedItems.includes(node.id) || node.isClosable === false) && node.children ? collectVisibleNodes(node.children) : []),
    ]);
    const visibleNodes = collectVisibleNodes(data);
    const nodeIds = visibleNodes.map(node => node.id);
    // Focus enters the tree on the first selected node, else on the first enabled one
    const { activeIndex, onNavigate } = rovingTabIndex.getCompositeProps(getInitialIndex(visibleNodes.map(node => ({
        isSelected: selectedItems.includes(node.id),
        isDisabled: node.isDisabled,
    }))), nodeIds);

    // The nodes are found in the DOM, not through their refs: a custom itemComponent may not forward its ref
    const getItems = (tree?: Element | null) => Array.from(tree?.querySelectorAll<HTMLElement>('[data-roving-item]') ?? []);
    // Called from the keydown of the focused node
    const focusNode = (id?: string) => getItems(document.activeElement?.closest('[role="tree"]'))[nodeIds.indexOf(id as string)]?.focus();

    function generateLevelJSX(nodeData: TreeViewData[], depth: number, parentHasIconStart: boolean, parentId?: string): React.ReactNode[] {
        const expandSiblings = (e: React.MouseEvent) => {
            nodeData
                .filter(sibling => (sibling.hasChildren || sibling.children?.length > 0) && sibling.isClosable !== false && !openedItems.includes(sibling.id))
                .forEach(sibling => onOpenItem?.(sibling, e));
        };

        return nodeData.map((node) => {
            const hasChild = Boolean(node.hasChildren || (node.children && node.children.length !== 0));
            const hasIconStart = Boolean(node.iconStart);
            const hasIconEnd = Boolean(node.iconEnd);
            const isClosable = Boolean(node.isClosable !== false);
            const isOpen = Boolean(openedItems.includes(node.id)) || !isClosable;
            const isLoading = Boolean(node.isLoading);
            const isSelected = Boolean(selectedItems.includes(node.id));
            const isHighlighted = Boolean(highlightedItems.includes(node.id) && !isSelected);
            const isClickable = Boolean(!node.isDisabled && !node.isReadonly);

            // ---
            // Manage clicks events
            // ---
            const toggleNode = (e: React.MouseEvent) => {
                if (onOpenItem && onCloseItem) {
                    if (isOpen) {
                        onCloseItem(node, e);
                    } else {
                        onOpenItem(node, e);
                    }
                }
            };

            const handleNodeClick = (e: React.MouseEvent) => {
                if (onClickItem) {
                    onClickItem(node, e, toggleNode);
                } else {
                    toggleNode(e);
                }
            };

            const handleNodeDoubleClick = (e: React.MouseEvent) => {
                if (onDoubleClickItem) {
                    onDoubleClickItem(node, e);
                }
            };

            const handleNodeContextMenu = (e: React.MouseEvent) => {
                if (onContextMenuItem) {
                    onContextMenuItem(node, e);
                }
            };

            // ---
            // Define CSS treeView_item classes
            // ---
            const cssTreeViewItem = clsx(
                ['flexRow_between', layout.flexRow_between],
                ['alignCenter', layout.alignCenter],
                ['moonstone-treeView_item', styles['moonstone-treeView_item']],
                size === 'small' && ['moonstone-small', styles['moonstone-small']],
                isSelected && !showCheckbox && ['moonstone-selected', styles['moonstone-selected']],
                isHighlighted && ['moonstone-highlighted', styles['moonstone-highlighted']],
                isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                node.isReadonly && ['moonstone-readonly', styles['moonstone-readonly']],
                node.isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
            );

            const treeItemKeys = onTreeItemKeys({
                onToggle: toggleNode,
                onClick: handleNodeClick,
                isDisabled: !isClickable,
                isExpandable: hasChild && isClosable,
                isOpen: hasChild && isOpen,
                onFocusParent: () => focusNode(parentId),
                onFocusFirstChild: () => focusNode(node.children?.[0]?.id),
                onExpandSiblings: expandSiblings,
            });

            const treeItem = React.createElement(
                itemComponent,
                {
                    'key': `${depth}-${node.id}`,
                    'role': 'treeitem',
                    'aria-selected': isSelected,
                    'aria-expanded': hasChild ? isOpen : null,
                    'aria-busy': isLoading,
                    'aria-current': isHighlighted ? 'page' : null,
                    'aria-disabled': node.isDisabled || undefined,
                    'aria-level': depth + 1,
                    ...rovingItemProps,
                    'onDoubleClick': handleNodeDoubleClick,
                    'onContextMenu': handleNodeContextMenu,
                    ...mergeHandlers(node.treeItemProps ?? {}, {
                        ...treeItemKeys,
                        onFocus: () => onNavigate(nodeIds.indexOf(node.id)),
                    }),
                    'tabIndex': nodeIds[activeIndex] === node.id ? 0 : -1,
                    'style': {
                        '--treeItem-depth': depth,
                        ...node?.treeItemProps?.style,
                    },
                },
                <div className={cssTreeViewItem}>
                    {/* Icon arrow */}
                    {isClosable && hasChild && (
                        <div
                            className={clsx(
                                ['flexRow', layout.flexRow],
                                ['alignCenter', layout.alignCenter],
                                ['moonstone-treeView_itemToggle', styles['moonstone-treeView_itemToggle']],
                            )}
                            data-testid="treeitem-toggle-icon"
                            onClick={toggleNode}
                        >
                            {isLoading ? <Loader isReversed={isReversed} aria-hidden size="small"/> : isOpen ? <ChevronDown size={size}/> : <ChevronRight size={size}/>}
                        </div>
                    )}
                    {!isFlatData && !hasChild
                        && (
                            <div className={clsx(
                                ['flexRow', layout.flexRow],
                                ['alignCenter', layout.alignCenter],
                                ['moonstone-treeView_itemToggle', styles['moonstone-treeView_itemToggle']],
                            )}
                            />
                        )}

                    {isPadVirtualizedRow && isFlatData && !isClosable
                        && (
                            <div className={clsx(
                                ['flexRow', layout.flexRow],
                                ['alignCenter', layout.alignCenter],
                                ['moonstone-treeView_itemToggle', styles['moonstone-treeView_itemToggle']],
                            )}
                            />
                        )}

                    {/* TreeViewItem */}
                    <div
                        className={clsx(
                            ['flexRow_nowrap', layout.flexRow],
                            ['alignCenter', layout.alignCenter],
                            ['flexFluid', layout.flexFluid],
                            ['moonstone-treeView_itemLabel', styles['moonstone-treeView_itemLabel']],
                            node.className,
                        )}
                        onClick={isClickable ? handleNodeClick : undefined}
                    >
                        {showCheckbox
                            ? (isSelected ? <CheckboxChecked aria-checked="true" className={clsx('moonstone-treeView_itemIconStart', styles['moonstone-treeView_itemIconStart'])} color="blue" role="checkbox"/> : <CheckboxUnchecked aria-checked="false" className={clsx('moonstone-treeView_itemIconStart', styles['moonstone-treeView_itemIconStart'])} role="checkbox"/>)
                            : (displayIcon(node.iconStart, 'small', clsx('moonstone-treeView_itemIconStart', styles['moonstone-treeView_itemIconStart']), parentHasIconStart))}
                        <Typography
                            isNowrap
                            className={clsx('flexFluid', layout.flexFluid)}
                            component="span"
                            variant={size === 'default' ? 'body' : 'caption'}
                            {...node.typographyOptions}
                        >
                            {node.label}
                        </Typography>
                        {hasIconEnd && displayIcon(node.iconEnd, 'small')}
                    </div>
                </div>,
            );

            return [
                treeItem,
                ...((isOpen && node.children) ? generateLevelJSX(node.children, isClosable ? (depth + 1) : depth, hasIconStart, node.id) : []),
            ];
        });
    }

    // ArrowUp and ArrowDown move to the previous and next enabled node, without wrapping
    const moveFocus = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
            return;
        }

        const items = getItems(e.currentTarget).filter(item => item.getAttribute('aria-disabled') !== 'true');
        const next = items[items.indexOf(e.target as HTMLElement) + (e.key === 'ArrowDown' ? 1 : -1)];
        if (next) {
            e.preventDefault();
            e.stopPropagation();
            next.focus();
        }
    };

    // TreeView component. ArrowUp and ArrowDown (moveFocus), Home and End (useRovingTabIndex) move between the nodes;
    // Enter, Space, ArrowLeft, ArrowRight and `*` act on the focused node (onTreeItemKeys)
    return React.createElement(component, {
        ref,
        'aria-orientation': 'vertical',
        'role': 'tree',
        'aria-multiselectable': showCheckbox,
        ...mergeHandlers(props, {
            onKeyDown: rovingTabIndex.onKeyDown(moveFocus),
            onBlur: rovingTabIndex.onBlur,
        }),
        'className': clsx(styles.treeView, className),
    }, generateLevelJSX(data, 0, false));
};

export const ControlledTreeView = React.forwardRef(ControlledTreeViewForwardRef);
