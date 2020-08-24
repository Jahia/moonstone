import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
// Import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';

import markdownNotes from './Input.md';
import {Input} from './index';

storiesOf('Components|Input' +
    '', module)
    .addParameters({
        component: Input,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Basic', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Input/>
        </section>

    ));
