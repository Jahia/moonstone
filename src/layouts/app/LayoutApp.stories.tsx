import {Meta, StoryObj} from '@storybook/react';
import {LayoutApp} from './index';
import type {LayoutAppProps} from './LayoutApp.types';
import {
    FakePrimaryNavigation,
    FakeContent
} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutApp.md';

export default {
    title: 'Layouts/LayoutApp',
    component: LayoutApp,
    parameters: {
        subtitle: 'How to use our root application layout',
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        navigation: {
            control: false
        },
        content: {
            control: false
        }
    }
} as Meta<typeof LayoutApp>;

type Story = StoryObj<typeof LayoutApp>

const Template = (args: LayoutAppProps) => (
    <LayoutApp
    navigation={<FakePrimaryNavigation/>}
    content={<FakeContent/>}
    {...args}
  />
);
export const Default: Story = {
    render: Template
};

export const Loading: Story = {
    render: Template,
    args: {
        isLoading: true
    }
};
