import React from 'react';
import {LayoutContent} from '~/layouts';
import {Header} from '~/components';
import {FakeContent} from '~/__storybook__/FakeComponents';

export default {
    title: 'Layouts/LayoutContent',
    component: LayoutContent,
    parameters: {
        layout: 'fullscreen',
        knobs: {
            disable: true
        }
    },
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
        header={(
            <Header title="Header"/>
        )}
        content={(
            <FakeContent/>
        )}
        {...args}
    />
);

export const Default = Template.bind({});

export const Centered = Template.bind({});
Centered.args = {
    isCentered: true
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
