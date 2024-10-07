import React from 'react';
import {Story} from '@storybook/react';

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

const Template: Story<ImgWrapperProps> = args => <ImgWrapper {...args}/>;

export const Default = Template.bind({});
Default.args = {
    src: 'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico',
    alt: 'imgWrapper',
    size: 'default'
};
