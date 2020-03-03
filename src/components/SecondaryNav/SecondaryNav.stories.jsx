import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './SecondaryNav.md';

import {SecondaryNav, SecondaryNavHeader} from './index';
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
        <SecondaryNav
            header={<Love size="big"/>}
        >
            My content here
        </SecondaryNav>
    ))
    .add('with header component', () => (
        <SecondaryNav
            header={<SecondaryNavHeader><Love size="big"/></SecondaryNavHeader>}
        >
            My content here
        </SecondaryNav>
    ))
    .add('with text in header component', () => (
        <SecondaryNav
            header={<SecondaryNavHeader>Secondary Header</SecondaryNavHeader>}
        >
            My content here
        </SecondaryNav>
    ));

