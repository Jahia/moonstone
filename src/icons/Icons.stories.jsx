import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '@/styles/storybook/styles.scss';

import markdownNotes from './Icons.md';
import {Karaoke, Drink, Musique, Zip} from './index';

storiesOf('Tokens|Icons', module)
    .addDecorator(withKnobs)
    .addParameters({
        component: Karaoke,
        componentSubtitle: 'Displays icon',
        notes: {markdown: markdownNotes}
    })
    .add('Default', () => {
        const size = select('size', ['small', 'default', 'big'], 'default');
        return (
            <section className={classnames(storyStyles.storyWrapper)}>
                <div className={classnames(storyStyles.storyItem)}>
                    <Karaoke size={size}/>
                </div>
                <div className={classnames(storyStyles.storyItem)}>
                    <Drink size={size}/>
                </div>
                <div className={classnames(storyStyles.storyItem)}>
                    <Musique size={size}/>
                </div>
                <div className={classnames(storyStyles.storyItem)}>
                    <Zip size={size}/>
                </div>
            </section>
        );
    });
