import React, {useState} from 'react';
import {usePositioning} from '~/hooks';
import {TreeViewMenuProps} from './TreeViewMenu.types';
import {SearchInput, TreeView} from '~/components';
import '../Menu/Menu.scss';
import {TreeViewData} from '~/components/TreeView/TreeView.types';
import clsx from 'clsx';

function filterNodes(predicate: (data: TreeViewData) => boolean, nodes: TreeViewData[], opened: string[]) {
    const filtered: TreeViewData[] = [];
    nodes.forEach(c => {
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
            treeItemProps: {className: clsx({
                'moonstone-disabled': !match
            })},
            isDisabled: !match,
            children
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

export const TreeViewMenu: React.FC<TreeViewMenuProps> = ({
    isDisplayed,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    anchorPosition,
    anchorElOrigin,
    transformElOrigin,
    position,
    hasOverlay,
    hasSearch,
    autoAddSearchLimit,
    // SearchEmptyText,
    treeData,
    value,
    values,
    handleSelect,
    // HandleKeyPress,
    onClose
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
        treeData.forEach(single => {
            const item = find(data => data.value === value, single, openedBySearch);
            if (item) {
                selected.push(item.id);
            }
        });
    }

    if (values) {
        values.forEach(v => {
            treeData.forEach(single => {
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
        ...stylePosition as React.CSSProperties
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
            <menu ref={itemRef}
                  className="moonstone-menu"
                  style={styleMenu}
            >
                {hasAutoSearch && (
                    <div className="moonstone-menu_searchInput">
                        <SearchInput
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyUp={e => {
                                if (e.key === 'Enter' && treeData.length > 0) {
                                    const item = find(data => !data.isDisabled, treeData[0]);
                                    if (item) {
                                        handleSelect(e, item);
                                    }
                                }
                            }}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                <TreeView data={treeData}
                          selectedItems={selected}
                          size="small"
                          showCheckbox={Boolean(values)}
                          openedItems={[...openedItems, ...openedBySearch]}
                          onOpenItem={onOpenItem}
                          onCloseItem={onCloseItem}
                          onClickItem={(node, e) => {
                              handleSelect(e, node);
                          }}
                />
            </menu>
            {
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className="moonstone-menu_overlay"
                        onClick={onClose}
                        onContextMenu={onClose}
                    />
                )
            }
        </>
    );
};

// Kept defaultProps here because of unnecessary re-rendering when provided as default parameters to the function component
/* eslint-disable react/default-props-match-prop-types */
TreeViewMenu.defaultProps = {
    hasOverlay: true,
    autoAddSearchLimit: 7,
    searchEmptyText: 'No results found.',
    position: 'fixed',
    anchorEl: null,
    anchorPosition: {
        top: 0,
        left: 0
    },
    anchorElOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    transformElOrigin: {
        vertical: 'top',
        horizontal: 'left'
    }
};
/* eslint-enable react/default-props-match-prop-types */

TreeViewMenu.displayName = 'TreeViewMenu';
