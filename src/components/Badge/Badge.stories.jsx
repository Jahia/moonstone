import React from 'react';
import {storiesOf} from '@storybook/react';
import {number, select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Badge.md';
import {Badge, colors} from './index';
import DefaultIcon from '~/tokens/icons/asset/Apps.svg';

storiesOf('Components|Badge', module)
    .addParameters({
        component: Badge,
        componentSubtitle: 'Badge',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={{padding: '20px'}}>{storyFn()}</div>)
    .add('text only', () => (
        <Badge label={number('Label', 13)} color={select('Color', colors, 'default')}/>
    ))
    .add('text and icon', () => (
        <Badge label={text('Label', 'Badge')} icon={<DefaultIcon/>} color={select('Color', colors, 'default')}/>
    ));
