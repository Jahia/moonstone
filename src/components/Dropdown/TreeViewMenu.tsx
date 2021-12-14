import React, {useState} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {TreeViewMenuProps} from './TreeViewMenu.types';
import {Input, TreeView} from "~/components";
import "../Menu/Menu.scss";
import {TreeViewData} from "~/components/TreeView/TreeView.types";
import clsx from "clsx";

function filterNodes(text: string, nodes: TreeViewData[], opened: string[]) {
    const filtered: TreeViewData[] = [];
    nodes.forEach(c => {
        const filterResult = filterNode(text, c, opened);
        if (filterResult) {
            filtered.push(filterResult);
        }
    })
    return filtered
}

const filterNode = (text: string, node: TreeViewData, opened: string[]) => {
    const match = node.label.toLowerCase().includes(text)
    const children: TreeViewData[] = []
    if (node.children) {
        const filteredChildren = filterNodes(text, node.children, opened);
        if (filteredChildren.length > 0) {
            children.push(...filteredChildren)
            opened.push(node.id)
        }
    }
    if (match || children.length > 0) {
        return {
            ...node,
            treeItemProps:{className: clsx({
                    ['moonstone-disabled']: !match
                })},
            children
        }
    }
}

const find = (value: string, data: TreeViewData, opened: string[]): string => {
    if (data.value === value) {
        return data.id
    }
    if (data.children) {
        const res = data.children.reduce((current, child) => {
            return current || find(value, child, opened)
        }, "")

        if (res) {
            opened.push(data.id)
        }

        return res
    }
}



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
                                                              searchEmptyText,
                                                              data,
                                                              value,
                                                              handleSelect,
                                                              handleKeyPress,
                                                              onClose,
                                                              ...props
                                                          }) => {

    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    // useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [openedItems, setOpenedItems] = useState([]);

    const onOpenItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => [...previousOpenedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => previousOpenedItems.filter(item => item !== node.id));
    };

    const openedBySearch: string[] = [];
    const selected = [];

    if (inputValue !== '') {
        data = filterNodes(inputValue, data, openedBySearch)
    }

    if (value) {
        data.forEach(single => {
            const id = find(value, single, openedBySearch);
            if (id) {
                selected.push(id)
            }
        })
    }

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition as React.CSSProperties,
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

    // ---
    // Render
    // ---
    return (
        <>
            <menu className="moonstone-menu"
                  ref={itemRef}
                  style={styleMenu}
            >
                {hasSearch && (
                    <div className="moonstone-menu_searchInput">
                        <Input
                            variant="search"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                <TreeView data={data}
                          selectedItems={selected}
                          openedItems={[...openedItems, ...openedBySearch]}
                          onOpenItem={onOpenItem} onCloseItem={onCloseItem}
                          onClickItem={(node, e) => {
                              handleSelect(e, node)
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
TreeViewMenu.defaultProps = {
    hasOverlay: true,
    hasSearch: false,
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

TreeViewMenu.displayName = 'TreeViewMenu';
