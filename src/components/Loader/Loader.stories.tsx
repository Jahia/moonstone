import React from 'react';
import {StoryFn} from '@storybook/react';
import {Loader as LoaderCmp} from './index';
import {LoaderProps} from './Loader.types';

export default {
    title: 'Components/Loader',
    component: LoaderCmp,
    parameters: {
        layout: 'centered'
    }
};

export const Loader = {
    args: {
        size: 'small'
    }
};
