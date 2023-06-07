import React from 'react';
import {ImgWrapper} from './ImgWrapper';
import markdownNotes from './ImgWrapper.md';
import '~/__storybook__/storybook.scss';

export default {
    title: 'Utilities/ImgWrapper',

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
};

export const Playground = () => (
    <ImgWrapper
        src="https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico"
        size="default"
    />
);
