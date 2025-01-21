import React, {useState} from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {DynamicFieldset} from './index';
import {Field, FieldSelector} from '~/components';
import markdownNotes from './DynamicFieldset.md';
import {Button, Chip, Input} from '~/components';
import {Add, Language, MoreVert} from '~/icons';

const meta: Meta<typeof DynamicFieldset> = {
    title: 'Components/Fieldset/DynamicFieldset',
    component: DynamicFieldset,
    tags: ['beta'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    args: {
        id: 'dynamic-fieldset',
        label: 'Dynamic fieldset',
        helper: 'dynamic fieldset information',
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        children: <Field id="field" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information"><FieldSelector selector={<Input size="big" placeholder="Input value"/>}/></Field>
    },
    argTypes: {
        buttons: {
            control: false
        },
        children: {
            control: false
        }
    }
};
export default meta;

type Story = StoryObj<typeof DynamicFieldset>;

export const Uncontrolled: Story = {};

export const Controlled: Story = {
    render: args => {
        const [checked, setChecked] = useState(false);
        return (
            <DynamicFieldset
                checked={checked}
                onChange={e => setChecked(e.currentTarget.checked)}
                {...args}
            />
        );
    }
};
