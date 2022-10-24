import React from 'react';
import '~/__storybook__/storybook.scss';
import {Apps} from '~/icons';
import markdownNotes from './TabItem.md';
import {TabItem} from './index';
import {tabItemColors} from './TabItem.types';

export default {
    title: 'Components/Tab/TabItem',
    component: TabItem,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const TabItemWithIconAndLabel = () => (
    <div>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>Variant</h3>
            </div>
            {tabItemColors.map(color => (
                <div key={color} className="storyGridItem">
                    <h3>{color}</h3>
                </div>
            ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>default</h3>
            </div>

            <div className="storyGridItem">
                <TabItem
                    isSelected
                    icon={<Apps/>}
                    label="tabItem"
                    size="default"
                    isReversed={false}
                    isDisabled={false}
                    onClick={() => null}
                />
            </div>
        </section>
    </div>
);
