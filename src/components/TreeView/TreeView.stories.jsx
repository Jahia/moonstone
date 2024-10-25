import React, {useState} from 'react';

import {TreeView} from './index';
import {treeData, treeDataFlat} from '~/data';

import markdownNotes from './TreeView.md';

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
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default = {
    Render: (args, {globals: {theme}}) => (
        <TreeView {...args} data={treeData} isReversed={theme === 'dark'}/>
    )
};

export const OpenedByDefault = {
    Render: (args, {globals: {theme}}) => (
        <TreeView
      {...args}
      defaultOpenedItems={['A']}
      data={treeData}
      isReversed={theme === 'dark'}
    />
    )
};

export const Flat = {
    Render: (args, {globals: {theme}}) => (
        <TreeView {...args} data={treeDataFlat} isReversed={theme === 'dark'}/>
    )
};

export const Selection = {
    Render: (args, {globals: {theme}}) => {
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
        {...args}
        isReversed={theme === 'dark'}
        selectedItems={selectedItems}
        data={treeData}
        onClickItem={handleClick}
      />
        );
    }
};

export const Highlight = {
    Render: (args, {globals: {theme}}) => (
        <TreeView
      {...args}
      data={treeData}
      isReversed={theme === 'dark'}
      highlightedItem="A"
    />
    )
};

export const Controlled = {
    Render: (args, {globals: {theme}}) => {
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
              onClick={() => handleClose({id: n})}
                        >
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
                    <button key={n} type="button" onClick={() => handleClose({id: n})}>
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
