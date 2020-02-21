import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Badge.md';
import {Badge, badgeColors, badgeTypes, badgeSizes} from './index';

storiesOf('Components|Badge', module)
    .addParameters({
        component: Badge,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={{padding: '20px'}}>{storyFn()}</div>)
    .add('basic round', () => (
        <Badge label={text('Label', '3')}
               color={select('Color', badgeColors, 'default')}
               type={select('Type', badgeTypes, 'round')}
               size={select('Size', badgeSizes, 'default')}
        />
    ))
    .add('basic diamond', () => (
        <Badge color={select('Color', badgeColors, 'default')}
               type={select('Type', badgeTypes, 'diamond')}
               size={select('Size', badgeSizes, 'default')}
        />
    ));

