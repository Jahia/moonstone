import markdownNotes from './AccordionItem.md?raw';
import { AccordionItem } from './index';
import { Accordion } from '~/components/Accordion';
import { Love } from '~/icons';

import type { AccordionItemProps } from './AccordionItem.types';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/AccordionItem',
    component: AccordionItem,
    decorators: [
        StoryCmp => (
            <div
                style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
            >
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: 'One section of an Accordion.',
        docs: { description: { component: markdownNotes } },
        actions: { argTypesRegex: '^on.*' },
    },
    args: { children: 'Content here' },
} as Meta<typeof AccordionItem>;

const Template: StoryFn<AccordionItemProps> = args => (
    <Accordion>
        <AccordionItem {...args}/>
    </Accordion>
);

export const WithIcon = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem',
        icon: <Love/>,
    },
};

export const WithoutIcon = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem',
    },
};
