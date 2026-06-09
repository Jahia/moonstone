import {Meta, StoryObj} from '@storybook/react-vite';
import {LayoutContent} from '~/layouts';
import {Drawer, Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';
import type {LayoutContentProps} from './LayoutContent.types';
import styles from './LayoutContent.module.scss';

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
        }
    }
} as Meta<typeof LayoutContent>;

type Story = StoryObj<typeof LayoutContent>;

const Template = (args: LayoutContentProps) => (
    <LayoutContent header={<Header title="Header"/>} {...args}>
        <FakeContent/>
    </LayoutContent>
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

export const WithDrawer: Story = {
    render: args => (
        <LayoutContent
            header={<Header title="Header"/>}
            {...args}
            drawer={<Drawer isOpen className={styles['moonstone-layoutContent_storyDrawer']}>Drawer content</Drawer>}
        >
            <FakeContent/>
        </LayoutContent>
    )
};

export const Loading: Story = {
    render: Template,

    args: {
        isLoading: true
    }
};
