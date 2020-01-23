import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {optionsFromArray} from '~/__storybook__/utils';

import {Separator, SeparatorSizes, SeparatorSpacings} from '~/components';
import markdownNotes from './Separator.md';

storiesOf('Components|Separator', module)
    .addParameters({
        component: Separator,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <>
            <div>Content before a separator</div>
            <Separator
                size={select('Size', optionsFromArray(SeparatorSizes), 'full')}
                spacing={select('Spacing', optionsFromArray(SeparatorSpacings), 'medium')}
            />
            <div>Content after a separator</div>
        </>
    ));
