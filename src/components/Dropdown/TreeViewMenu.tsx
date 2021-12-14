import React, {useState} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {TreeViewMenuProps} from './TreeViewMenu.types';
import {Input, TreeView} from "~/components";
import "../Menu/Menu.scss";
import {TreeViewData} from "~/components/TreeView/TreeView.types";
import clsx from "clsx";

function filterNodes(text: string, nodes: TreeViewData[]) {
    const filtered: TreeViewData[] = [];
    const opened: string[] = [];
    nodes.forEach(c => {
        const filterResult = filterNode(text, c);
        if (filterResult) {
            filtered.push(filterResult.data);
            opened.push(...filterResult.opened)
        }
    })
    return {
        data: filtered, opened
    };
}

const filterNode = (text: string, node: TreeViewData) => {
    const match = node.label.toLowerCase().includes(text)
    const children: TreeViewData[] = []
    const opened: string[] = []
    if (node.children) {
        const {data: filteredChildren, opened: openedChildren} = filterNodes(text, node.children);
        if (filteredChildren.length > 0) {
            children.push(...filteredChildren)
            opened.push(node.id, ...openedChildren)
        }
    }
    if (match || children.length > 0) {
        return {
            data: {
                ...node,
                treeItemProps:{className: clsx({
                    ['moonstone-disabled']: !match
                })},
                children
            },
            opened
        }
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

    let openedBySearch: string[] = [];

    if (inputValue !== '') {
        const filteredResult = filterNodes(inputValue, data)
        data = filteredResult.data
        openedBySearch = filteredResult.opened
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
