import { LayoutModule } from './index';
import markdownNotes from './LayoutModule.md';
import {
    FakeContent,
    FakeSecondaryNavigation,
} from '~/__storybook__/FakeComponents';

import type { LayoutModuleProps } from './LayoutModule.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Layouts/LayoutModule',
    component: LayoutModule,
    parameters: {
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
} as Meta<typeof LayoutModule>;

type Story = StoryObj<typeof LayoutModule>;

const Template = (args: LayoutModuleProps) => (
    <div
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
        }}
    >
        <LayoutModule
            content={<FakeContent/>}
            navigation={<FakeSecondaryNavigation/>}
            {...args}
        />
    </div>
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
