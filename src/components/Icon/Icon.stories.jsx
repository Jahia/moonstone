import React from 'react';
import {Icon} from './index';
import {storiesOf} from '@storybook/react';
import markdownNotes from './Icon.md';

storiesOf('Icons', module)
    .addParameters({
        component: Icon,
        componentSubtitle: 'Displays icon',
        notes: {markdown: markdownNotes}
    })
    .add('default', () => (
        <div style={{display: 'flex'}}>
            <div style={{margin: '0 auto'}}>
                <Icon name="musique"/>
                <Icon name="karaoke" size="big"/>
                <Icon name="drink"/>
            </div>
        </div>
    ));
