import React, {useState} from 'react';

import {Tab} from './index';
import {TabItem} from './TabItem';
import {Apps} from '~/icons';
import markdownNotes from './Tab.md';

export default {
    title: 'Components/Tab',
    component: Tab,
    subcomponents: {TabItem},

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const _Tab = () => {
    const [selectedTabItemLabel, setSelectedTabItemLabel] = useState('Tab 1');
    const handleClick = (label: string) => {
        setSelectedTabItemLabel(label);
    };

    return (
        <Tab>
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
};
