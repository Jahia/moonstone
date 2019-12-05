import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Accordion} from './index';
import {AccordionItem} from './AccordionItem/';

describe('Accordion', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <Accordion>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </Accordion>
        );
        expect(wrapper.querySelector('#id').exists()).toBe(true);
    });

    it('should add reversed class when component is reversed', () => {
        const wrapper = shallow(
            <Accordion isReversed>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </Accordion>
        );

        expect(wrapper.html()).toContain('accordion_reversed');
    });
});
