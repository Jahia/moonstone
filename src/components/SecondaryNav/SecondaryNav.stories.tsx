import preview from '~/__storybook__/preview';
import {StoryFn} from '@storybook/react-vite';

import {SecondaryNav, SecondaryNavHeader} from './index';
import type {SecondaryNavProps} from './SecondaryNav.types';

import markdownNotes from './SecondaryNav.md';
import {Love} from '~/icons';

const meta = preview.meta({
    title: 'Components/SecondaryNav',
    component: SecondaryNav,
    decorators: [
        StoryCmp => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes}
    }
});

const Template: StoryFn<SecondaryNavProps> = args => (
    <SecondaryNav {...args}>My content here</SecondaryNav>
);

export const TextTitle = meta.story({
    render: Template,

    args: {
        header: 'Header here'
    }
});

export const WithHeaderImage = meta.story({
    render: Template,

    args: {
        header: <Love size="big"/>
    }
});

export const WithTextInHeaderComponent = meta.story({
    render: Template,

    args: {
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
    }
});

export const WithHeaderComponent = meta.story({
    render: Template,

    args: {
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        )
    }
});
