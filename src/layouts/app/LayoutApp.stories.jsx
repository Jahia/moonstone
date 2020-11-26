
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {LayoutApp} from './index';
import markdownNotes from './LayoutApp.md';

const FakeNavigation = () => {
    return (
        <div style={{
            width: '100%',
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

storiesOf('Layouts|LayoutApp', module)
    .addParameters({
        component: LayoutApp,
        componentSubtitle: 'How to use our root application layout',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <LayoutApp
            navigation={<FakeNavigation/>}
            content={<FakeContent/>}
        />
    ));
