import { RadioGroup } from '../index';
import { RadioItem } from './index';

import type { RadioItemProps } from './RadioItem.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/RadioGroup/RadioItem',
    component: RadioItem,
    parameters: {
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        actions: { argTypesRegex: '^on.*' },
    },
};

export const Playground: StoryObj<RadioItemProps> = {
    render: (args) => {
        return (
            <RadioGroup name="playground-name">
                <RadioItem {...args}/>
                <RadioItem
                    description="Description of the radio"
                    id="radio"
                    label="Radio"
                    value="radio"
                />
            </RadioGroup>
        );
    },

    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value',
    },
};
