import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {optionsFromArray} from '~/__storybook__/utils';

import {Separator, sizes, spacings} from './index';
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
                size={select('Size', optionsFromArray(sizes), 'full')}
                spacing={select('Spacing', optionsFromArray(spacings), 'medium')}
            />
            <div>Content after a separator</div>
        </>
    ));
