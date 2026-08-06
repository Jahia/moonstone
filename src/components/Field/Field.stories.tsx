import {StoryObj, Meta} from '@storybook/react-vite';
import clsx from 'clsx';

import {Field} from './index';
import markdownNotes from './Field.md';
import {Button, Chip, Input, Dropdown, RadioGroup, RadioItem, CheckboxItem, ListSelector, CardSelector, EmptyCardSelector, Textarea} from '~/components';
import {Add, Close, HandleDrag, Language, MoreVert, File} from '~/icons';
import {listSelectorData} from '~/data/listSelectorData';
import {layout} from '~/globals/css-utils.js';
import fieldStyles from './Field.module.scss';

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
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <Input size="big" placeholder="Input value"/>
        </div>
    </div>
    }
};

export const SelectorButtons: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <Input size="big" placeholder="Input value"/>
        </div>
        <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
    </div>
    }
};

export const Multiple: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <Input size="big" placeholder="Input value"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <Input size="big" placeholder="Input value"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <Input size="big" placeholder="Input value"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
    </>
    }
};

export const WithDropdown: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <Dropdown
                variant="outlined"
                label="Input value"
                className={`flexFluid ${layout.flexFluid}`}
                value=""
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
]}/>
        </div>
    </div>
    }
};

export const WithTextarea: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <Textarea id="moonstone-textarea" placeholder="Input value"/>
        </div>
    </div>
    }
};

export const WithRadio: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>
        </div>
    </div>
    }
};

export const WithListSelector: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <ListSelector options={listSelectorData} label={{addAllTitle: 'add', removeAllTitle: 'remove', selected: 'selected'}} onChange={(v: string[]) => console.log(v)}/>
        </div>
    </div>
    }
};

export const WithCardSelector: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <CardSelector id="cardSelector" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>
        </div>
    </div>
    }
};

export const WithEmptyCardSelector: Story = {
    args: {
        ...Default.args,
        children:
    <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
        <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
            <EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>
        </div>
    </div>
    }
};

export const WithMultipleCheckboxes: Story = {
    args: {
        ...Default.args,
        children:
    <>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <CheckboxItem id="checkbox1" value="checkbox1" label="CheckboxItem 1"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <CheckboxItem id="checkbox2" value="checkbox2" label="CheckboxItem 2"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <HandleDrag color="gray" size="big" className={clsx('moonstone-field_rowHandle', fieldStyles['moonstone-field_rowHandle'])}/>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                <CheckboxItem id="checkbox3" value="checkbox3" label="CheckboxItem 3"/>
            </div>
            <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
        </div>
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

export const Helper: Story = {
    args: {
        ...Default.args,
        helper: <>This field is <strong>required</strong> and must be <em>unique</em>.</>
    }
};
