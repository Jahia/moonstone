import React from 'react';
import markdownNotes from './SecondaryNav.md';

import {SecondaryNav, SecondaryNavHeader} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/SecondaryNav',
    component: SecondaryNav,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const WithTitle = () => (
    <SecondaryNav header="Header here">
        My content here
    </SecondaryNav>
);

export const WithHeaderImages = () => (
    <SecondaryNav header={<Love size="big"/>}>My content here</SecondaryNav>
);

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

export const WithTextInHeaderComponent = () => (
    <SecondaryNav
        header={<SecondaryNavHeader>Secondary Header</SecondaryNavHeader>}
    >
        My content here
    </SecondaryNav>
);
