import { useArgs } from 'storybook/preview-api';

import markdownNotes from './DynamicFieldset.md';
import { DynamicFieldset } from './index';
import { Field, FieldSelector } from '~/components';
import { Button, Chip, Input } from '~/components';
import { Add, Language, MoreVert } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DynamicFieldset> = {
    title: 'Components/Fieldset/DynamicFieldset',
    component: DynamicFieldset,
    tags: ['beta'],

    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    args: {
        id: 'dynamic-fieldset',
        label: 'Dynamic fieldset',
        helper: 'dynamic fieldset information',
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        children: (
            <Field
                buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>}
                chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
                helper="information"
                id="field"
                label="Field"
            >
                <FieldSelector selector={<Input placeholder="Input value" size="big"/>}/>
            </Field>
        ),
    },
    argTypes: {
        buttons: {
            control: false,
        },
        children: {
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DynamicFieldset>;

export const Uncontrolled: Story = {};

export const Controlled: Story = {
    render: (args) => {
        const [, setArgs] = useArgs();

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            args.onChange(e);
            setArgs({ value: e.target.value });
        };

        return <DynamicFieldset {...args} onChange={onChange}/>;
    },
};
