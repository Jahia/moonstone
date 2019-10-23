import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './Button.md';
import storyStyles from '~/styles/storybook/styles.scss';

import {Button} from './index';

storiesOf('Components|Button', module)
    .addParameters({
        component: Button,
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Button onClick={() => {}}/>
        </section>
    ));
