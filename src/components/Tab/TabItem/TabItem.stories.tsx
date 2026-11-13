import { Tab } from '../index';
import { TabItem } from './index';
import markdownNotes from './TabItem.md?raw';

import type { TabItemProps } from './TabItem.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/TabItem',
    component: TabItem,
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'One view of a Tab.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Playground: StoryObj<TabItemProps> = {
    args: { label: 'Content', isSelected: true },
    render: args => (
        <Tab>
            <TabItem {...args}/>
            <TabItem label="Metadata"/>
        </Tab>
    ),
};
