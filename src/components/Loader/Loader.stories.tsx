import React from 'react';
import {Story} from '@storybook/react'
import {Loader} from './index';
import {LoaderProps} from './Loader.types';

export default {
    title: 'Components/Loading',
    component: Loader
};

const Template: Story<LoaderProps> = args => <Loader {...args}/>;

export const Loading = Template.bind({});
Loading.args = {
    size: 'small'
};
