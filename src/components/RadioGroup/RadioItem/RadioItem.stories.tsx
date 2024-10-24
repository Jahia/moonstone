import React from 'react';
import {StoryObj, StoryFn} from '@storybook/react';

import {RadioItem} from './index';
import type {RadioItemProps} from './RadioItem.types';
import {RadioGroup} from '../index';

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

export const Playground: StoryObj<RadioItemProps> = {
    render: args => {
        return (
            <RadioGroup name="playground-name">
                <RadioItem {...args}/>
                <RadioItem
          label="Radio"
          value="radio"
          id="radio"
          description="Description of the radio"
        />
            </RadioGroup>
        );
    },

    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value'
    }
};
