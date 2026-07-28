import preview from '~/__storybook__/preview';
import {StoryFn} from '@storybook/react-vite';

import {CheckboxGroup} from './index';
import {CheckboxItem} from './CheckboxItem';

const meta = preview.meta({
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
});

const Template: StoryFn<typeof CheckboxGroup> = args => {
    return (
        <CheckboxGroup {...args}>
            <CheckboxItem
                id="cat"
                label="Cat"
                description="Miaouw"
                value="cat"
            />
            <CheckboxItem
                id="dog"
                label="Dog"
                description="Ouah-ouah"
                value="dog"
            />
            <CheckboxItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <CheckboxItem
                id="bird"
                label="Bird without description"
                value="bird"
            />
        </CheckboxGroup>
    );
};

export const Default = meta.story({
    render: Template,

    args: {
        name: 'default'
    }
});

export const Disabled = meta.story({
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true
    }
});
