import React from 'react';
// Import {withKnobs, select, text} from '@storybook/addon-knobs';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
// Import IconWrapper from '~/__storybook__/IconWrapper';
// import {iconsName} from '~/__storybook__/utils';
import {Love, Close} from '~/icons';

export default {
    title: 'Components/ListItem',
    component: ListItem,
    // Decorators: [withKnobs],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem label="label"/>
    </ul>
);

export const IconText = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label="label"
            iconStart={<Love/>}
        />
    </ul>
);

IconText.story = {
    name: 'Icon + Text'
};

export const IconTextIcon = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label="label"
            iconStart={<Love/>}
            iconEnd={<Close/>}
        />
    </ul>
);

IconTextIcon.story = {
    name: 'Icon + Text + Icon'
};

export const WithBigImage = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            imageSize="big"
        />
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            imageSize="big"
        />
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            imageSize="big"
        />
    </ul>
);

export const WithSmallImage = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            imageSize="small"
        />
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            imageSize="small"
        />
        <ListItem
            label="label"
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            imageSize="small"
        />
    </ul>
);
