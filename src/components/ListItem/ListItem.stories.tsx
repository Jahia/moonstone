import React from 'react';
import {Story} from '@storybook/react';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import type {ListItemProps} from './ListItem.types';
import {Love, Cloud} from '~/icons';

export default {
    title: 'Components/ListItem',
    component: ListItem,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default: Story<ListItemProps> = args => (
    <ul>
        <ListItem {...args}/>
    </ul>
);
Default.args = {
    label: 'ListItem label'
};

export const IconText: Story<ListItemProps> = args => (
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

export const IconTextIcon: Story<ListItemProps> = args => (
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

export const WithBigImage: Story<ListItemProps> = args => (
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

export const WithSmallImage: Story<ListItemProps> = args => (
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
