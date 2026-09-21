import markdownNotes from './Fieldset.md';
import { Fieldset } from './index';
import { Field, FieldBoolean, FieldSelector } from '~/components';
import { Button, CardSelector, Chip, Dropdown, EmptyCardSelector, Input, RadioGroup, RadioItem, Textarea } from '~/components';
import { Add, Close, File, Language, MoreVert } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Fieldset> = {
    title: 'Components/Fieldset',
    component: Fieldset,
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
        children: {
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const SingleField: Story = {
    args: {
        label: 'Fieldset',
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        helper: 'Fieldset information',
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
};

export const MultipleFields: Story = {
    args: {
        ...SingleField.args,
        children:
    <>
        <Field
            buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>}
            chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
            helper="information"
            id="field-multiple"
            label="Field"
        >
            <>
                <FieldSelector buttons={<Button icon={<MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
                <FieldSelector buttons={<Button icon={<MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
                <FieldSelector buttons={<Button icon={<MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
            </>
        </Field>
        <FieldBoolean
            buttons={<Button icon={<MoreVert/>} variant="ghost"/>}
            chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
            helper="information"
            id="field-boolean"
            label="Field Boolean"
        />
        <Field
            buttons={<Button icon={<MoreVert/>} variant="ghost"/>}
            chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
            helper="information"
            id="field-dropdown"
            label="Field"
        >
            <FieldSelector
                selector={(
                    <Dropdown
                        className="flexFluid"
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
        </Field>
        <Field
            hasError
            buttons={<Button icon={<MoreVert/>} variant="ghost"/>}
            chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
            errorMessage="There is an error"
            helper="information"
            id="field-textarea"
            label="Field"
        >
            <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>
        </Field>
        <Field chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} helper="information" id="field-radio" label="Field">
            <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>
        </Field>
        <Field
            buttons={<Button icon={<MoreVert/>} variant="ghost"/>}
            chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>}
            helper="information"
            id="field-cardselectors"
            label="Field"
        >
            <>
                <FieldSelector
                    buttons={<Button icon={<Close/>}/>}
                    selector={(
                        <CardSelector
                            displayName="Item name"
                            id="cardSelector1"
                            information="information"
                            systemName="system name"
                            thumbnailType="icon"
                        />
                    )}
                />
                <FieldSelector
                    buttons={<Button icon={<Close/>}/>}
                    selector={(
                        <CardSelector
                            displayName="Item name"
                            id="cardSelector2"
                            information="information"
                            systemName="system name"
                            thumbnailType="icon"
                        />
                    )}
                />
                <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>
            </>
        </Field>
    </>,
    },
};

export const Helper: Story = {
    args: {
        ...SingleField.args,
        helper: <>These fields are <strong>required</strong> for <em>all</em> languages.</>,
    },
};
