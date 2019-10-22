
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {LayoutModule} from './index.js';
import markdownNotes from './LayoutModule.md';

const FakeNavigation = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            border: '5px solid gray',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center'
        }}
        >Nav
        </div>
    );
};

const FakeContent = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            border: '5px solid lightgray',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center'
        }}
        >Content
        </div>
    );
};

storiesOf('Layouts|LayoutModule', module)
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
                navigation={<FakeNavigation/>}
                content={<FakeContent/>}
            />
        </div>
    ));
