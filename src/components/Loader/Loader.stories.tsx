import React from 'react';
import {Story} from '@storybook/react'
import {Loader as LoaderCmp} from './index';
import {LoaderProps} from './Loader.types';

export default {
    title: 'Components/Loader',
    component: LoaderCmp
};

const Template: Story<LoaderProps> = args => <LoaderCmp {...args}/>;

export const Loader = Template.bind({});
Loader.args = {
    size: 'small'
};
