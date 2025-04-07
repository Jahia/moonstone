import {StoryObj, Meta} from '@storybook/react';

import {Field} from './index';
import markdownNotes from './Field.md';
import {Button, Chip, Input, Dropdown, RadioGroup, RadioItem, CheckboxItem, ListSelector, CardSelector, EmptyCardSelector, Textarea} from '~/components';
import {Add, Close, Language, MoreVert, File} from '~/icons';
import {FieldSelector} from './FieldSelector';
import {listSelectorData} from '~/data/listSelectorData';

const meta: Meta<typeof Field> = {
    title: 'Components/Field',
    component: Field,
    tags: ['beta'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        buttons: {
            control: false
        },
        chips: {
            control: false
        },
        children: {
            control: false
        }
    }
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
    args: {
        label: 'Title',
        chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
        buttons: <><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>,
        helper: 'information',
        children: <FieldSelector selector={<Input size="big" placeholder="Input value"/>}/>
    }
};

export const SelectorButtons: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector isDraggable buttons={<Button icon={<MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
    }
};

export const Multiple: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
    </>
    }
};

export const WithDropdown: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector
        selector={<Dropdown
        variant="outlined"
        label="Input value"
        className="flexFluid"
        data={[
            {
                label: 'option 1',
                value: '1'
            },
            {
                label: 'option 2',
                value: '2'
            },
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3'
            }
]}/>}/>
    }
};

export const WithTextarea: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>
    }
};

export const WithRadio: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>
    }
};

export const WithListSelector: Story = {
    args: {
        ...Default.args,
        children:
    <FieldSelector selector={<ListSelector options={listSelectorData} label={{addAllTitle: 'add', removeAllTitle: 'remove', selected: 'selected'}} onChange={(v: string[]) => console.log(v)}/>}/>
    }
};

export const WithCardSelector: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<CardSelector id="cardSelector" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>}/>
    }
};

export const WithEmptyCardSelector: Story = {
    args: {
        ...Default.args,
        children: <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>
    }
};

export const WithMultipleCheckboxes: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox1" value="checkbox1" label="CheckboxItem 1"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox2" value="checkbox2" label="CheckboxItem 2"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox3" value="checkbox3" label="CheckboxItem 3"/>}/>
    </>
    }
};

export const Error: Story = {
    args: {
        ...SelectorButtons.args,
        hasError: true,
        errorMessage: 'There is an error.'
    }
};
