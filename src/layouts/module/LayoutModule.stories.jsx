
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {LayoutModule} from './index';
import markdownNotes from './LayoutModule.md';

const FakeNavigation = () => {
    return (
        <div style={{
            width: '245px',
            height: '100vh',
            border: '5px solid gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >Nav
        </div>
    );
};

const FakeContent = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            border: '5px solid lightgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
