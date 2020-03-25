import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

storiesOf('Components|ListItem', module)
    .addParameters({
        component: ListItem,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem label={text('Label', 'label')}/>
        </div>
    ))
    .add('Icon + text', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem
                label={text('Label', 'label')}
                iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
            />
        </div>
    ))
    .add('Icon + text + icon', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem
                label={text('Label', 'label')}
                iconStart={<IconWrapper iconName={select('IconStart', iconsName, 'Love')}/>}
                iconEnd={<IconWrapper iconName={select('IconEnd', iconsName, 'Close')}/>}
            />
        </div>
    ));
