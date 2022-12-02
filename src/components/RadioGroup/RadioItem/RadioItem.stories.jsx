import React from 'react';
import {RadioItem} from './RadioItem';
import {RadioGroup} from '../RadioGroup';

export default {
    title: 'Components/RadioGroup/RadioItem',
    component: RadioItem,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

export const Playground = args => {
    return (
        <RadioGroup name="playground-name">
            <RadioItem
                {...args}
            />
            <RadioItem label="Radio" value="radio" id="radio" description="Description of the radio"/>
        </RadioGroup>
    );
};

Playground.args = {
    id: 'playground-item',
    label: 'Play with me',
    description: 'Use the storybook controls to update this element',
    value: 'playground-value'
};
