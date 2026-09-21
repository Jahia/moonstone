import { ListItem } from './index';
import markdownNotes from './ListItem.md';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Cloud, Love } from '~/icons';

import type { ListItemProps } from './ListItem.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/ListItem',
    component: ListItem,

    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        iconStart: iconArgType,
        iconEnd: iconArgType,
    },
};

export const Default: StoryObj<ListItemProps> = {
    render: args => (
        <ul style={{ padding: 0, margin: 0 }}>
            <ListItem {...args}/>
        </ul>
    ),

    args: {
        label: 'ListItem label',
    },
};

export const IconText: StoryObj<ListItemProps> = {
    render: args => (
        <ul style={{ padding: 0, margin: 0 }}>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text',

    args: {
        label: 'ListItem',
        iconStart: <Love/>,
    },
};

export const IconTextIcon: StoryObj<ListItemProps> = {
    render: args => (
        <ul style={{ padding: 0 }}>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text + Icon',

    args: {
        label: 'ListItem',
        iconStart: <Love/>,
        iconEnd: <Cloud/>,
    },
};

export const WithBigImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul style={{ padding: 0 }}>
            <ListItem
                image={<img alt="vertical big placeholder" src={imgVertical}/>}
                {...args}
            />
            <ListItem
                image={<img alt="horizontal big placeholder" src={imgHorizontal}/>}
                {...args}
            />
            <ListItem
                image={<img alt="square big placeholder" src={imgSquare}/>}
                {...args}
            />
        </ul>
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'big',
    },
};

export const WithSmallImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul style={{ padding: 0 }}>
            <ListItem
                image={<img alt="vertical small placeholder" src={imgVertical}/>}
                {...args}
            />
            <ListItem
                image={<img alt="horizontal small placeholder" src={imgHorizontal}/>}
                {...args}
            />
            <ListItem
                image={<img alt="square small placeholder" src={imgSquare}/>}
                {...args}
            />
        </ul>
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'small',
    },
};
