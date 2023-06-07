import React from 'react';
import type {StoryObj, Meta} from '@storybook/react';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';

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
} as Meta<typeof AccordionItem>;

const Template: StoryObj<typeof AccordionItem> = {
    render: args => (
        <Accordion>
            <AccordionItem {...args}>
                Content here
            </AccordionItem>
        </Accordion>
    ),
    args: {
        id: 'id',
        label: 'AccordionItem'
    }
};

export const WithIcon = {
    render: Template.render,
    args: {
        ...Template.args,
        icon: <Love size="big"/>
    }
};

export const WithoutIcon: StoryObj<typeof AccordionItem> = {
    render: Template.render,
    args: {
        ...Template.args
    }
};
