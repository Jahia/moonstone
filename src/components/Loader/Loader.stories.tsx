import React from 'react';
import {Story} from '@storybook/react'
import {Loader as LoaderCmp} from './index';
import {LoaderProps} from './Loader.types';

export default {
    title: 'Components/Loader',
    component: LoaderCmp,
    parameters: {
        knobs: {
            disable: true
        }
    },
};

const Template: Story<LoaderProps> = args => <LoaderCmp {...args}/>;

export const Loader = Template.bind({});
Loader.args = {
    size: 'small'
};
