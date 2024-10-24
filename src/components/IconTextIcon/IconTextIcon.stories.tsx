import React from 'react';
import {StoryFn} from '@storybook/react';

import {IconTextIcon} from './index';
import {IconTextIconProps} from './IconTextIcon.types';
import {Apps, Love} from '~/icons';

export default {
    title: 'Components/IconTextIcon',
    component: IconTextIcon,
    parameters: {
        layout: 'centered'
    }
};

export const Default = {
    name: 'Icon + Text + Icon',

    args: {
        iconStart: <Love/>,
        iconEnd: <Apps/>,
        children: 'This is text sandwiched by icons'
    }
};
