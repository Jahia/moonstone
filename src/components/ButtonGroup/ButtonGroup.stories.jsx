import React from 'react';
// Import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import markdownNotes from './ButtonGroup.md';
import {Button} from '~/components/Button';
import {ChevronDown} from '~/icons';
import {ButtonGroup} from './index';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    subcomponents: {Button},

    parameters: {
        layout: 'centered',
        componentSubtitle: 'ButtonGroup',
        notes: {markdown: markdownNotes}
    }
};

export const Default = args => (
    <ButtonGroup {...args}>
        <Button label="one" onClick={() => null}/>
        <Button label="two" onClick={() => null}/>
        <Button label="three" onClick={() => null}/>
    </ButtonGroup>
);
Default.args = {
    variant: 'default',
    color: 'default',
    size: 'big',
    isReversed: false
};

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
