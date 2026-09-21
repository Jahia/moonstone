import markdownNotes from './FieldSelector.md';
import { FieldSelector } from './index';
import { Button, Dropdown, Input, RadioGroup, RadioItem } from '~/components';
import { Close, MoreVert } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FieldSelector> = {
    title: 'Components/Field/FieldSelector',
    component: FieldSelector,
    tags: ['beta'],

    parameters: {
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    argTypes: {

        buttons: {
            control: false,
        },
        selector: {
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof FieldSelector>;

export const Default: Story = {
    args: {
        buttons: <><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>,
        selector: <Input placeholder="Input value" size="big"/>,
    },
};

export const WithDropdown: Story = {
    args: {
        ...Default.args,
        selector: (
            <Dropdown
                data={[
                    {
                        label: 'option 1',
                        value: '1',
                    },
                    {
                        label: 'option 2',
                        value: '2',
                    },
                    {
                        label: 'option 3 with very long long label label label label label label label label',
                        value: '3',
                    },
                ]}
                label="Input value"
                size="medium"
                value=""
                variant="outlined"
            />
        ),
    },
};

export const WithTextarea: Story = {
    args: {
        ...Default.args,
        selector: <textarea placeholder="Input value" style={{ width: '100%' }}/>,
    },
};

export const WithRadio: Story = {
    args: {
        ...Default.args,
        buttons: <Button icon={<Close/>}/>,
        selector: <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>,
    },
};
