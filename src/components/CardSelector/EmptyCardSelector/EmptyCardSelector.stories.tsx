import preview from '~/__storybook__/preview';

import {EmptyCardSelector} from './index';
import type {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import {File} from '~/icons';

const meta = preview.meta({
    title: 'Components/CardSelector/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template = (args: EmptyCardSelectorProps) => {
    return <div><EmptyCardSelector {...args}/></div>;
};

const defaultArgs = {
    label: 'No item selected',
    isReadOnly: false,
    isDisabled: false
} satisfies EmptyCardSelectorProps;

export const Default = meta.story({
    args: defaultArgs,
    render: Template
});

export const Icon = meta.story({
    args: {
        ...defaultArgs,
        iconStart: <File/>
    },
    render: Template
});

