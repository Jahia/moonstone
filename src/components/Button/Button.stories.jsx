import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/styles/storybook/styles.scss';
import Power from '~/icons/asset/Power.svg';

import markdownNotes from './Button.md';
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
            <Button label="Button" onClick={() => {}}/>
            <Button label="Icon + Button" icon={<Power/>} onClick={() => {}}/>
            <Button label="Ghost" icon={<Power/>} variant="ghost" onClick={() => {}}/>
            <div className={classnames(storyStyles.storyWrapper, storyStyles.dark)}>
                <Button label="Reverse" icon={<Power/>} color="reverse" variant={select('Style', ['default', 'primary', 'ghost'])} onClick={() => {}}/>
            </div>
        </section>
    ));
