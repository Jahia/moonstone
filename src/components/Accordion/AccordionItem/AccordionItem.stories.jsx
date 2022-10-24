import React from 'react';
import markdownNotes from './AccordionItem.md';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/Accordion/AccordionItem',
    component: AccordionItem,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const WithIcon = () => (
    <Accordion>
        <AccordionItem
            id="id"
            label="AccordionItem"
            icon={<Love size="big"/>}
        >
            Content here
        </AccordionItem>
    </Accordion>
);

export const WithoutIcon = () => (
    <Accordion>
        <AccordionItem id="id" label="AccordionItem">
            Content here
        </AccordionItem>
    </Accordion>
);

export const Actions = () => (
    <Accordion>
        <AccordionItem
            id="id"
            label="AccordionItem"
            onClickToOpen={() => {
                console.log('Event before accordion open');
            }}
            onClick={() => {
                console.log('Click event');
            }}
            onClickToClose={() => {
                console.log('Event before accordion close');
            }}
        >
            Content here
        </AccordionItem>
    </Accordion>
);
