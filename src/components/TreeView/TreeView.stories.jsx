import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import {withKnobs, object} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import markdownNotes from './TreeView.md';
import {TreeView} from './index';
import Love from '~/icons/asset/Love.svg';
import NoCloud from '~/icons/asset/NoCloud.svg';

const data = [
    {
        id: 'A',
        label: 'A level 1',
        iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
        iconEnd: <NoCloud size="small"/>,
        children: [
            {id: 'A1', label: 'A-1 level2 with a very very very long laaaaaaaaaaaaaaaaaaabel with many many words', iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg', iconEnd: <NoCloud size="small"/>},
            {id: 'A2', label: 'A-2 level2'},
            {id: 'A3', label: 'A-3 level2'},
            {id: 'A4', label: 'A-4 level2'}
        ]
    },
    {
        id: 'B',
        label: 'B level1',
        iconStart: <Love size="small"/>,
        children: [
            {id: 'B1', label: 'B-1 level2'},
            {id: 'B2', label: 'B-2 level2'},
            {id: 'B3', label: 'B-3 level2'},
            {id: 'B4', label: 'B-4 level2', children: [
                {id: 'B11', label: 'B-1-1 level3'},
                {id: 'B22', label: 'B-2-2 level3', iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg'},
                {id: 'B33', label: 'B-3-3 level3'},
                {id: 'B44', label: 'B-4-4 level3'}
            ]}
        ]
    },
    {
        id: 'C',
        label: 'C level1',
        iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
        children: []
    }
];

const TreeViewStory = ({isReversed}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = node => {
        if (selectedItems.includes(node.id)) {
            setSelectedItems(selectedItems.filter(item => item !== node.id));
        } else {
            setSelectedItems([node.id]);
        }
    };

    let css = {
        transform: 'scale(1)',
        height: '100vh'
    };
    if (isReversed) {
        css = {...css, background: '#000'};
    }

    return (
        <div style={css}>
            <TreeView data={data}
                      isReversed={isReversed}
                      selectedItems={selectedItems}
                      onClick={handleClick}
            />
        </div>
    );
};

TreeViewStory.defaultProps = {
    isReversed: false
};

TreeViewStory.propTypes = {
    isReversed: PropTypes.bool
};

storiesOf('Components|TreeView', module)
    .addParameters({
        component: TreeView,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <TreeView data={data}/>
    ))
    .add('opened', () => (
        <TreeView openedItems={['A']} data={data}/>
    ))
    .add('loading', () => (
        <TreeView loadingItems={['A1']} data={data}/>
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
    .add('isSelectable', () => (
        <TreeViewStory isReversed={false}/>
    ))
    .add('isReversed', () => (
        <TreeViewStory isReversed data={data}/>
    ))
    .add('actions', () => (
        <TreeView
            data={data}
            onClick={action('on click')}
            onClickToOpen={action('on click to open')}
            onDoubleClick={action('on double click')}
        />
    ));
