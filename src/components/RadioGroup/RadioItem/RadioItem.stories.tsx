import preview from '../../../../.storybook/preview';
import {RadioItem} from './index';
import type {RadioItemProps} from './RadioItem.types';
import {RadioGroup} from '../index';

const meta = preview.meta({
    title: 'Components/RadioGroup/RadioItem',
    component: RadioItem,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Playground = meta.story({
    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value'
    },
    render: (args: RadioItemProps) => {
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
    }
});
