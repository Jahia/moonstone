import {StoryFn, Meta} from '@storybook/react-vite';

import {SecondaryNav, SecondaryNavHeader} from './index';
import type {SecondaryNavProps} from './SecondaryNav.types';

import markdownNotes from './SecondaryNav.md';
import {Love} from '~/icons';

export default {
    title: 'Components/SecondaryNav',
    component: SecondaryNav,
    decorators: [
        StoryCmp => (
            <div
        style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
            >
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes}
    }
} as Meta<typeof SecondaryNav>;

const Template: StoryFn<SecondaryNavProps> = args => (
    <SecondaryNav {...args}>My content here</SecondaryNav>
);

export const TextTitle = {
    render: Template,

    args: {
        header: 'Header here'
    }
};

export const WithHeaderImage = {
    render: Template,

    args: {
        header: <Love size="big"/>
    }
};

export const WithTextInHeaderComponent = {
    render: Template,

    args: {
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
    }
};

export const WithHeaderComponent = {
    render: Template,

    args: {
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        )
    }
};
