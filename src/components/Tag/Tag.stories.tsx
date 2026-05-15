import preview from '~/__storybook__/preview';

import {Tag} from './index';

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

const Template = (args: Parameters<typeof Tag>[0]) => (
    <Tag {...args}/>
);

export const Default = meta.story({
    render: Template,
    args: {
        label: 'Tag',
        value: 'tag01',
        onClick: () => undefined
    }
});
