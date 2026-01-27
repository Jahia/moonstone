import preview from '~storybook/preview';
import {Paper} from './index';
import type {PaperProps} from './Paper.types';

const meta = preview.meta({
    title: 'Components/Paper',
    component: Paper,
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    render: (args: PaperProps) => <Paper {...args}>Content here</Paper>
});

export const NoPadding = Default.extend({
    args: {hasPadding: false}
});
