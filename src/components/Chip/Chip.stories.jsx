import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip, colors} from './index';
import DefaultIcon from '~/tokens/icons/asset/Apps.svg';

storiesOf('Components|Chip', module)
    .addParameters({
        component: Chip,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <div style={{padding: '20px'}}>{storyFn()}</div>)
    .add('Chip', () => (
        <Chip label={text('Label', 'Chip')} icon={<DefaultIcon size="small"/>} color={select('Color', colors, 'default')}/>
    ));
