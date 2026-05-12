import {StoryObj, Meta} from '@storybook/react-vite';

import {SecondaryNav, SecondaryNavHeader} from './index';
import type {SecondaryNavProps} from './SecondaryNav.types';

import markdownNotes from './SecondaryNav.md';
import {Love} from '~/icons';

const meta: Meta<typeof SecondaryNav> = {
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
        docs: {description: {component: markdownNotes}}
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: SecondaryNavProps) => (
    <SecondaryNav {...args}>My content here</SecondaryNav>
);

export const TextTitle: Story = {
    render: Template,

    args: {
        header: 'Header here'
    }
};

export const WithHeaderImage: Story = {
    render: Template,

    args: {
        header: <Love size="big"/>
    }
};

export const WithTextInHeaderComponent: Story = {
    render: Template,

    args: {
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
    }
};

export const WithHeaderComponent: Story = {
    render: Template,

    args: {
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        )
    }
};

