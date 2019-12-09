import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';

import {Separator, sizes, spacings} from './index';
import markdownNotes from './Separator.md';

function capitalize(string) {
    return string.replace(/^\w/, c => c.toUpperCase());
}

function listOptions(array) {
    let list = {};

    array.forEach(option => {
        list[capitalize(option)] = option;
    });

    return list;
}

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
                size={select('Size', listOptions(sizes), 'full')}
                spacing={select('Spacing', listOptions(spacings), 'medium')}
            />
            <div>Content after a separator</div>
        </>
    ));
