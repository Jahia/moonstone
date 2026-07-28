import preview from '~/__storybook__/preview';
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
        }
    }
});

const Template = (args: LayoutContentProps) => (
    <LayoutContent header={<Header title="Header"/>} {...args}>
        <FakeContent/>
    </LayoutContent>
);

export const Default = meta.story({
    render: Template
});

export const Centered = meta.story({
    render: Template,

    args: {
        isCentered: true
    }
});

export const WithoutPadding = meta.story({
    render: Template,

    args: {
        hasPadding: false
    }
});

export const Loading = meta.story({
    render: Template,

    args: {
        isLoading: true
    }
});
