import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {FieldBoolean} from './index';
import {Button, Chip} from '~/components';
import {Language, MoreVert} from '~/icons';

const meta: Meta<typeof FieldBoolean> = {
    title: 'Components/Field/FieldBoolean',
    component: FieldBoolean,

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        buttons: {
            control: false
        },
        chips: {
            control: false
        }
    }
};
export default meta;

type Story = StoryObj<typeof FieldBoolean>;

export const Default: Story = {
    args: {
        label: 'Title',
        chips: <><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>,
        buttons: <Button icon={<MoreVert/>} variant="ghost"/>,
        helper: 'information',
        checkboxAttributes: {value: 'checkbox',
            className: 'test-class'
        }
    }
};

export const Error: Story = {
    args: {
        ...Default.args,
        hasError: true,
        errorMessage: 'There is an error.'
    }
};
