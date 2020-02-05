import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';

storiesOf('Components|ListItem', module)
    .addParameters({
        component: ListItem,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem label="test"/>
        </div>
    ))
    .add('actions', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <ListItem
                label="I'm interactive"
                onClick={action('Clicked')}
                onMouseEnter={action('Mouse entered')}
                onMouseLeave={action('Mouse leave')}
            />
        </div>
    ));
