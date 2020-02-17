import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip, colors} from './index';
import DefaultIcon from '~/tokens/icons/asset/Apps.svg';

const labelValue = () => text('Label', 'Chip');
const colorValues = () => select('Color', colors, 'default');

storiesOf('Components|Chip', module)
    .addParameters({
        component: Chip,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={{padding: '20px'}}>{storyFn()}</div>)
    .add('icon + text', () => (
        <Chip label={labelValue()}
              icon={<DefaultIcon size="small"/>}
              color={colorValues()}
        />
    ))
    .add('text only', () => (
        <Chip label={labelValue()}
              color={colorValues()}
        />
    ))
    .add('icon only', () => (
        <Chip icon={<DefaultIcon size="small"/>}
              color={colorValues()}
        />
    ));
