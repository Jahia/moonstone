import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './SecondaryNav.md';

import {SecondaryNav} from './index';
import Love from '~/tokens/icons/asset/Love.svg';

storiesOf('Components|SecondaryNav', module)
    .addParameters({
        component: SecondaryNav,
        componentSubtitle: 'SecondaryNav',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('with title', () => (
        <SecondaryNav
            header={text('Title', 'my header')}
        >
            My content here
        </SecondaryNav>
    ))
    .add('with header images', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <SecondaryNav
                header={<Love/>}
            >
                My content here
            </SecondaryNav>
        </div>
    ));

