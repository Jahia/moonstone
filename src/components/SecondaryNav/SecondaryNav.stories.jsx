import React from 'react';
import {text, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './SecondaryNav.md';

import {SecondaryNav, SecondaryNavHeader} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/SecondaryNav',
    decorators: [withKnobs],

    parameters: {
        component: SecondaryNav,
        componentSubtitle: 'SecondaryNav',
        notes: {markdown: markdownNotes}
    }
};

export const WithTitle = () => (
    <SecondaryNav header={text('Title', 'my header')}>
        My content here
    </SecondaryNav>
);

WithTitle.story = {
    name: 'with title'
};

export const WithHeaderImages = () => (
    <SecondaryNav header={<Love size="big"/>}>My content here</SecondaryNav>
);

WithHeaderImages.story = {
    name: 'with header images'
};

export const WithHeaderComponent = () => (
    <SecondaryNav
        header={
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        }
    >
        My content here
    </SecondaryNav>
);

WithHeaderComponent.story = {
    name: 'with header component'
};

export const WithTextInHeaderComponent = () => (
    <SecondaryNav
        header={<SecondaryNavHeader>Secondary Header</SecondaryNavHeader>}
    >
        My content here
    </SecondaryNav>
);

WithTextInHeaderComponent.story = {
    name: 'with text in header component'
};
