import preview from '~/__storybook__/preview';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import type {AccordionItemProps} from './AccordionItem.types';

import markdownNotes from './AccordionItem.md';
import {Love} from '~/icons';

const meta = preview.meta({
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
        docs: {description: {component: markdownNotes}},
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template = (args: AccordionItemProps) => (
    <Accordion>
        <AccordionItem {...args}>Content here</AccordionItem>
    </Accordion>
);

export const WithIcon = meta.story({
    render: Template,

    args: {
        children: 'Content here',
        id: 'id',
        label: 'AccordionItem',
        icon: <Love size="big"/>
    }
});

export const WithoutIcon = meta.story({
    render: Template,

    args: {
        children: 'Content here',
        id: 'id',
        label: 'AccordionItem'
    }
});

