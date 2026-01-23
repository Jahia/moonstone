import preview from '../../../../.storybook/preview';
import {FieldBoolean} from './index';
import markdownNotes from './FieldBoolean.md';
import {Button, Chip} from '~/components';
import {Language, MoreVert} from '~/icons';

const meta = preview.meta({
    title: 'Components/Field/FieldBoolean',
    component: FieldBoolean,
    tags: ['beta'],
    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        buttons: {control: false},
        chips: {control: false}
    }
});

export const Default = meta.story({
    args: {
        label: 'Title',
        chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        helper: 'information',
        id: 'field-boolean-id',
        checkboxAttributes: {
            value: 'checkbox',
            className: 'test-class'
        }
    }
});

export const Error = Default.extend({
    args: {
        hasError: true,
        errorMessage: 'There is an error.'
    }
});
