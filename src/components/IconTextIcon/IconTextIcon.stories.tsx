import React from 'react';
import {Story} from '@storybook/react';

import {IconTextIcon} from './index';
import {IconTextIconProps} from './IconTextIcon.types';
import {Apps, Love} from '~/icons';

export default {
    title: 'Components/IconTextIcon',
    component: IconTextIcon,
    parameters: {
        layout: 'centered',
        storysource: {disable: true}
    }
};

const Template: Story<IconTextIconProps> = args => <IconTextIcon {...args}/>;

export const Default = Template.bind({});
Default.storyName = 'Icon + Text + Icon';
Default.args = {
    iconStart: <Love/>,
    iconEnd: <Apps/>,
    children: 'This is text sandwiched by icons'
};
