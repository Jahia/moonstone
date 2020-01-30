import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import markdownNotes from './AccordionItem.md';

import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';
import Love from '~/tokens/icons/asset/Love.svg';

storiesOf('Components|Accordion/AccordionItem', module)
    .addParameters({
        component: AccordionItem,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('with icon', () => (
        <Accordion>
            <AccordionItem
                id="id"
                label={text('Label', 'AccordionItem Label')}
                icon={<Love/>}
            >
                {text('Content', 'My content here')}
            </AccordionItem>
        </Accordion>
    ))
    .add('without icon', () => (
        <Accordion>
            <AccordionItem
                id="id"
                label={text('Label', 'AccordionItem Label')}
            >
                {text('Content', 'My content here')}
            </AccordionItem>
        </Accordion>
    ))
    .add('actions on click', () => (
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
    ));
