import {useState} from 'react';
import type {StoryContext} from '@storybook/react';
import preview from '../../../.storybook/preview';
import {TreeView} from './index';
import type {TreeViewProps, TreeViewData} from './TreeView.types';
import {treeData, treeDataFlat, treeDataRootClosable} from '~/data';
import markdownNotes from './TreeView.md';

const css = {
    transform: 'scale(1)',
    width: '300px',
    height: '100vh'
};

const meta = preview.meta({
    title: 'Components/TreeView',
    component: TreeView,
    decorators: [(storyFn: () => JSX.Element) => <div style={css}>{storyFn()}</div>],
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        data: treeData
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        return <TreeView {...args} data={treeData} isReversed={theme === 'dark'}/>;
    }
});

export const ClosableRoot = meta.story({
    args: {
        data: treeDataRootClosable
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        return <TreeView {...args} data={treeDataRootClosable} isReversed={theme === 'dark'}/>;
    }
});

export const Flat = meta.story({
    args: {
        data: treeDataFlat
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        return <TreeView {...args} data={treeDataFlat} isReversed={theme === 'dark'}/>;
    }
});

export const Selection = meta.story({
    args: {
        data: treeData
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        const [selectedItems, setSelectedItems] = useState<string[]>([]);

        const handleClick = (node: TreeViewData) => {
            if (selectedItems.includes(node.id)) {
                setSelectedItems(selectedItems.filter(item => item !== node.id));
            } else {
                setSelectedItems([node.id]);
            }
        };

        return (
            <TreeView
                isReversed={theme === 'dark'}
                selectedItems={selectedItems}
                data={treeData}
                onClickItem={handleClick}
                {...args}
            />
        );
    }
});

export const Highlight = meta.story({
    args: {
        data: treeData
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        return <TreeView data={treeData} isReversed={theme === 'dark'} highlightedItems={['A']} {...args}/>;
    }
});

export const Controlled = meta.story({
    args: {
        data: treeData
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        const [openedItems, setOpenedItems] = useState<string[]>([]);

        const handleOpen = (node: TreeViewData) => {
            setOpenedItems([node.id, ...openedItems]);
        };

        const handleClose = (node: TreeViewData) => {
            setOpenedItems(openedItems.filter(item => item !== node.id));
        };

        return (
            <div>
                <span>
                    Opened items ={' '}
                    {openedItems.map(n => (
                        <button key={n} type="button" onClick={() => handleClose({id: n, label: n})}>
                            {n}
                        </button>
                    ))}
                </span>
                <TreeView
                    {...args}
                    data={treeData}
                    openedItems={openedItems}
                    isReversed={theme === 'dark'}
                    onOpenItem={handleOpen}
                    onCloseItem={handleClose}
                />
            </div>
        );
    }
});

export const ControlledWithLoading = meta.story({
    args: {
        data: [
            {id: 'A1', label: 'A-1', hasChildren: true},
            {id: 'A2', label: 'A-2', hasChildren: true},
            {id: 'A3', label: 'A-3', hasChildren: true}
        ]
    },
    render: (args: TreeViewProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        const [openedItems, setOpenedItems] = useState<string[]>([]);
        const [treeDataState, setTreeDataState] = useState<TreeViewData[]>([
            {id: 'A1', label: 'A-1', hasChildren: true},
            {id: 'A2', label: 'A-2', hasChildren: true},
            {id: 'A3', label: 'A-3', hasChildren: true}
        ]);

        const loadChildren = (node: TreeViewData) => {
            setTreeDataState(data =>
                data.map(n => {
                    if (n.id === node.id) {
                        return {
                            ...n,
                            isLoading: false,
                            children: [
                                {id: n.id + '1', label: n.label + '-1'},
                                {id: n.id + '2', label: n.label + '-2'}
                            ]
                        };
                    }

                    return n;
                })
            );
        };

        const handleOpen = (node: TreeViewData) => {
            setOpenedItems([node.id, ...openedItems]);
            setTreeDataState(data =>
                data.map(n => {
                    if (n.id === node.id && !n.isLoading && !n.children) {
                        setTimeout(() => loadChildren(node), 1000);
                        return {...n, isLoading: true};
                    }

                    return n;
                })
            );
        };

        const handleClose = (node: TreeViewData) => {
            setOpenedItems(openedItems.filter(item => item !== node.id));
        };

        return (
            <div>
                <span>
                    Opened items ={' '}
                    {openedItems.map(n => (
                        <button key={n} type="button" onClick={() => handleClose({id: n, label: n})}>
                            {n}
                        </button>
                    ))}
                </span>
                <TreeView
                    data={treeDataState}
                    isReversed={theme === 'dark'}
                    openedItems={openedItems}
                    onOpenItem={handleOpen}
                    onCloseItem={handleClose}
                />
            </div>
        );
    }
});
