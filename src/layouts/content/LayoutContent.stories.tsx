import React from 'react';
import preview from '~storybook/preview';
import {LayoutContent} from '~/layouts';
import {Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';
import type {LayoutContentProps} from './LayoutContent.types';

type LayoutContentStoryArgs = Partial<LayoutContentProps>;

const meta = preview.meta({
    title: 'Layouts/LayoutContent',
    component: LayoutContent as React.FC<LayoutContentStoryArgs>,
    decorators: [
        StoryCmp => (
            <div style={{width: '100vw', height: '100vh', display: 'flex'}}>
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

const Template = (args: LayoutContentStoryArgs) => (
    <LayoutContent
        header={<Header title="Header"/>}
        content={<FakeContent/>}
        {...args as LayoutContentProps}
    />
);

export const Default = meta.story({
    render: Template
});

export const Centered = meta.story({
    args: {
        isCentered: true
    },
    render: Template
});

export const WithoutPadding = meta.story({
    args: {
        hasPadding: false
    },
    render: Template
});

export const Loading = meta.story({
    args: {
        isLoading: true
    },
    render: Template
});
