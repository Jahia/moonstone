import preview from '~storybook/preview';
import {Tag} from './index';
import type {TagProps} from './Tag.types';

const meta = preview.meta({
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'fullscreen',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Default = meta.story({

    render: (args: TagProps) => <Tag {...args}/>,
    args: {
        label: 'Tag',
        value: 'tag01',
        onClick: () => console.log('Tag clicked')
    }
});
