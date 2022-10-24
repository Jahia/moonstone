import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import markdownNotes from './AccordionItem.md';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/Accordion/AccordionItem',
    decorators: [withKnobs],

    parameters: {
        component: AccordionItem,
        notes: {markdown: markdownNotes}
    }
};

export const WithIcon = () => (
    <Accordion>
        <AccordionItem
            id="id"
            label={text('Label', 'AccordionItem Label')}
            icon={<Love size="big"/>}
        >
            {text('Content', 'My content here')}
        </AccordionItem>
    </Accordion>
);

WithIcon.story = {
    name: 'with icon'
};

export const WithoutIcon = () => (
    <Accordion>
        <AccordionItem id="id" label={text('Label', 'AccordionItem Label')}>
            {text('Content', 'My content here')}
        </AccordionItem>
    </Accordion>
);

WithoutIcon.story = {
    name: 'without icon'
};

export const ActionsOnClick = () => (
    <Accordion>
        <AccordionItem
            id="id"
            label={text('Label', 'AccordionItem Label')}
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
            {text('Content', 'My content here')}
        </AccordionItem>
    </Accordion>
);

ActionsOnClick.story = {
    name: 'actions on click'
};
