import React, {useState} from 'react';
// Import {object, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import markdownNotes from './TreeView.md';
import {treeData, treeDataFlat} from '~/data';
import {TreeView} from './index';

const css = {
    transform: 'scale(1)',
    width: '300px',
    height: '100vh'
};

export default {
    title: 'Components/TreeView',
    component: TreeView,
    decorators: [storyFn => <div style={css}>{storyFn()}</div>],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <TreeView data={treeData}/>
);

export const OpenedByDefault = () => (
    <TreeView defaultOpenedItems={['A']} data={treeData}/>
);

export const Flat = () => (
    <TreeView data={treeDataFlat}/>
);

export const Selection = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = node => {
        if (selectedItems.includes(node.id)) {
            setSelectedItems(selectedItems.filter(item => item !== node.id));
        } else {
            setSelectedItems([node.id]);
        }
    };

    return (
        <TreeView
            selectedItems={selectedItems}
            data={treeData}
            onClickItem={handleClick}
        />
    );
};

export const IsReversed = () => {
    return (
        <div style={{...css, background: '#000'}}>
            <TreeView isReversed data={treeData}/>
        </div>
    );
};

export const Actions = () => (
    <TreeView
        data={treeData}
        onClickItem={action('onClickItem')}
        onDoubleClickItem={action('onDoubleClickItem')}
        onContextMenuItem={action('onContextMenuItem')}
    />
);

export const Controlled = () => {
    const [openedItems, setOpenedItems] = useState([]);
    const handleOpen = node => {
        setOpenedItems([node.id, ...openedItems]);
    };

    const handleClose = node => {
        setOpenedItems(openedItems.filter(item => item !== node.id));
    };

    return (
        <div>
            <span>
                Opened items ={' '}
                {openedItems.map(n => (
                    <button
                        key={n}
                        type="button"
                        onClick={e => handleClose({id: n}, e)}
                    >
                        {n}
                    </button>
                ))}
            </span>
            <TreeView
                data={treeData}
                openedItems={openedItems}
                onOpenItem={handleOpen}
                onCloseItem={handleClose}
            />
        </div>
    );
};

export const ControlledWithLoading = () => {
    const [openedItems, setOpenedItems] = useState([]);
    const [treeDataState, setTreeDataState] = useState([
        {id: 'A1', label: 'A-1', hasChildren: true},
        {id: 'A2', label: 'A-2', hasChildren: true},
        {id: 'A3', label: 'A-3', hasChildren: true}
    ]);
    const loadChidren = node => {
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

    const handleOpen = node => {
        setOpenedItems([node.id, ...openedItems]);
        setTreeDataState(data =>
            data.map(n => {
                if (n.id === node.id && !n.isLoading && !n.children) {
                    setTimeout(() => loadChidren(node), 1000);
                    return {...n, isLoading: true};
                }

                return n;
            })
        );
    };

    const handleClose = node => {
        setOpenedItems(openedItems.filter(item => item !== node.id));
    };

    return (
        <div>
            <span>
                Opened items ={' '}
                {openedItems.map(n => (
                    <button
                        key={n}
                        type="button"
                        onClick={e => handleClose({id: n}, e)}
                    >
                        {n}
                    </button>
                ))}
            </span>
            <TreeView
                data={treeDataState}
                openedItems={openedItems}
                onOpenItem={handleOpen}
                onCloseItem={handleClose}
            />
        </div>
    );
};
