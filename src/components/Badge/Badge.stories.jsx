import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';

import {optionsFromArray} from '~/__storybook__/utils';
import storyStyles from '~/__storybook__/storybook.scss';

import markdownNotes from './Badge.md';
import {Badge, badgeColors, badgeTypes} from './index';

storiesOf('Components|Badge', module)
    .addParameters({
        component: Badge,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Round', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge label={text('Label', '3')}
                   color={select('Color', optionsFromArray(badgeColors), 'accent')}
            />
        </section>

    ))
    .add('Diamond', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge color={select('Color', optionsFromArray(badgeColors), 'accent')}
                   type="diamond"
            />
        </section>
    ))
    .add('Playground', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Badge label={text('Label', '3')}
                   color={select('Color', optionsFromArray(badgeColors), 'accent')}
                   type={select('Type', optionsFromArray(badgeTypes), 'round')}
            />
        </section>
    ));

