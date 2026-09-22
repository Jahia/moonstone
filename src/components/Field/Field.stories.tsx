import markdownNotes from './Field.md';
import { FieldSelector } from './FieldSelector';
import { Field } from './index';
import { Button, CardSelector, CheckboxItem, Chip, Dropdown, EmptyCardSelector, Input, ListSelector, RadioGroup, RadioItem, Textarea } from '~/components';
import { listSelectorData } from '~/data/listSelectorData';
import { layout } from '~/globals/css-utils.js';
import { Add, Close, File, Language, MoreVert } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Field> = {
    title: 'Components/Field',
    component: Field,
    tags: ['beta'],

    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        buttons: {
            control: false,
        },
        chips: {
            control: false,
        },
        children: {
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
    args: {
        label: 'Title',
        chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
        buttons: <><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>,
        helper: 'information',
        children: <FieldSelector selector={<Input placeholder="Input value" size="big"/>}/>,
    },
};

export const SelectorButtons: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector isDraggable buttons={<Button icon={<MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>,
    },
};

export const Multiple: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input placeholder="Input value" size="big"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input placeholder="Input value" size="big"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input placeholder="Input value" size="big"/>}/>
    </>,
    },
};

export const WithDropdown: Story = {
    args: {
        ...Default.args,
        children: (
            <FieldSelector
                selector={(
                    <Dropdown
                        className={`flexFluid ${layout.flexFluid}`}
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
                        value=""
                        variant="outlined"
                    />
                )}
            />
        ),
    },
};

export const WithTextarea: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>,
    },
};

export const WithRadio: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>,
    },
};

export const WithListSelector: Story = {
    args: {
        ...Default.args,
        children:
    <FieldSelector selector={<ListSelector label={{ addAllTitle: 'add', removeAllTitle: 'remove', selected: 'selected' }} options={listSelectorData} onChange={(v: string[]) => console.log(v)}/>}/>,
    },
};

export const WithCardSelector: Story = {
    args: {
        ...Default.args,
        children: (
            <FieldSelector selector={(
                <CardSelector
                    displayName="Item name"
                    id="cardSelector"
                    information="information"
                    systemName="system name"
                    thumbnailType="icon"
                />
            )}
            />
        ),
    },
};

export const WithEmptyCardSelector: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>,
    },
};

export const WithMultipleCheckboxes: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox1" label="CheckboxItem 1" value="checkbox1"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox2" label="CheckboxItem 2" value="checkbox2"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox3" label="CheckboxItem 3" value="checkbox3"/>}/>
    </>,
    },
};

export const Error: Story = {
    args: {
        ...SelectorButtons.args,
        hasError: true,
        errorMessage: 'There is an error.',
    },
};

export const Helper: Story = {
    args: {
        ...Default.args,
        helper: <>This field is <strong>required</strong> and must be <em>unique</em>.</>,
    },
};
