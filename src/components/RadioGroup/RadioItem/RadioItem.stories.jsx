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
        <RadioGroup name="playground-name" value="playground-value">
            <RadioItem
                {...args}
            />
        </RadioGroup>
    );
};

Playground.args = {
    id: 'playground-item',
    label: 'Label',
    description: 'Description here',
    value: 'playground-value'
};
