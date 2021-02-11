import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';

import markdownNotes from './Badge.md';
import {Badge} from './index';
import {badgeColors} from './Badge.types';

storiesOf('Components/Badge', module)
    .addParameters({
        component: Badge,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Accent', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge
                label={text('Label', '3')}
                color="accent"
            />
        </section>

    ))
    .add('Success', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge
                label={text('Label', '3')}
                color="success"
            />
        </section>

    ))
    .add('Danger', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge
                label={text('Label', '3')}
                color="danger"
            />
        </section>

    ))
    .add('Playground', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge
                label={text('Label', '3')}
                color={select('Color', badgeColors, 'accent')}
            />
        </section>
    ));
