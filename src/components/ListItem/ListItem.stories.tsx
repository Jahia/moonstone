import React from 'react';
import {StoryObj, StoryFn} from '@storybook/react';
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

export const Default: StoryObj<ListItemProps> = {
    render: args => (
        <ul>
            <ListItem {...args}/>
        </ul>
    ),

    args: {
        label: 'ListItem label'
    }
};

export const IconText: StoryObj<ListItemProps> = {
    render: args => (
        <ul>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text',

    args: {
        label: 'ListItem',
        iconStart: <Love/>
    }
};

export const IconTextIcon: StoryObj<ListItemProps> = {
    render: args => (
        <ul>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text + Icon',

    args: {
        label: 'ListItem',
        iconStart: <Love/>,
        iconEnd: <Cloud/>
    }
};

export const WithBigImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul>
            <ListItem
        image={<img src="https://via.placeholder.com/500?text=ListItemImage"/>}
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
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'big'
    }
};

export const WithSmallImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul>
            <ListItem
        image={<img src="https://via.placeholder.com/500?text=ListItemImage"/>}
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
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'small'
    }
};
