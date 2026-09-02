import {StoryObj, Meta} from '@storybook/react-vite';

import {Fieldset} from './index';
import {Field, FieldBoolean} from '~/components';
import markdownNotes from './Fieldset.md';
import {Button, Chip, Input, Dropdown, RadioGroup, RadioItem, CardSelector, EmptyCardSelector, Textarea} from '~/components';
import {Add, Language, MoreVert, File} from '~/icons';

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
        children: <Field id="field" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information"><Input size="big" placeholder="Input value"/></Field>
    }
};

export const MultipleFields: Story = {
    args: {
        ...SingleField.args,
        children:
    <>
        <Field id="field-multiple" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information">
            <Input size="big" placeholder="Input value"/>
            <Input size="big" placeholder="Input value"/>
            <Input size="big" placeholder="Input value"/>
        </Field>
        <FieldBoolean id="field-boolean" label="Field Boolean" helper="information" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>}/>
        <Field id="field-dropdown" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <Dropdown
                variant="outlined"
                label="Input value"
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
        </Field>
        <Field hasError errorMessage="There is an error" id="field-textarea" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <Textarea id="moonstone-textarea" placeholder="Input value"/>
        </Field>
        <Field id="field-radio" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} helper="information">
            <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>
        </Field>
        <Field id="field-cardselectors" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
            <CardSelector id="cardSelector1" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>
            <CardSelector id="cardSelector2" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>
            <EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>
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
