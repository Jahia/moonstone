import preview from '../../../../.storybook/preview';
import {EmptyCardSelector} from './index';
import markdownNotes from './EmptyCardSelector.md';
import {File} from '~/icons';
import {EmptyCardSelectorProps} from './EmptyCardSelector.types';

const meta = preview.meta({
    title: 'Components/CardSelector/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],
    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        label: 'No item selected',
        isReadOnly: false,
        isDisabled: false
    },
    render: (args: EmptyCardSelectorProps) => (
        <div><EmptyCardSelector {...args}/></div>
    )
});

export const Icon = Default.extend({
    args: {
        iconStart: <File/>
    }
});
