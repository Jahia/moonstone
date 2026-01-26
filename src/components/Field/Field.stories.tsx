import preview from '../../../.storybook/preview';
import {Field} from './index';
import type {FieldProps} from './Field.types';
import markdownNotes from './Field.md';
import {Button, Chip, Input, Dropdown, RadioGroup, RadioItem, CheckboxItem, ListSelector, CardSelector, EmptyCardSelector, Textarea} from '~/components';
import {Add, Close, Language, MoreVert, File} from '~/icons';
import {FieldSelector} from './FieldSelector';
import {listSelectorData} from '~/data/listSelectorData';

const meta = preview.meta({
    title: 'Components/Field',
    component: Field,
    tags: ['beta'],
    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        buttons: {control: false},
        chips: {control: false},
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {
        label: 'Title',
        chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
        buttons: <><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>,
        helper: 'information',
        id: 'field-id',
        children: <FieldSelector selector={<Input size="big" placeholder="Input value"/>}/>
    },
    render: (args: FieldProps) => <Field {...args}/>
});

export const SelectorButtons = Default.extend({
    args: {
        children: <FieldSelector isDraggable buttons={<Button icon={<MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
    }
});

export const Multiple = Default.extend({
    args: {
        children:
    <>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
        <FieldSelector isDraggable buttons={<><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>} selector={<Input size="big" placeholder="Input value"/>}/>
    </>
    }
});

export const WithDropdown = Default.extend({
    args: {
        children: <FieldSelector
            selector={<Dropdown
                variant="outlined"
                label="Input value"
                className="flexFluid"
                value=""
                data={[
                    {label: 'option 1', value: '1'},
                    {label: 'option 2', value: '2'},
                    {label: 'option 3 with very long long label label label label label label label label', value: '3'}
                ]}
            />}
        />
    }
});

export const WithTextarea = Default.extend({
    args: {
        children: <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>
    }
});

export const WithRadio = Default.extend({
    args: {
        children: <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>
    }
});

export const WithListSelector = Default.extend({
    args: {
        children:
    <FieldSelector selector={<ListSelector options={listSelectorData} label={{addAllTitle: 'add', removeAllTitle: 'remove', selected: 'selected'}} onChange={(v: string[]) => console.log(v)}/>}/>
    }
});

export const WithCardSelector = Default.extend({
    args: {
        children: <FieldSelector selector={<CardSelector id="cardSelector" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>}/>
    }
});

export const WithEmptyCardSelector = Default.extend({
    args: {
        children: <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>
    }
});

export const WithMultipleCheckboxes = Default.extend({
    args: {
        children:
    <>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox1" value="checkbox1" label="CheckboxItem 1"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox2" value="checkbox2" label="CheckboxItem 2"/>}/>
        <FieldSelector isDraggable buttons={<Button icon={<Close/>}/>} selector={<CheckboxItem id="checkbox3" value="checkbox3" label="CheckboxItem 3"/>}/>
    </>
    }
});

export const Error = SelectorButtons.extend({
    args: {
        hasError: true,
        errorMessage: 'There is an error.'
    }
});
