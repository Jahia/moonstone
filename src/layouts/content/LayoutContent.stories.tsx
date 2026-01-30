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

export const Centered = Default.extend({
    args: {
        isCentered: true
    }
});

export const WithoutPadding = Default.extend({
    args: {
        hasPadding: false
    }
});

export const Loading = Default.extend({
    args: {
        isLoading: true
    }
});
