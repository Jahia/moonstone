
import React from 'react';
import {LayoutModule} from './index';
import {FakeSecondaryNavigation, FakeContent} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutModule.md';

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
};

const Template = args => (
    <div style={{
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

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
