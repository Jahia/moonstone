import { SecondaryNav, SecondaryNavHeader } from './index';
import markdownNotes from './SecondaryNav.md?raw';
import { Love } from '~/icons';

import type { SecondaryNavProps } from './SecondaryNav.types';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/SecondaryNav',
    component: SecondaryNav,
    subcomponents: { SecondaryNavHeader },
    tags: ['dark-theme'],
    decorators: [
        StoryCmp => (
            <div
                style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
            >
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: 'The second-level navigation of an application section.',
        docs: { description: { component: markdownNotes } },
    },
    args: { children: 'My content here' },
} as Meta<typeof SecondaryNav>;

const Template: StoryFn<SecondaryNavProps> = args => (
    <SecondaryNav {...args}/>
);

export const TextTitle = {
    render: Template,

    args: {
        header: 'Header here',
    },
};

export const WithHeaderImage = {
    render: Template,

    args: {
        header: <Love size="big"/>,
    },
};

export const WithTextInHeaderComponent = {
    render: Template,

    args: {
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>,
    },
};

export const WithHeaderComponent = {
    render: Template,

    args: {
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        ),
    },
};

export const States: StoryObj<typeof SecondaryNav> = {
    render: args => (
        <>
            <SecondaryNav {...args} header="Rest"/>
            <SecondaryNav {...args} header="Hover" id="hover"/>
            <SecondaryNav {...args} header="Focus" id="focus-visible"/>
        </>
    ),

    parameters: {
        pseudo: {
            // The id goes to the nav, and the hover and focus styles are on its toggle button
            hover: '#hover button[aria-expanded]',
            focusVisible: '#focus-visible button[aria-expanded]',
        },
    },
};
