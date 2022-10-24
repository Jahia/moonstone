import React from 'react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

import markdownNotes from './TabItem.md';
import {TabItem} from './index';
import {tabItemColors, tabItemSizes, tabItemVariants} from './TabItem.types';

const labelValue = () => text('Label', 'TabItem');
const colorValues = () => select('Color', tabItemColors, 'default');
const sizeValues = () => select('Size', tabItemSizes, 'default');
const variantValues = () => select('Variant', tabItemVariants, 'ghost');
const isReversed = () => boolean('Is reversed', false);
const isDisabled = () => boolean('Is disabled', false);
const isSelected = () => boolean('Is selected', false);
const selectIcon = () => select('Icon', iconsName, 'Apps');

export default {
    title: 'Components/Tab/TabItem',
    decorators: [withKnobs],

    parameters: {
        component: TabItem,
        componentSubtitle: 'TabItem',
        notes: {markdown: markdownNotes}
    }
};

export const TabItemWithIconAndLabel = () => (
    <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
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
                    icon={<IconWrapper iconName={selectIcon()}/>}
                    label={labelValue()}
                    color={colorValues()}
                    size={sizeValues()}
                    variant={variantValues()}
                    isSelected={isSelected()}
                    isReversed={isReversed()}
                    isDisabled={isDisabled()}
                    onClick={() => null}
                />
            </div>
        </section>
    </div>
);

TabItemWithIconAndLabel.story = {
    name: 'TabItem with icon and label'
};
