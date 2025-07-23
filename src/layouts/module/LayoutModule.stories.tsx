import {Meta, StoryObj} from '@storybook/react-vite';
import {LayoutModule} from './index';
import {
    FakeSecondaryNavigation,
    FakeContent
} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutModule.md';
import type {LayoutModuleProps} from './LayoutModule.types';

export default {
    title: 'Layouts/LayoutModule',
    component: LayoutModule,
    parameters: {
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
} as Meta<typeof LayoutModule>;

type Story = StoryObj<typeof LayoutModule>

const Template = (args: LayoutModuleProps) => (
    <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex'
    }}
    >
        <LayoutModule
      navigation={<FakeSecondaryNavigation/>}
      content={<FakeContent/>}
      {...args}
    />
    </div>
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
