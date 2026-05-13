import preview from '~/__storybook__/preview';

import {RadioItem} from './index';
import {RadioGroup} from '../index';

const meta = preview.meta({
    title: 'Components/RadioGroup/RadioItem',
    component: RadioItem,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Playground = meta.story({
    render(args) {
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
});
