import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import markdownNotes from './ButtonGroup.md';
import {ButtonGroup} from './index';
import type {ButtonGroupProps} from './ButtonGroup.types';
import {Button} from '~/components/Button';
import {ChevronDown} from '~/icons';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    subcomponents: {Button},

    parameters: {
        layout: 'centered',
        componentSubtitle: 'ButtonGroup',
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof ButtonGroup>;

export const Default: StoryObj<ButtonGroupProps> = {
    render: args => (
        <ButtonGroup {...args}>
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    ),

    args: {
        size: 'big'
    }
};

export const ButtonWithActions = () => (
    <ButtonGroup color="accent" size="big">
        <Button label="Actions" onClick={() => null}/>
        <Button icon={<ChevronDown/>} onClick={() => null}/>
    </ButtonGroup>
);

export const ButtonGroupWith1Button = () => (
    <ButtonGroup color="accent" size="big">
        <Button label="Actions" onClick={() => null}/>
    </ButtonGroup>
);
