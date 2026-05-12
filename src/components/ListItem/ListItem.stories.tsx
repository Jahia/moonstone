import {StoryObj} from '@storybook/react-vite';
import markdownNotes from './ListItem.md';

import {ListItem} from './index';
import type {ListItemProps} from './ListItem.types';
import {Love, Cloud} from '~/icons';
import {reset} from '~/globals/css-utils.js';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';

export default {
    title: 'Components/ListItem',
    component: ListItem,

    parameters: {
        layout: 'centered',
        docs: {description: {component: markdownNotes}}
    }
};

export const Default: StoryObj<ListItemProps> = {
    render: args => (
        <ul className={reset}>
            <ListItem {...args}/>
        </ul>
    ),

    args: {
        label: 'ListItem label'
    }
};

export const IconText: StoryObj<ListItemProps> = {
    render: args => (
        <ul className={reset}>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text',

    args: {
        label: 'ListItem',
        iconStart: <Love/>
    }
};

export const IconTextIcon: StoryObj<ListItemProps> = {
    render: args => (
        <ul className={reset}>
            <ListItem {...args}/>
        </ul>
    ),

    name: 'Icon + Text + Icon',

    args: {
        label: 'ListItem',
        iconStart: <Love/>,
        iconEnd: <Cloud/>
    }
};

export const WithBigImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul className={reset}>
            <ListItem
                image={<img src={imgVertical} alt="vertical big image"/>}
                {...args}
            />
            <ListItem
                image={<img src={imgHorizontal} alt="horizontal big image"/>}
                {...args}
            />
            <ListItem
                image={<img src={imgSquare} alt="square big image"/>}
                {...args}
            />
        </ul>
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'big'
    }
};

export const WithSmallImage: StoryObj<ListItemProps> = {
    render: args => (
        <ul className={reset}>
            <ListItem
                image={<img src={imgVertical} alt="vertical small image"/>}
                {...args}
            />
            <ListItem
                image={<img src={imgHorizontal} alt="horizontal small image"/>}
                {...args}
            />
            <ListItem
                image={<img src={imgSquare} alt="square small image"/>}
                {...args}
            />
        </ul>
    ),

    args: {
        label: 'ListItem label',
        imageSize: 'small'
    }
};

