import {Meta, StoryObj} from '@storybook/react-vite';
import {LayoutContent} from '~/layouts';
import {Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';
import type {LayoutContentProps} from './LayoutContent.types';

export default {
    title: 'Layouts/LayoutContent',
    component: LayoutContent,
    decorators: [
        StoryCmp => (
            <div style={{width: '1OOvw', height: '100vh', display: 'flex'}}>
                <StoryCmp/>
            </div>
        )
    ],
    argTypes: {
        header: {
            control: false
        },
        content: {
            control: false
        }
    }
} as Meta<typeof LayoutContent>;

type Story = StoryObj<typeof LayoutContent>;

const Template = (args: LayoutContentProps) => (
    <LayoutContent
    header={<Header title="Header"/>}
    content={<FakeContent/>}
    {...args}
  />
);

export const Default: Story = {
    render: Template
};

export const Centered: Story = {
    render: Template,

    args: {
        isCentered: true
    }
};

export const WithoutPadding: Story = {
    render: Template,

    args: {
        hasPadding: false
    }
};

export const Loading: Story = {
    render: Template,

    args: {
        isLoading: true
    }
};
