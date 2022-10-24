import React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

export default {
    title: 'Components/ListItem',
    decorators: [withKnobs],

    parameters: {
        component: ListItem,
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem label={text('Label', 'label')}/>
    </ul>
);

export const IconText = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label={text('Label', 'label')}
            iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
        />
    </ul>
);

IconText.story = {
    name: 'Icon + Text'
};

export const IconTextIcon = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label={text('Label', 'label')}
            iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
            iconEnd={<IconWrapper iconName={select('IconEnd', iconsName, 'Close')}/>}
        />
    </ul>
);

IconTextIcon.story = {
    name: 'Icon + Text + Icon'
};

export const WithBigImage = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            imageSize="big"
        />
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            imageSize="big"
        />
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            imageSize="big"
        />
    </ul>
);

export const WithSmallImage = () => (
    <ul style={{transform: 'scale(1)', height: '100vh'}}>
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/500x500?text=ListItemImage"/>}
            imageSize="small"
        />
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/200x500?text=ListItemImage"/>}
            imageSize="small"
        />
        <ListItem
            label={text('Label', 'label')}
            image={<img src="https://via.placeholder.com/500x200?text=ListItemImage"/>}
            imageSize="small"
        />
    </ul>
);
