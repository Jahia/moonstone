
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';

import {LayoutModule} from './index';
import {FakeSecondaryNavigation, FakeContent} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutModule.md';

const isLoading = () => boolean('isLoading', false);
const isCentered = () => boolean('isCentered', false);
const hasPadding = () => boolean('hasPadding', false);

storiesOf('Layouts/LayoutModule', module)
    .addParameters({
        component: LayoutModule,
        componentSubtitle: 'How to use our layout for modules',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                navigation={<FakeSecondaryNavigation/>}
                content={<FakeContent/>}
            />
        </div>
    ))
    .add('Loading', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                isLoading
                navigation={<FakeSecondaryNavigation/>}
                content={<FakeContent/>}
            />
        </div>
    ))
    .add('Playground', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                isCentered={isCentered()}
                hasPadding={hasPadding()}
                isLoading={isLoading()}
                component={text('HTML element', 'main')}
                navigation={<FakeSecondaryNavigation/>}
                content={<FakeContent/>}
            />
        </div>
    ));
