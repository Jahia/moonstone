import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Badge.md';
import {Badge, colors, types, sizes} from './index';

storiesOf('Components|Badge', module)
    .addParameters({
        component: Badge,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={{padding: '20px'}}>{storyFn()}</div>)
    .add('basic round', () => (
        <Badge label={text('Label', '3')}
               color={select('Color', colors, 'default')}
               type={select('Type', types, 'round')}
               size={select('Size', sizes, 'default')}
        />
    ))
    .add('basic diamond', () => (
        <Badge color={select('Color', colors, 'default')}
               type={select('Type', types, 'diamond')}
               size={select('Size', sizes, 'default')}
        />
    ));

