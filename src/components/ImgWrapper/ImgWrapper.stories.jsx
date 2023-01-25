import React from 'react';
import {ImgWrapper} from './ImgWrapper';
import {imgWrapperSizes} from './ImgWrapper.types';
import markdownNotes from './ImgWrapper.md';
// Import {select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

// Const sizeValues = () => select('Size', imgWrapperSizes, 'default');
// const urlValue = () =>
//     text(
//         'URL to an image',
//         'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico'
//     );

export default {
    title: 'Utilities/ImgWrapper',

    decorators: [
        // WithKnobs,
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
    <ImgWrapper src="https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico" size="default"/>
);
