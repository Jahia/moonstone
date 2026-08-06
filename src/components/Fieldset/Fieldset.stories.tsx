import {StoryObj, Meta} from '@storybook/react-vite';
import clsx from 'clsx';

import {Fieldset} from './index';
import {Field, FieldBoolean} from '~/components';
import markdownNotes from './Fieldset.md';
import {Button, Chip, Input, Dropdown, RadioGroup, RadioItem, CardSelector, EmptyCardSelector, Textarea} from '~/components';
import {Add, Close, Language, MoreVert, File} from '~/icons';
import fieldStyles from '~/components/Field/Field.module.scss';

const meta: Meta<typeof Fieldset> = {
    title: 'Components/Fieldset',
    component: Fieldset,
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
        children: {
            control: false
        }
    }
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const SingleField: Story = {
    args: {
        label: 'Fieldset',
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        helper: 'Fieldset information',
        children:
    <Field id="field" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information">
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Input size="big" placeholder="Input value"/></div>
        </div>
    </Field>
    }
};

export const MultipleFields: Story = {
    args: {
        ...SingleField.args,
        children:
    <>
        <Field id="field-multiple" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information">
            <>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Input size="big" placeholder="Input value"/></div>
                    <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
                </div>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Input size="big" placeholder="Input value"/></div>
                    <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
                </div>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Input size="big" placeholder="Input value"/></div>
                    <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<MoreVert/>} variant="ghost"/>
                </div>
            </>
        </Field>
        <FieldBoolean id="field-boolean" label="Field Boolean" helper="information" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>}/>
        <Field id="field-dropdown" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}>
                    <Dropdown
                        variant="outlined"
                        label="Input value"
                        className="flexFluid"
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
        </Field>
        <Field hasError errorMessage="There is an error" id="field-textarea" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Textarea id="moonstone-textarea" placeholder="Input value"/></div>
            </div>
        </Field>
        <Field id="field-radio" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} helper="information">
            <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup></div>
            </div>
        </Field>
        <Field id="field-cardselectors" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><CardSelector id="cardSelector1" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/></div>
                    <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
                </div>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><CardSelector id="cardSelector2" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/></div>
                    <Button className={clsx('moonstone-field_rowButton', fieldStyles['moonstone-field_rowButton'])} icon={<Close/>} variant="ghost"/>
                </div>
                <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
                    <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/></div>
                </div>
            </>
        </Field>
    </>
    }
};

export const Helper: Story = {
    args: {
        ...SingleField.args,
        helper: <>These fields are <strong>required</strong> for <em>all</em> languages.</>
    }
};
