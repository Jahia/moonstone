import preview from '~storybook/preview';
import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import markdownNotes from './AccordionItem.md';
import {Love} from '~/icons';
import type {AccordionItemProps} from './AccordionItem.types';

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
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    },
    args: {
        children: 'Accordion Item Content'
    }
});

export const WithIcon = meta.story({
    render: (args: AccordionItemProps) => (
        <Accordion>
            <AccordionItem {...args}/>
        </Accordion>
    ),
    args: {
        id: 'id',
        label: 'AccordionItem',
        icon: <Love size="big"/>
    }
});

export const WithoutIcon = meta.story({
    render: (args: AccordionItemProps) => (
        <Accordion>
            <AccordionItem {...args}/>
        </Accordion>
    ),
    args: {
        id: 'id',
        label: 'AccordionItem'
    }
});
