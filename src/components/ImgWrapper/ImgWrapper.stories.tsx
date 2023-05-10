import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';

import {ImgWrapper} from './ImgWrapper';
import markdownNotes from './ImgWrapper.md';
import '~/__storybook__/storybook.scss';

export default {
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    decorators: [
        storyFn => (
            <section className="storyWrapper">
                <section className="storyColumn">{storyFn()}</section>
            </section>
        )
    ],

    parameters: {
        component: ImgWrapper,
        componentSubtitle: 'Image wrapper',
        notes: {markdown: markdownNotes}
    }
} as ComponentMeta<typeof ImgWrapper>;

export const Playground: ComponentStory<typeof ImgWrapper> = args => (
    <ImgWrapper {...args} src="https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico"/>
);
