import React from 'react';
import {LayoutContent} from '~/layouts';
import {FakeHeader, FakeContent} from '~/__storybook__/FakeComponents';

export default {
    title: 'Layouts/LayoutContent',
    component: LayoutContent,
    parameters: {
        layout: 'fullscreen',
        knobs: {
            disabled: true
        }
    }
};

const Template = args => (
    <LayoutContent
        header={(
            <FakeHeader/>
        )}
        content={(
            <FakeContent/>
        )}
        {...args}
    />
);

export const Default = Template.bind({});
