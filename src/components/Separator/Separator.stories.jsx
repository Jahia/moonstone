import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {optionsFromArray} from '~/__storybook__/utils';

import {Separator, SeparatorSizes, SeparatorSpacings, Typography} from '~/components';
import markdownNotes from './Separator.md';

storiesOf('Components|Separator', module)
    .addParameters({
        component: Separator,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Horizontal', () => (
        <>
            <Typography variant="heading">Content before a separator</Typography>
            <Separator
                variant="horizontal"
                size={select('Size', optionsFromArray(SeparatorSizes), 'full')}
                spacing={select('Spacing', optionsFromArray(SeparatorSpacings), 'medium')}
            />
            <Typography variant="heading">Content after a separator</Typography>
        </>
    ))
    .add('Vertical', () => (
        <div className="flexRow alignCenter">
            <Typography variant="heading">Before</Typography>

            <Separator
                variant="vertical"
                size={select('Size', optionsFromArray(SeparatorSizes), 'full')}
                spacing={select('Spacing', optionsFromArray(SeparatorSpacings), 'medium')}
            />
            <Typography variant="heading">After</Typography>
        </div>
    ));
