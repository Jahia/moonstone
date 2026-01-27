import preview from '~storybook/preview';
import markdownNotes from './ListItem.md';
import {ListItem} from './index';
import {Love, Cloud} from '~/icons';
import type {ListItemProps} from './ListItem.types';

const meta = preview.meta({
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {
        label: 'ListItem label'
    },
    render: (args: ListItemProps) => (
        <ul>
            <ListItem {...args}/>
        </ul>
    )
});

export const IconText = meta.story({
    name: 'Icon + Text',
    args: {
        label: 'ListItem',
        iconStart: <Love/>
    },
    render: (args: ListItemProps) => (
        <ul>
            <ListItem {...args}/>
        </ul>
    )
});

export const IconTextIcon = meta.story({
    name: 'Icon + Text + Icon',
    args: {
        label: 'ListItem',
        iconStart: <Love/>,
        iconEnd: <Cloud/>
    },
    render: (args: ListItemProps) => (
        <ul>
            <ListItem {...args}/>
        </ul>
    )
});

export const WithBigImage = meta.story({
    args: {
        label: 'ListItem label',
        imageSize: 'big'
    },
    render: (args: ListItemProps) => (
        <ul>
            <ListItem
                image={<img src="https://via.placeholder.com/500?text=ListItemImage" alt="big image"/>}
                {...args}
            />
            <ListItem
                image={<img src="https://via.placeholder.com/200x500?text=ListItemImage" alt="big image"/>}
                {...args}
            />
            <ListItem
                image={<img src="https://via.placeholder.com/500x200?text=ListItemImage" alt="big image"/>}
                {...args}
            />
        </ul>
    )
});

export const WithSmallImage = meta.story({
    args: {
        label: 'ListItem label',
        imageSize: 'small'
    },
    render: (args: ListItemProps) => (
        <ul>
            <ListItem
                image={<img src="https://via.placeholder.com/500?text=ListItemImage" alt="small image"/>}
                {...args}
            />
            <ListItem
                image={<img src="https://via.placeholder.com/200x500?text=ListItemImage" alt="small image"/>}
                {...args}
            />
            <ListItem
                image={<img src="https://via.placeholder.com/500x200?text=ListItemImage" alt="small image"/>}
                {...args}
            />
        </ul>
    )
});
