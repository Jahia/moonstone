import React from 'react';
// Import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import markdownNotes from './ButtonGroup.md';
import {Button} from '~/components/Button';
// Import {
//     buttonColors,
//     buttonSizes,
//     buttonVariants
// } from '~/components/Button/Button.types';
import {ChevronDown} from '~/icons';
import {ButtonGroup} from './index';

// Const colorValues = () => select('Color', buttonColors, 'default');
// const sizeValues = () => select('Size', buttonSizes, 'default');
// const variantValues = () => select('Variant', buttonVariants, 'default');
// const isReversed = () => boolean('Is reversed', false);

export default {
    title: 'Components/ButtonGroup',
    component: Button,
    // Decorators: [withKnobs],

    parameters: {
        componentSubtitle: 'ButtonGroup',
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <section className="storyWrapper">
        <ButtonGroup
            variant="default"
            color="default"
            size="big"
            isReversed={false}
        >
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    </section>
);

export const ButtonWithActions = () => (
    <section className="storyWrapper">
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} onClick={() => null}/>
        </ButtonGroup>
    </section>
);

export const ButtonGroupWith1Button = () => (
    <section className="storyWrapper">
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
        </ButtonGroup>
    </section>
);
