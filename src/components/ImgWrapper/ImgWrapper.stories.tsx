import React from 'react';
import {StoryFn} from '@storybook/react';

import {ImgWrapper} from './index';
import {ImgWrapperProps} from './ImgWrapper.types';

import markdownNotes from './ImgWrapper.md';

export default {
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    parameters: {
        componentSubtitle: 'Image wrapper',
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default = {
    args: {
        src: 'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico',
        alt: 'imgWrapper',
        size: 'default'
    }
};
