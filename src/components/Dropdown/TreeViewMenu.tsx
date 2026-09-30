import clsx from 'clsx';
import React, { useState } from 'react';

import { SearchInput, TreeView } from '~/components';
import { usePositioning } from '~/hooks';

import type { TreeViewMenuProps } from './TreeViewMenu.types';
import type { TreeViewData } from '~/components/TreeView/TreeView.types';

import styles from '../Menu/Menu.module.scss';

function filterNodes(predicate: (data: TreeViewData) => boolean, nodes: TreeViewData[], opened: string[]) {
    const filtered: TreeViewData[] = [];
    nodes.forEach((c) => {
        const filterResult = filterNode(predicate, c, opened);
        if (filterResult) {
            filtered.push(filterResult);
        }
    });
    return filtered;
}

const filterNode = (predicate: (data: TreeViewData) => boolean, node: TreeViewData, opened: string[]) => {
    const match = predicate(node);
    const children: TreeViewData[] = [];
    if (node.children) {
        const filteredChildren = filterNodes(predicate, node.children, opened);
        if (filteredChildren.length > 0) {
            children.push(...filteredChildren);
            opened.push(node.id);
        }
    }

    if (match || children.length > 0) {
        return {
            ...node,
            treeItemProps: {
                className: clsx({
                    'moonstone-disabled': !match,
                }),
            },
            isDisabled: !match,
            children,
        };
    }
};

const find = (predicate: (data: TreeViewData) => boolean, data: TreeViewData, opened?: string[]): TreeViewData => {
    if (predicate(data)) {
        return data;
    }

    if (data.children) {
        const res = data.children.reduce((current, child) => {
            return current || find(predicate, child, opened);
        }, null);

        if (res && opened) {
            opened.push(data.id);
        }

        return res;
    }
};

const flatten = (data: TreeViewData[]): TreeViewData[] => {
    const res: TreeViewData[] = [];

    const fn = (current: TreeViewData) => {
        res.push(current);
        if (current.children) {
            current.children.forEach(fn);
        }
    };

    data?.forEach?.(fn);

    return res;
};

const defaultAnchorElOrigin = {
    horizontal: 'left',
    vertical: 'bottom',
} as const;

const defaultTransformElOrigin = {
    vertical: 'top',
    horizontal: 'left',
} as const;

const defaultAnchorPosition = {
    top: 0,
    left: 0,
} as const;

export const TreeViewMenu: React.FC<TreeViewMenuProps> = ({
    isDisplayed,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl = null,
    anchorElOrigin = defaultAnchorElOrigin,
    transformElOrigin = defaultTransformElOrigin,
    anchorPosition = defaultAnchorPosition,
    position = 'fixed',
    hasOverlay = true,
    hasSearch,
    autoAddSearchLimit = 7,
    // SearchEmptyText = 'No results found.',
    treeData,
    value,
    values,
    handleSelect,
    // HandleKeyPress,
    onClose,
}) => {
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    // UseEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [openedItems, setOpenedItems] = useState([]);

    const onOpenItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => [...previousOpenedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => previousOpenedItems.filter(item => item !== node.id));
    };

    const openedBySearch: string[] = [];
    const selected: string[] = [];

    if (inputValue !== '') {
        treeData = filterNodes(node => node.label.toLowerCase().includes(inputValue.toLowerCase()), treeData, openedBySearch);
    }

    if (value) {
        treeData.forEach((single) => {
            const item = find(data => data.value === value, single, openedBySearch);
            if (item) {
                selected.push(item.id);
            }
        });
    }

    if (values) {
        values.forEach((v) => {
            treeData.forEach((single) => {
                const item = find(data => data.value === v, single, openedBySearch);
                if (item) {
                    selected.push(item.id);
                }
            });
        });
    }

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition,
    };

    if (minWidth) {
        styleMenu.minWidth = minWidth;
    }

    if (maxWidth) {
        styleMenu.maxWidth = maxWidth;
    }

    if (maxHeight) {
        styleMenu.maxHeight = maxHeight;
    }

    let hasAutoSearch: boolean = hasSearch;
    if (typeof hasSearch === 'undefined') {
        hasAutoSearch = flatten(treeData)?.length > autoAddSearchLimit;
    }

    // ---
    // Render
    // ---
    return (
        <>
            <menu
                className={clsx('moonstone-menu', styles['moonstone-menu'])}
                ref={itemRef}
                style={styleMenu}
            >
                {hasAutoSearch && (
                    <div className={clsx('moonstone-menu_searchInput', styles['moonstone-menu_searchInput'])}>
                        <SearchInput
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onClear={() => setInputValue('')}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter' && treeData.length > 0) {
                                    const item = find(data => !data.isDisabled, treeData[0]);
                                    if (item) {
                                        handleSelect(e, item);
                                    }
                                }
                            }}
                        />
                    </div>
                )}
                <TreeView
                    data={treeData}
                    openedItems={[...openedItems, ...openedBySearch]}
                    selectedItems={selected}
                    showCheckbox={Boolean(values)}
                    size="small"
                    onClickItem={(node, e) => {
                        handleSelect(e, node);
                    }}
                    onCloseItem={onCloseItem}
                    onOpenItem={onOpenItem}
                />
            </menu>
            {
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className={clsx('moonstone-menu_overlay', styles['moonstone-menu_overlay'])}
                        onClick={onClose}
                        onContextMenu={onClose}
                    />
                )
            }
        </>
    );
};

TreeViewMenu.displayName = 'TreeViewMenu';
