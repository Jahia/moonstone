import React from 'react';
import {ImgWrapper} from './ImgWrapper';
import {imgWrapperSizes} from './ImgWrapper.types';
import markdownNotes from './ImgWrapper.md';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

const sizeValues = () => select('Size', imgWrapperSizes, 'default');
const urlValue = () =>
    text(
        'URL to an image',
        'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico'
    );

export default {
    title: 'Utilities/ImgWrapper',

    decorators: [
        withKnobs,
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
    <ImgWrapper src={urlValue()} size={sizeValues()}/>
);
