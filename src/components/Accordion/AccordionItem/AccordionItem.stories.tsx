import markdownNotes from './AccordionItem.md';
import { AccordionItem } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Accordion } from '~/components/Accordion';
import { Love } from '~/icons';

import type { AccordionItemProps } from './AccordionItem.types';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/Accordion/AccordionItem',
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
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        notes: { markdown: markdownNotes },
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        icon: iconArgType,
    },
} as Meta<typeof AccordionItem>;

const Template: StoryFn<AccordionItemProps> = args => (
    <Accordion>
        <AccordionItem {...args}>Content here</AccordionItem>
    </Accordion>
);

export const WithIcon = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem',
        icon: <Love size="big"/>,
    },
};

export const WithoutIcon = {
    render: Template,

    args: {
        id: 'id',
        label: 'AccordionItem',
    },
};
