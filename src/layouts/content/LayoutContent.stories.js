import React from 'react';
import {LayoutContent} from '~/layouts';
import {Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';

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
};

const Template = args => (
    <LayoutContent
    header={<Header title="Header"/>}
    content={<FakeContent/>}
    {...args}
  />
);

export const Default = {
    render: Template
};

export const Centered = {
    render: Template,

    args: {
        isCentered: true
    }
};

export const WithoutPadding = {
    render: Template,

    args: {
        hasPadding: false
    }
};

export const Loading = {
    render: Template,

    args: {
        isLoading: true
    }
};
