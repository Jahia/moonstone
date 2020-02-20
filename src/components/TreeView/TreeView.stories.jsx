import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {object, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import markdownNotes from './TreeView.md';
import {TreeView} from './index';
import Love from '~/tokens/icons/asset/Love.svg';
import NoCloud from '~/tokens/icons/asset/NoCloud.svg';
import myStyles from './TreeView.stories.scss';

const data = [
    {
        id: 'ROOT',
        label: 'Root',
        iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
        isClosable: false,
        children: [
            {
                id: 'A',
                label: 'A level 1',
                iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
                iconEnd: <NoCloud/>,
                children: [
                    {
                        id: 'A1',
                        label: 'A-1 level2 with a very very very long laaaaaaaaaaaaaaaaaaabel with many many words',
                        typographyOptions: {hasLineThrough: true},
                        iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
                        iconEnd: <NoCloud/>,
                        children: [
                            {
                                id: 'A11',
                                label: 'A-2 level2',
                                typographyOptions: {isItalic: true},
                                iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg'
                            },
                            {id: 'A12', label: 'A-3 level2', iconStart: <Love/>, className: myStyles.colorTest},
                            {id: 'A13', label: 'A-4 level2'}
                        ]
                    },
                    {id: 'A2', label: 'A-2 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {id: 'A3', label: 'A-3 level2'},
                    {id: 'A4', label: 'A-4 level2'}
                ]
            },
            {
                id: 'B',
                label: 'B level1',
                iconStart: <Love/>,
                className: myStyles.colorTest,
                children: [
                    {id: 'B1', label: 'B-1 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {id: 'B2', label: 'B-2 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {id: 'B3', label: 'B-3 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {
                        id: 'B4', label: 'B-4 level2', iconStart: <Love/>, className: myStyles.colorTest, children: [
                            {id: 'B11', label: 'B-1-1 level3', iconStart: <Love/>, className: myStyles.colorTest},
                            {
                                id: 'B22',
                                label: 'B-2-2 level3',
                                iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg'
                            },
                            {id: 'B33', label: 'B-3-3 level3', iconStart: <Love/>, className: myStyles.colorTest},
                            {id: 'B44', label: 'B-4-4 level3', iconStart: <Love/>, className: myStyles.colorTest}
                        ]
                    }
                ]
            },
            {
                id: 'C',
                label: 'C level1',
                iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
                children: []
            }
        ]
    }
];

const css = {
    transform: 'scale(1)',
    width: '300px',
    height: '100vh'
};

storiesOf('Components|TreeView', module)
    .addParameters({
        component: TreeView,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={css}>{storyFn()}</div>)
    .add('default', () => (
        <TreeView data={data}/>
    ))
    .add('opened by default', () => (
        <TreeView defaultOpenedItems={['A']}
                  data={data}
        />
    ))
    .add('data', () => (
        <TreeView
            data={object('data', [
                {id: 'A1', label: 'A-1 level1'},
                {id: 'A2', label: 'A-2 level1', children: [{id: 'B1', label: 'B1 level2'}]},
                {id: 'A3', label: 'A-3 level1'}
            ])}
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
                      data={data}
                      onClickItem={handleClick}
            />
        );
    })
    .add('isReversed', () => {
        return (
            <div style={{...css, background: '#000'}}>
                <TreeView isReversed
                          data={data}
                />
            </div>
        );
    })
    .add('actions', () => (
        <TreeView
            data={data}
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
                <TreeView data={data}
                          openedItems={openedItems}
                          onOpenItem={handleOpen}
                          onCloseItem={handleClose}
                />
            </div>
        );
    })
    .add('controlled with loading', () => {
        const [openedItems, setOpenedItems] = useState([]);
        const [data, setData] = useState([
            {id: 'A1', label: 'A-1', hasChildren: true},
            {id: 'A2', label: 'A-2', hasChildren: true},
            {id: 'A3', label: 'A-3', hasChildren: true}
        ]);
        const loadChidren = node => {
            setData(data => data.map(n => {
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
            setData(data => data.map(n => {
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
                <TreeView data={data}
                          openedItems={openedItems}
                          onOpenItem={handleOpen}
                          onCloseItem={handleClose}
                />
            </div>
        );
    });
