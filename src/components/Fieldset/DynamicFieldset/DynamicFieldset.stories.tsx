import {StoryObj, Meta} from '@storybook/react-vite';
import clsx from 'clsx';

import {DynamicFieldset} from './index';
import {Field} from '~/components';
import markdownNotes from './DynamicFieldset.md';
import {Button, Chip, Input} from '~/components';
import {Add, Language, MoreVert} from '~/icons';
import {useArgs} from 'storybook/preview-api';
import fieldStyles from '~/components/Field/Field.module.scss';

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
        children:
    <Field id="field" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information">
        <div className={clsx('moonstone-field_row', fieldStyles['moonstone-field_row'])}>
            <div className={clsx('moonstone-field_rowSelector', fieldStyles['moonstone-field_rowSelector'])}><Input size="big" placeholder="Input value"/></div>
        </div>
    </Field>
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
        const [, setArgs] = useArgs();

        const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            args.onChange(e);
            setArgs({value: e.target.value});
        };

        return <DynamicFieldset {...args} onChange={onChange}/>;
    }
};
