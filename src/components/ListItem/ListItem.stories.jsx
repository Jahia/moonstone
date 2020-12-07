import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

storiesOf('Components/ListItem', module)
    .addParameters({
        component: ListItem,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ul style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem label={text('Label', 'label')}/>
        </ul>
    ))
    .add('Icon + Text', () => (
        <ul style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem
                label={text('Label', 'label')}
                iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
            />
        </ul>
    ))
    .add('Icon + Text + Icon', () => (
        <ul style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem
                label={text('Label', 'label')}
                iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
                iconEnd={<IconWrapper iconName={select('IconEnd', iconsName, 'Close')}/>}
            />
        </ul>
    ))
    .add('With Big Image', () => (
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
    ))
    .add('With Small Image', () => (
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
    ));
