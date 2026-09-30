import { useState } from 'react';

import { TreeView } from './index';
import markdownNotes from './TreeView.md';
import { treeData, treeDataFlat, treeDataRootClosable } from '~/data';

import type { TreeViewData, TreeViewProps } from './TreeView.types';

const css = {
    transform: 'scale(1)',
    width: '300px',
    height: '100vh',
};

export default {
    title: 'Components/TreeView',
    component: TreeView,
    tags: ['dark-theme'],
    decorators: [(storyFn: () => JSX.Element) => <div style={css}>{storyFn()}</div>],
    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes },
    },
};

export const Default = {
    render: (args: TreeViewProps, { globals }: { globals: { theme: string } }) => {
        const theme = globals.theme;
        return <TreeView {...args} isReversed={theme === 'dark'} data={treeData}/>;
    },
};

export const ClosableRoot = {
    render: (args: TreeViewProps, { globals }: { globals: { theme: string } }) => {
        const theme = globals.theme;
        return <TreeView {...args} isReversed={theme === 'dark'} data={treeDataRootClosable}/>;
    },
};

// Export const OpenedByDefault = {
//     render: (args, {globals: {theme}}) => {
//         const theme = globals.theme;
//         return (
//             <TreeView
//                 {...args}
//                 defaultOpenedItems={['A']}
//                 data={treeData}
//                 isReversed={theme === 'dark'}
//             />
//         )
//     }
// };

export const Flat = {
    render: (args: TreeViewProps, { globals: { theme } }: { globals: { theme: string } }) => (
        <TreeView {...args} isReversed={theme === 'dark'} data={treeDataFlat}/>
    ),
};

export const Selection = {
    render: (args: TreeViewProps, { globals }: { globals: { theme: string } }) => {
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
                data={treeData}
                selectedItems={selectedItems}
                onClickItem={handleClick}
                {...args}
            />
        );
    },
};
export const Highlight = {
    render: (args: TreeViewProps, { globals: { theme } }: { globals: { theme: string } }) => (
        <TreeView isReversed={theme === 'dark'} data={treeData} highlightedItems={['A']} {...args}/>
    ),
};

export const Controlled = {
    render: (args: TreeViewProps, { globals }: { globals: { theme: string } }) => {
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
                    Opened items =
                    {' '}
                    {openedItems.map(n => (
                        <button key={n} type="button" onClick={() => handleClose({ id: n, label: n })}>
                            {n}
                        </button>
                    ))}
                </span>
                <TreeView
                    {...args}
                    isReversed={theme === 'dark'}
                    data={treeData}
                    openedItems={openedItems}
                    onCloseItem={handleClose}
                    onOpenItem={handleOpen}
                />
            </div>
        );
    },
};

export const ControlledWithLoading = {
    render: (args: TreeViewProps, { globals }: { globals: { theme: string } }) => {
        const theme = globals.theme;
        const [openedItems, setOpenedItems] = useState<string[]>([]);
        const [treeDataState, setTreeDataState] = useState<TreeViewData[]>([
            { id: 'A1', label: 'A-1', hasChildren: true },
            { id: 'A2', label: 'A-2', hasChildren: true },
            { id: 'A3', label: 'A-3', hasChildren: true },
        ]);

        const loadChildren = (node: TreeViewData) => {
            setTreeDataState(data =>
                data.map((n) => {
                    if (n.id === node.id) {
                        return {
                            ...n,
                            isLoading: false,
                            children: [
                                { id: n.id + '1', label: n.label + '-1' },
                                { id: n.id + '2', label: n.label + '-2' },
                            ],
                        };
                    }

                    return n;
                }),
            );
        };

        const handleOpen = (node: TreeViewData) => {
            setOpenedItems([node.id, ...openedItems]);
            setTreeDataState(data =>
                data.map((n) => {
                    if (n.id === node.id && !n.isLoading && !n.children) {
                        setTimeout(() => loadChildren(node), 1000);
                        return { ...n, isLoading: true };
                    }

                    return n;
                }),
            );
        };

        const handleClose = (node: TreeViewData) => {
            setOpenedItems(openedItems.filter(item => item !== node.id));
        };

        return (
            <div>
                <span>
                    Opened items =
                    {' '}
                    {openedItems.map(n => (
                        <button key={n} type="button" onClick={() => handleClose({ id: n, label: n })}>
                            {n}
                        </button>
                    ))}
                </span>
                <TreeView
                    isReversed={theme === 'dark'}
                    data={treeDataState}
                    openedItems={openedItems}
                    onCloseItem={handleClose}
                    onOpenItem={handleOpen}
                />
            </div>
        );
    },
};
