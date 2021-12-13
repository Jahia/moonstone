import React from 'react';
import {storiesOf} from '@storybook/react';
import {SvgWrapper} from './index';
import {svgWrapperSizes} from './SvgWrapper.types';
import markdownNotes from './SvgWrapper.md';
import {select, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

const sizeValues = () => select('Size', svgWrapperSizes, 'default');
const svg = <svg viewBox="0 0 24 24" fill="none"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" fill="currentColor"/></svg>;

storiesOf('Utilities/SvgWrapper', module)
    .addParameters({
        component: SvgWrapper,
        componentSubtitle: 'Svg wrapper',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => (
        <section className="storyWrapper">
            <section className="storyColumn">
                {storyFn()}
            </section>
        </section>
    ))
    .add('Playground', () => (
        <SvgWrapper svg={svg} size={sizeValues()}/>
    ));
