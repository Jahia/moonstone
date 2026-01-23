import {useState} from 'react';
import preview from '../../../.storybook/preview';
import {Tab} from './index';
import type {TabProps} from './Tab.types';
import {TabItem} from './TabItem';
import {Apps} from '~/icons';
import markdownNotes from './Tab.md';

const meta = preview.meta({
    title: 'Components/Tab',
    component: Tab,
    subcomponents: {TabItem},
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const _Tab = meta.story({
    args: {},
    render: (args: TabProps) => {
        const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
        const handleClick = (label: string) => {
            setSelectedTabItemLabel(label);
        };

        return (
            <Tab {...args}>
                <TabItem
          isSelected={selectedTabItemLabel === 'Tab 1'}
          icon={<Apps/>}
          label="Tab 1"
          onClick={() => {
            handleClick('Tab 1');
          }}
        />
                <TabItem
          isSelected={selectedTabItemLabel === 'Tab 2'}
          icon={<Apps/>}
          label="Tab 2"
          onClick={() => {
            handleClick('Tab 2');
          }}
        />
                <TabItem
          isDisabled
          isSelected={selectedTabItemLabel === 'Tab 3'}
          icon={<Apps/>}
          label="Tab 3"
          onClick={() => {
            handleClick('Tab 3');
          }}
        />
            </Tab>
        );
    }
});

export const Reversed = meta.story({
    args: {},
    render: (args: TabProps) => {
        const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
        const handleClick = (label: string) => {
            setSelectedTabItemLabel(label);
        };

        return (
            <Tab style={{backgroundColor: '#333', padding: '20px'}} {...args}>
                <TabItem
          isReversed
          isSelected={selectedTabItemLabel === 'Tab 1'}
          icon={<Apps/>}
          label="Tab 1"
          onClick={() => {
            handleClick('Tab 1');
          }}
        />
                <TabItem
          isReversed
          isSelected={selectedTabItemLabel === 'Tab 2'}
          icon={<Apps/>}
          label="Tab 2"
          onClick={() => {
            handleClick('Tab 2');
          }}
        />
                <TabItem
          isReversed
          isDisabled
          isSelected={selectedTabItemLabel === 'Tab 3'}
          icon={<Apps/>}
          label="Tab 3"
          onClick={() => {
            handleClick('Tab 3');
          }}
        />
            </Tab>
        );
    }
});

export const SizeBig = meta.story({
    args: {},
    render: (args: TabProps) => {
        const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
        const handleClick = (label: string) => {
            setSelectedTabItemLabel(label);
        };

        return (
            <Tab {...args}>
                <TabItem
          isSelected={selectedTabItemLabel === 'Tab 1'}
          icon={<Apps/>}
          size="big"
          label="Tab 1"
          onClick={() => {
            handleClick('Tab 1');
          }}
        />
                <TabItem
          isSelected={selectedTabItemLabel === 'Tab 2'}
          icon={<Apps/>}
          size="big"
          label="Tab 2"
          onClick={() => {
            handleClick('Tab 2');
          }}
        />
                <TabItem
          isDisabled
          isSelected={selectedTabItemLabel === 'Tab 3'}
          icon={<Apps/>}
          size="big"
          label="Tab 3"
          onClick={() => {
            handleClick('Tab 3');
          }}
        />
            </Tab>
        );
    }
});
