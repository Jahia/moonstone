import React from 'react';
import {Story, ComponentMeta} from '@storybook/react';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import type {AccordionItemProps} from './AccordionItem.types';

import markdownNotes from './AccordionItem.md';
import {Love} from '~/icons';

export default {
    title: 'Components/Accordion/AccordionItem',
    component: AccordionItem,
    decorators: [
        StoryCmp => (
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    }
} as ComponentMeta<typeof AccordionItem>;

const Template: Story<AccordionItemProps> = args => (
    <Accordion>
        <AccordionItem {...args}>
            Content here
        </AccordionItem>
    </Accordion>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
    id: 'id',
    label: 'AccordionItem',
    icon: <Love size="big"/>
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
    id: 'id',
    label: 'AccordionItem'
};
