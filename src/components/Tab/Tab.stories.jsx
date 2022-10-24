import React from 'react';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Tab.md';
import {Tab} from './index';
import {TabItem} from './TabItem';
import {Apps} from '~/icons';

export default {
    title: 'Components/Tab',
    component: Tab,
    // Decorators: [withKnobs],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const _Tab = () => (
    <section className="storyGrid">
        <div className="storyGridItem">
            <Tab>
                <TabItem
                    isSelected
                    icon={<Apps/>}
                    label="Tab 1"
                />
                <TabItem
                    icon={<Apps/>}
                    label="Tab 2"
                    isSelected={false}
                />
            </Tab>
        </div>
    </section>
);
