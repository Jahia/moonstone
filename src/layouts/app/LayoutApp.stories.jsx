
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {LayoutApp} from './index';
import {FakePrimaryNavigation, FakeContent} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutApp.md';

storiesOf('Layouts/LayoutApp', module)
    .addParameters({
        component: LayoutApp,
        componentSubtitle: 'How to use our root application layout',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <LayoutApp
            navigation={<FakePrimaryNavigation/>}
            content={<FakeContent/>}
        />
    ))
    .add('Loading', () => (
        <LayoutApp
            isLoading
            navigation={<FakePrimaryNavigation/>}
            content={<FakeContent/>}
        />
    ));
