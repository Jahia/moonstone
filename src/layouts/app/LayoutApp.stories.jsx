
import React from 'react';
import {LayoutApp} from './index';
import {FakePrimaryNavigation, FakeContent} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutApp.md';

export default {
    title: 'Layouts/LayoutApp',
    component: LayoutApp,
    parameters: {
        layout: 'fullscreen',
        subtitle: 'How to use our root application layout',
        notes: {markdown: markdownNotes},
        knobs: {
            disable: true
        }
    },
    argTypes: {
        navigation: {
            control: false
        },
        content: {
            control: false
        }
    }
};

const Template = args => (
    <LayoutApp
        navigation={<FakePrimaryNavigation/>}
        content={<FakeContent/>}
        {...args}
    />
);

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
