import preview from '../../../.storybook/preview';
import {LayoutContent} from '~/layouts';
import {Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';
import type {LayoutContentProps} from './LayoutContent.types';

const meta = preview.meta({
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
});

export const Default = meta.story({
    args: {},
    render: (args: LayoutContentProps) => (
        <LayoutContent
            header={<Header title="Header"/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});

export const Centered = meta.story({
    args: {
        isCentered: true
    },
    render: (args: LayoutContentProps) => (
        <LayoutContent
            header={<Header title="Header"/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});

export const WithoutPadding = meta.story({
    args: {
        hasPadding: false
    },
    render: (args: LayoutContentProps) => (
        <LayoutContent
            header={<Header title="Header"/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});

export const Loading = meta.story({
    args: {
        isLoading: true
    },
    render: (args: LayoutContentProps) => (
        <LayoutContent
            header={<Header title="Header"/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});
