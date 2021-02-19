import React from 'react';
import classnames from 'clsx';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.module.scss';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

import markdownNotes from './Tab.md';
import {Tab} from './index';
import {TabItem} from './TabItem';

const selectIcon = () => select('Icon', iconsName, 'Apps');
const isSelected = () => boolean('Is selected', true);

storiesOf('Components/Tab', module)
    .addParameters({
        component: Tab,
        componentSubtitle: 'Tab',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Tab', () => (
        <section className={classnames(storyStyles.storyGrid)}>
            <div className={classnames(storyStyles.storyGridItem)}>
                <Tab>
                    <TabItem icon={<IconWrapper iconName={selectIcon()}/>} label="Tab 1" isSelected={isSelected()}/>
                    <TabItem icon={<IconWrapper iconName={selectIcon()}/>} label="Tab 2" isSelected={!isSelected()}/>
                </Tab>
            </div>
        </section>
    ));
