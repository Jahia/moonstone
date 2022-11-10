import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {object, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import markdownNotes from './TreeView.md';
import {treeData} from '~/data';
import {TreeView} from './index';

const css = {
    transform: 'scale(1)',
    width: '300px',
    height: '100vh'
};

storiesOf('Components/TreeView', module)
    .addParameters({
        component: TreeView,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={css}>{storyFn()}</div>)
    .add('default', () => (
        <TreeView data={treeData}/>
    ))
    .add('opened by default', () => (
        <TreeView defaultOpenedItems={['A']}
                  data={treeData}
        />
    ))
    .add('data', () => (
        <TreeView
            data={[
                {id: 'A1', label: 'A-1 level1'},
                {id: 'A2', label: 'A-2 level1', children: [{id: 'B1', label: 'B1 level2'}]},
                {id: 'A3', label: 'A-3 level1'}
            ]}
        />
    ))
    .add('Flat', () => (
        <TreeView
            data={[
                {id: 'A1', label: 'A-1 level1'},
                {id: 'A2', label: 'A-2 level1'},
                {id: 'A3', label: 'A-3 level1'},
                {id: 'A4', label: 'A-4 level1'},
                {id: 'A5', label: 'A-5 level1'},
                {id: 'A6', label: 'A-6 level1'}
            ]}
        />
    ))
    .add('selection', () => {
        const [selectedItems, setSelectedItems] = useState([]);
        const handleClick = node => {
            if (selectedItems.includes(node.id)) {
                setSelectedItems(selectedItems.filter(item => item !== node.id));
            } else {
                setSelectedItems([node.id]);
            }
        };

        return (
            <TreeView selectedItems={selectedItems}
                      data={treeData}
                      onClickItem={handleClick}
            />
        );
    })
    .add('isReversed', () => {
        return (
            <div style={{...css, background: '#000'}}>
                <TreeView isReversed
                          data={treeData}
                />
            </div>
        );
    })
    .add('actions', () => (
        <TreeView
            data={treeData}
            onClickItem={action('onClickItem')}
            onDoubleClickItem={action('onDoubleClickItem')}
            onContextMenuItem={action('onContextMenuItem')}
        />
    ))
    .add('controlled', () => {
        const [openedItems, setOpenedItems] = useState([]);
        const handleOpen = node => {
            setOpenedItems([node.id, ...openedItems]);
        };

        const handleClose = node => {
            setOpenedItems(openedItems.filter(item => item !== node.id));
        };

        return (
            <div>
                <span>Opened items = {openedItems.map(n => (
                    <button key={n}
                            type="button"
                            onClick={e => handleClose({id: n}, e)}
                    >{n}
                    </button>
                ))}
                </span>
                <TreeView data={treeData}
                          openedItems={openedItems}
                          onOpenItem={handleOpen}
                          onCloseItem={handleClose}
                />
            </div>
        );
    })
    .add('controlled with loading', () => {
        const [openedItems, setOpenedItems] = useState([]);
        const [treeDataState, setTreeDataState] = useState([
            {id: 'A1', label: 'A-1', hasChildren: true},
            {id: 'A2', label: 'A-2', hasChildren: true},
            {id: 'A3', label: 'A-3', hasChildren: true}
        ]);
        const loadChidren = node => {
            setTreeDataState(data => data.map(n => {
                if (n.id === node.id) {
                    return {
                        ...n,
                        isLoading: false,
                        children: [{id: n.id + '1', label: n.label + '-1'}, {id: n.id + '2', label: n.label + '-2'}]
                    };
                }

                return n;
            }));
        };

        const handleOpen = node => {
            setOpenedItems([node.id, ...openedItems]);
            setTreeDataState(data => data.map(n => {
                if (n.id === node.id && !n.isLoading && !n.children) {
                    setTimeout(() => loadChidren(node), 1000);
                    return {...n, isLoading: true};
                }

                return n;
            }));
        };

        const handleClose = node => {
            setOpenedItems(openedItems.filter(item => item !== node.id));
        };

        return (
            <div>
                <span>Opened items = {openedItems.map(n => (
                    <button key={n}
                            type="button"
                            onClick={e => handleClose({id: n}, e)}
                    >{n}
                    </button>
                ))}
                </span>
                <TreeView data={treeDataState}
                          openedItems={openedItems}
                          onOpenItem={handleOpen}
                          onCloseItem={handleClose}
                />
            </div>
        );
    });
