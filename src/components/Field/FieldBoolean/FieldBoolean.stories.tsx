import preview from '~/__storybook__/preview';

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
        docs: {description: {component: markdownNotes}}
    },
    argTypes: {
        buttons: {
            control: false
        },
        chips: {
            control: false
        }
    }
});

const defaultArgs = {
    id: 'field-boolean',
    label: 'Title',
    chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
    buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
    helper: 'information',
    checkboxAttributes: {
        value: 'checkbox',
        className: 'test-class'
    }
};

export const Default = meta.story({
    args: defaultArgs
});

export const Error = meta.story({
    args: {
        ...defaultArgs,
        hasError: true,
        errorMessage: 'There is an error.'
    }
});

