import {StoryObj, Meta} from '@storybook/react-vite';
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
            <div
                style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
            >
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof AccordionItem>;

type Story = StoryObj<AccordionItemProps>;

const Template = (args: AccordionItemProps) => (
    <Accordion>
        <AccordionItem {...args}>Content here</AccordionItem>
    </Accordion>
);

export const WithIcon: Story = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem',
        icon: <Love size="big"/>
    }
};

export const WithoutIcon: Story = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem'
    }
};
