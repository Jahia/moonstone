import preview from '~/__storybook__/preview';
import React, {useState} from 'react';
import {StoryFn} from '@storybook/react-vite';

import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

const meta = preview.meta({
    title: 'Components/RadioGroup',
    component: RadioGroup,
    subcomponents: {RadioItem},
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        componentSubtitle: 'RadioGroup & RadioItem',
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

const Template: StoryFn<typeof RadioGroup> = args => (
    <RadioGroup {...args}>
        <RadioItem id="cat" label="Cat" description="Miaouw" value="cat"/>
        <RadioItem id="dog" label="Dog" description="Ouah-ouah" value="dog"/>
        <RadioItem
            isDisabled
            id="horse"
            label="Horse"
            description="Disabled element"
            value="horse"
        />
        <RadioItem id="bird" label="Bird without description" value="bird"/>
    </RadioGroup>
);

export const NoDefaultValue = meta.story({
    render: Template,

    args: {
        name: 'no-default-value'
    }
});

export const WithDefaultValue = meta.story({
    render: Template,

    args: {
        name: 'default-value',
        defaultValue: 'dog'
    }
});

export const Disabled = meta.story({
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true
    }
});

export const Controlled = meta.story({
    render: args => {
        const [value, setValue] = useState('cat');

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        };

        return (
            <RadioGroup
                {...args}
                name="controlled"
                value={value}
                onChange={event => handleChange(event)}
            >
                <RadioItem
                    id="dog1"
                    label="Dog"
                    description="Ouah-ouah"
                    value="dog"
                />
                <RadioItem
                    id="cat"
                    label="Cat"
                    description="Miaow"
                    value="cat"
                />
                <RadioItem
                    id="fish"
                    label="Fish"
                    description="blop"
                    value="fish"
                />
            </RadioGroup>
        );
    }
});
