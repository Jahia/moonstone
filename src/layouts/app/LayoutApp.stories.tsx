import { LayoutApp } from './index';
import markdownNotes from './LayoutApp.md';
import {
    FakeContent,
    FakePrimaryNavigation,
} from '~/__storybook__/FakeComponents';

import type { LayoutAppProps } from './LayoutApp.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Layouts/LayoutApp',
    component: LayoutApp,
    parameters: {
        subtitle: 'How to use our root application layout',
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        navigation: {
            control: false,
        },
        content: {
            control: false,
        },
    },
} as Meta<typeof LayoutApp>;

type Story = StoryObj<typeof LayoutApp>;

const Template = (args: LayoutAppProps) => (
    <LayoutApp
        content={<FakeContent/>}
        navigation={<FakePrimaryNavigation/>}
        {...args}
    />
);
export const Default: Story = {
    render: Template,
};

export const Loading: Story = {
    render: Template,
    args: {
        isLoading: true,
    },
};
