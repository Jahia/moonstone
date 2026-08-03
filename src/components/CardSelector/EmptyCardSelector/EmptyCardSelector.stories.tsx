import preview from '~/__storybook__/preview';

import {EmptyCardSelector} from './index';
import type {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import markdownNotes from './EmptyCardSelector.md';
import {File} from '~/icons';
import {iconArgType} from '~/__storybook__/iconArgType';

const meta = preview.meta({
    title: 'Components/CardSelector/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        iconStart: iconArgType
    }
});
const Template = (args: EmptyCardSelectorProps) => {
    return (
        <div>
            <EmptyCardSelector {...args}/>
        </div>
    );
};

export const Default = meta.story({
    args: {
        label: 'No item selected',
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
});

export const Icon = meta.story({
    args: {
        ...Default.input.args,
        iconStart: <File/>
    },
    render: Template
});
