import React from 'react';
import {StoryFn, Meta} from '@storybook/react';

import {Tooltip} from './index';
import {Button} from '~/components';
import {Home} from '~/icons';

export default {
    title: 'Components/Floating UI/Tooltip',
    component: Tooltip,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = args => (
    <Tooltip label="Home" {...args}><Button icon={<Home/>} variant="outlined"/></Tooltip>
);

export const Default = {
    render: Template
};
