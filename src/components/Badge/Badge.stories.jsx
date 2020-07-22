import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.scss';

import markdownNotes from './Badge.md';
import {Badge, BadgeColor, BadgeType} from './index';

storiesOf('Components|Badge', module)
    .addParameters({
        component: Badge,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Round', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge label={text('Label', '3')}
                   color={select('Color', BadgeColor, BadgeColor.accent)}
            />
        </section>

    ))
    .add('Diamond', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge color={select('Color', BadgeColor, BadgeColor.accent)}
                   type="diamond"
            />
        </section>
    ))
    .add('Playground', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge label={text('Label', '3')}
                   color={select('Color', BadgeColor, BadgeColor.accent)}
                   type={select('Type', BadgeType, BadgeType.round)}
            />
        </section>
    ));

