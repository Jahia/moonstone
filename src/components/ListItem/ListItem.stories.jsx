import React from 'react';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import {Love, Cloud} from '~/icons';

export default {
    title: 'Components/ListItem',
    component: ListItem,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default = args => (
    <ul>
        <ListItem {...args}/>
    </ul>
);
Default.args = {
    label: 'ListItem label'
};

export const IconText = args => (
    <ul>
        <ListItem {...args}/>
    </ul>
);
IconText.story = {
    name: 'Icon + Text'
};
IconText.args = {
    label: 'ListItem',
    iconStart: <Love/>
};

export const IconTextIcon = args => (
    <ul>
        <ListItem {...args}/>
    </ul>
);
IconTextIcon.story = {
    name: 'Icon + Text + Icon'
};
IconTextIcon.args = {
    label: 'ListItem',
    iconStart: <Love/>,
    iconEnd: <Cloud/>
};

export const WithBigImage = args => (
    <ul>
        <ListItem
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            {...args}
        />
        <ListItem
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            {...args}
        />
        <ListItem
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            {...args}
        />
    </ul>
);
WithBigImage.args = {
    label: 'ListItem label',
    imageSize: 'big'
};

export const WithSmallImage = args => (
    <ul>
        <ListItem
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            {...args}
        />
        <ListItem
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            {...args}
        />
        <ListItem
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            {...args}
        />
    </ul>
);
WithSmallImage.args = {
    label: 'ListItem label',
    imageSize: 'small'
};
