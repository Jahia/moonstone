import React from 'react';
import {storiesOf} from '@storybook/react';
import {ImgWrapper, ImgWrapperSize} from './ImgWrapper';
import markdownNotes from './ImgWrapper.md';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.scss';

const sizeValues = () => select('Size', ImgWrapperSize, 'default');
const urlValue = () => text('URL to an image', 'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico');

storiesOf('ImgWrapper', module)
    .addParameters({
        component: ImgWrapper,
        componentSubtitle: 'Image wrapper',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => (
        <section className={storyStyles.storyWrapper}>
            <section className={storyStyles.storyColumn}>
                {storyFn()}
            </section>
        </section>
    ))
    .add('Playground', () => (
        <ImgWrapper src={urlValue()} size={sizeValues()}/>
    ));
